import { useEffect, useState } from "react";
import { useChallanColumns } from "~/component/challan/challanColumns";
import { createChallan, initialChallanData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import ChallanTableUI from "~/component/challan/challanTableUI";
import { challanReadAPIURL } from "~/component/statics";

const ChallanShow = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { setHeaderText, challanDataCount, setChallanDataCount, setOldChallanData, setChallanData, setChallanItems, profile, oldChallanData } = useGlobalContext();
    async function getChallans() {
        setLoading(true);
        const response = await fetcher(`${challanReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json()
            setOldChallanData(data);
            setChallanDataCount(data.length);
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
        setLoading(false);
    }

    async function handleAdvanceSearch(query?: { sno: string }) {
        setLoading(true);
        let response;
        if (query) {
            response = await fetcher(`${challanReadAPIURL}?sno=${query.sno}`);
            if (response.status === 200) {
                const data = await response.json();
                setOldChallanData(data);

            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setChallanDataCount(0);
            setLoading(false);
        }
        else {
            setLoading(true);
            response = await fetcher(`${challanReadAPIURL}?skip=${challanDataCount}`);
            if (response.status === 200) {
                const data = await response.json();
                if (challanDataCount == 0) {
                    setOldChallanData(data);
                    setChallanDataCount(data.length);
                }
                else {
                    setOldChallanData(pre => { return [...pre, ...data] });
                    setChallanDataCount(oldChallanData.length + data.length);
                }
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setLoading(false);
        }
    }

    async function handleDeleteChallan(no: string) {
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ "no": no, "username": profile.username, type: "challans" }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldChallanData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }

    useEffect(() => {
        setChallanData(initialChallanData());
        setChallanItems([]);
        setHeaderText(createChallan);
        if (challanDataCount === 0)
            getChallans();
    }, []);

    return (
        <>
            <section className="mt-5">
                <div>
                    <ChallanTableUI
                        data={oldChallanData}
                        columns={useChallanColumns()}
                        searchLabel="Search by Name or job title"
                        EmptyText="No Challans Found!"
                        isFetching={loading}
                        search={handleAdvanceSearch}
                        refresh={getChallans}
                        deleteChallan={handleDeleteChallan}
                    />
                </div>
            </section>
        </>
    );
};

export default ChallanShow;