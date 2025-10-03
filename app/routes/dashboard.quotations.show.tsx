import { useEffect, useState } from "react";
import { useQuotationsColumns } from "~/component/quotation/quotationColumns";
import QuotationsTableUI from "~/component/quotation/quotationsTableUI";
import { createQuotation, initialQuotationData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { quotationDeleteAPIURL, quotationReadAPIURL } from "~/component/statics";

const QuotationsShow = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { oldQuotationData, setHeaderText, quotationDataCount, setQuotationDataCount, setOldQuotationData, setQuotationData, setQuotationItems, profile } = useGlobalContext();
    async function getQoutes() {
        setLoading(true);
        const response = await fetcher(`${quotationReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json()
            setOldQuotationData(data);
            setQuotationDataCount(data.length);
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
            response = await fetcher(`${quotationReadAPIURL}?start=${query.start}&end=${query.end}&to=${query.to}`);
            if (response.status === 200) {
                const data = await response.json();
                setOldQuotationData(data);

            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setQuotationDataCount(0);
            setLoading(false);
        }
        else {
            setLoading(true);
            response = await fetcher(`${quotationReadAPIURL}?skip=${quotationDataCount}`);
            if (response.status === 200) {
                const data = await response.json();
                if (quotationDataCount == 0) {
                    setOldQuotationData(data);
                    setQuotationDataCount(data.length);
                }
                else {
                    setOldQuotationData(pre => { return [...pre, ...data] });
                    setQuotationDataCount(oldQuotationData.length + data.length);
                }
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setLoading(false);
        }
    }

    async function handleDeletequotation(no: string) {
        const result = await fetcher(quotationDeleteAPIURL, { method: "POST", body: JSON.stringify({ "no": no, "username": profile.username, type: "quotations" }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldQuotationData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }

    useEffect(() => {
        setQuotationData(initialQuotationData());
        setQuotationItems([]);
        setHeaderText(createQuotation);
        if (quotationDataCount === 0)
            getQoutes();
    }, []);

    return (
        <>
            <section className="mt-5">
                <div>
                    <QuotationsTableUI
                        data={oldQuotationData}
                        columns={useQuotationsColumns()}
                        searchLabel="Search by Name or job title"
                        EmptyText="No Quotations Found!"
                        isFetching={loading}
                        search={handleAdvanceSearch}
                        refresh={getQoutes}
                        deleteQuotation={handleDeletequotation}
                    />
                </div>
            </section>
        </>
    );
};

export default QuotationsShow;