import { useEffect, useState } from "react";
import { ChallanColumn } from "~/component/challan/challanColumns";
import { createChallan, initialChallanData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import ChallanTableUI from "~/component/challan/challanTableUI";

const QuotationsShow = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { setHeaderText, challanDataCount, setChallanDataCount, setoldChallanData, setChallanData, setChallanItems, profile, oldChallanData } = useGlobalContext();
    async function getQoutes() {
        setLoading(true);
        const response = await fetcher(`/api/quotations`);
        if (response.status === 200) {
            const data = await response.json()
            setoldChallanData(data);
            setChallanDataCount(data.length);//dataCount + 
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
        setLoading(false);
    }

    async function handleAdvanceSearch(query?: { start: string, end: string, to: string }) {
        setLoading(true);
        var response;
        if (query) {
            response = await fetcher(`/api/quotations?start=${query.start}&end=${query.end}&to=${query.to}`);
            if (response.status === 200) {
                const data = await response.json();
                setoldChallanData(data);

            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setChallanDataCount(0);
            setLoading(false);
        }
        else {
            setLoading(true);
            response = await fetcher(`/api/quotations?skip=${challanDataCount}`);
            if (response.status === 200) {
                const data = await response.json();
                if (challanDataCount == 0) {
                    setoldChallanData(data);
                    setChallanDataCount(data.length);
                }
                else {
                    setoldChallanData(pre => { return [...pre, ...data] });
                    setChallanDataCount(oldChallanData.length + data.length);
                }
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setLoading(false);
        }
    }

    async function handleDeletequotation(no: string) {
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ "no": no, "username": profile.username }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setoldChallanData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }

    useEffect(() => {
        setChallanData(initialChallanData());
        setChallanItems([]);
        setHeaderText(createChallan);
        if (challanDataCount === 0)
            getQoutes();
    }, []);

    return (
        <>
            <section className="mt-5">
                <div>
                    <ChallanTableUI
                        data={oldChallanData}
                        columns={ChallanColumn}
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

export default QuotationsShow;