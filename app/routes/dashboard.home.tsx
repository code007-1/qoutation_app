import { useEffect, useState } from "react";

// Import these components correctly depending on your structure

import { Columns } from "~/component/table/columns";
import TableUI from "~/component/table/tableUI";
import { createQuotation, initialQoutationData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { userProfile } from "~/modules/utils";

const StaffTable = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { quoteData, setHeaderText, dataCount, setDataCount, setQuoteData, setData, setItems, profile } = useGlobalContext();
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

    async function handleDeletequotation(no: string) {
        //console.log("deleting quotation no : ", no, " by user : ", profile.username);
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ "no": no, "username": profile.username }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setQuoteData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }

    useEffect(() => {
        setData(initialQoutationData());
        setItems([]);
        setHeaderText(createQuotation);
        if (dataCount === 0)
            getQoutes();
    }, []);

    return (
        <>
            <section className="mt-5">
                <div>
                    <TableUI
                        data={quoteData}
                        columns={Columns}
                        searchLabel="Search by Name or job title"
                        EmptyText="No Quotations Found!"
                        isFetching={loading}
                        //page={handlePageChange}
                        search={handleAdvanceSearch}
                        refresh={getQoutes}
                        deleteQuotation={handleDeletequotation}
                    />
                </div>
            </section>
        </>
    );
};

export default StaffTable;