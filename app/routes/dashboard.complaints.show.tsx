import { useEffect, useState } from "react";
import { useComplaintsColumn } from "~/component/complaints/complaintColumns";
import { createComplaint, initialComplaintsData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { compalints, complaintReadAPIURL } from "~/component/statics";
import ComplaintTableUI from "~/component/complaints/complaintTableUI";

const ComplaintShow = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { oldComplaintsData, setHeaderText, complaintsDataCount, setComplaintsDataCount, setOldComplaintsData, setComplaintsData, profile } = useGlobalContext();
    async function getQoutes() {
        setLoading(true);
        const response = await fetcher(`${complaintReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json()
            setOldComplaintsData(data);
            setComplaintsDataCount(data.length);
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
            response = await fetcher(`${complaintReadAPIURL}?start=${query.start}&end=${query.end}&to=${query.to}`);
            if (response.status === 200) {
                const data = await response.json();
                setOldComplaintsData(data);
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setComplaintsDataCount(0);
            setLoading(false);
        }
        else {
            setLoading(true);
            response = await fetcher(`${complaintReadAPIURL}?skip=${complaintsDataCount}`);
            if (response.status === 200) {
                const data = await response.json();
                if (complaintsDataCount == 0) {
                    setOldComplaintsData(data);
                    setComplaintsDataCount(data.length);
                }
                else {
                    setOldComplaintsData(pre => { return [...pre, ...data] });
                    setComplaintsDataCount(oldComplaintsData.length + data.length);
                }
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setLoading(false);
        }
    }

    async function handleDeleteComplaint(no: string) {
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ "no": no, "username": profile.username, type: compalints }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldComplaintsData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }

    useEffect(() => {
        setComplaintsData(initialComplaintsData());
        setHeaderText(createComplaint);
        if (complaintsDataCount === 0)
            getQoutes();
    }, []);

    return (
        <>
            <section className="mt-5">
                <div>
                    <ComplaintTableUI
                        data={oldComplaintsData}
                        columns={useComplaintsColumn()}
                        searchLabel="Search by Name or job title"
                        EmptyText="No Complaints Data Found!"
                        isFetching={loading}
                        search={handleAdvanceSearch}
                        refresh={getQoutes}
                        deleteComplaints={handleDeleteComplaint}
                    />
                </div>
            </section>
        </>
    );
};

export default ComplaintShow;