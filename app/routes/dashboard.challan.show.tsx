import { useEffect, useState } from "react";
import { useChallanColumns } from "~/component/challan/challanColumns";
import { createChallan, initialChallanData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import ChallanTableUI from "~/component/challan/challanTableUI";
import { challanReadAPIURL, challans } from "~/component/statics";
import { Row } from "@tanstack/react-table";

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


    // Function to initiate CSV download
    function downloadCSV(rows: Row<any>[]) {
        if (rows.length === 0) {
            alert('No data to export');
        } else {
            let csvData = "Challan No, Bill No, Order No, From, To, Date, Category, Type, Made By, Items and Serial Numbers\n";

            rows.map((item: any) => {
                csvData += item.original.no.toString() + "," + item.original.billno + ", " + item.original.orderno + "," + item.original.from +
                    "," + item.original.to + "," + item.original.date + "," + item.original.category + "," + item.original.type + "," + item.original.madeby + "," +
                    "\"" + item.original.items.map((singleItem: any) => { return singleItem.name + " - " + singleItem.sno?.join(" & ") }).join("\n") + "\"\n";
            })
            csvData.trimEnd();

            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', `challan-${new Date().toISOString().split("T")[0]}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
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
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ "no": no, "username": profile.username, type: challans }) });
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
                        filterTypes={{ "Challan #": "no", "Made By": "madeby", "Date": "date", "To": "to", "S.No.": "sno" }}
                        exportCSV={downloadCSV}
                    />
                </div>
            </section>
        </>
    );
};

export default ChallanShow;