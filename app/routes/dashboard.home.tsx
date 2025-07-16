import React, { useEffect, useState } from "react";

// Import these components correctly depending on your structure

import { Columns } from "~/component/table/columns";

import { dummyQuotations } from "~/component/table/data";
import TableUI from "~/component/table/tableUI";
import { createQuotation, initialQoutationData, useGlobalContext } from "~/modules/gcontext";
import { QuotationData } from "./dashboard.quote";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useLoaderData } from "@remix-run/react";
import { useNotification } from "~/modules/notificationContext";


const StaffTable = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    // For pagination, define maximum of data per page

    const ITEMS_PER_PAGE = 10;

    const { quoteData, setHeaderText, dataCount, setDataCount, setQuoteData, setData, setItems } = useGlobalContext();
    async function getQoutes() {
        const response = await fetcher(`/api/quotations`);
        if (response.status === 200) {
            const data = await response.json()
            setQuoteData(data);
            setDataCount(data.length);//dataCount + 
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
    }

    async function handleAdvanceSearch(query?: { start: string, end: string, to: string }) {
        var response;
        if (query) {
            response = await fetcher(`/api/quotations?start=${query.start}&end=${query.end}&to=${query.to}`);
            if (response.status === 200) {
                const data = await response.json();
                setQuoteData(data);
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setDataCount(0);
        }
        else {
            response = await fetcher(`/api/quotations?skip=${dataCount}`);
            if (response.status === 200) {
                const data = await response.json();
                if (dataCount == 0) {
                    setQuoteData(data);
                    setDataCount(data.length);
                }
                else {
                    setQuoteData(pre => { return [...pre, ...data] });
                    setDataCount(quoteData.length + data.length);
                }
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
        }
    }

    useEffect(() => {
        setData(initialQoutationData());
        setItems([]);
        setHeaderText(createQuotation);
        if (dataCount === 0)
            getQoutes();
    }, []);


    /*    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };
    
    
    // handle the search here
    
    const handleSearch = (query: string) => {
        query = query.toLowerCase();
        if (query.trim() === "") {
            // Restore the original data when the search query is empty
            setItems(dummyQuotations);
        } else {
            const filteredData = items.filter((item: QuotationData) =>
                item.no.toLowerCase().includes(query) ||
                item.madeby.toLowerCase().includes(query) ||
                item.to.toLowerCase().includes(query)
            );
            setItems(filteredData || []);
        }
        console.log("search terms is", query, query.trim() === "");
    };*/


    //const DataLength = items.length;



    return (
        <>
            <section className="mt-5">
                <div>
                    <TableUI
                        data={quoteData}
                        columns={Columns}
                        searchLabel="Search by Name or job title"
                        EmptyText="No staff found!"
                        isFetching={loading}
                        //page={handlePageChange}
                        search={handleAdvanceSearch}
                        refresh={getQoutes}
                    />
                </div>
            </section>
        </>
    );
};

export default StaffTable;