import { useEffect, useState } from "react";
import { QuotationsColumns } from "~/component/quotation/quotationColumns";
import QuotationsTableUI from "~/component/quotation/quotationsTableUI";
import { createComplaint, initialQuotationData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";

const ComplaintShow = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { quoteData, setHeaderText, dataCount, setDataCount, setQuoteData, setData, setItems, profile } = useGlobalContext();
    async function getQoutes() {
        setLoading(true);
        const response = await fetcher(`/api/complaints`);
        if (response.status === 200) {
            const data = await response.json()
            setQuoteData(data);
            setDataCount(data.length);
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
        setLoading(false);
    }

    async function handleAdvanceSearch(query?: { start: string, end: string, to: string }) {
        setLoading(true);
        let response;
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
            setLoading(false);
        }
        else {
            setLoading(true);
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
            setLoading(false);
        }
    }

    async function handleDeleteComplaint(no: string) {
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ "no": no, "username": profile.username, type: "quotations" }) });
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
        setData(initialQuotationData());
        setItems([]);
        setHeaderText(createComplaint);
        if (dataCount === 0)
            getQoutes();
    }, []);

    return (
        <>
            <section className="mt-5">
                <div>
                    <QuotationsTableUI
                        data={quoteData}
                        columns={QuotationsColumns}
                        searchLabel="Search by Name or job title"
                        EmptyText="No Quotations Found!"
                        isFetching={loading}
                        search={handleAdvanceSearch}
                        refresh={getQoutes}
                        deleteQuotation={handleDeleteComplaint}
                    />
                </div>
            </section>
        </>
    );
};

export default ComplaintShow;