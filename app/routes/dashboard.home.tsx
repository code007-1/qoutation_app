import React, { useEffect, useState } from "react";

// Import these components correctly depending on your structure

import { Columns } from "~/component/table/columns";

import { dummyQuotations } from "~/component/table/data";
import TableUI from "~/component/table/tableUI";
import { createQuotation, useGlobalContext } from "~/modules/gcontext";
import { QuotationData } from "./dashboard.quote";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useLoaderData } from "@remix-run/react";
import { useNotification } from "~/modules/notificationContext";


const StaffTable = () => {

    const data = useLoaderData();
    // Initiate your states
    const [items, setItems] = useState<QuotationData[]>(dummyQuotations);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(1);

    // For pagination, define maximum of data per page

    const ITEMS_PER_PAGE = 10;

    const { setHeaderText } = useGlobalContext();
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    useEffect(() => {
        setHeaderText(createQuotation)
        async function getQoutes() {
            const response = await fetcher("/api/quotes");
            if (response.status === 200) {
                setItems(await response.json());
            }
            else {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
        }
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


    const DataLength = items.length;



    return (
        <section className="mt-5">
            <h3 className="text-[18px] mb-2 md:text-[24px] text-black">

            </h3>
            <div>
                <TableUI
                    data={items}
                    columns={Columns}
                    searchLabel="Search by Name or job title"
                    EmptyText="No staff found!"
                    isFetching={loading}
                    pageCount={totalPageCount}
                //page={handlePageChange}
                //search={handleSearch}
                />
            </div>
        </section>
    );
};

export default StaffTable;