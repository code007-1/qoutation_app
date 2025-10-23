import { useEffect, useId, useRef, useState } from "react";
import { useComplaintsColumn } from "~/component/complaints/complaintColumns";
import { createComplaint, initialComplaintsData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { complaintAdvnanceReadAPIURL, complaintReadAPIURL } from "~/component/statics";
import TableUI from "~/component/tableUI";
import { Dialog } from "~/component/menu/about";
import { X } from "lucide-react";
import { Row } from "@tanstack/react-table";

const ComplaintShow = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { oldComplaintsData, setHeaderText, complaintsDataCount, setComplaintsDataCount, setOldComplaintsData, setComplaintsData, profile } = useGlobalContext();
    async function getComplaints() {
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

    async function handleAdvanceSearch(query?: Record<string, any>) {
        setLoading(true);
        let response;
        if (query) {
            // Build query string dynamically based on provided keys
            const params = new URLSearchParams();
            Object.entries(query).forEach(([key, value]) => {
                if (value !== undefined && value !== "") {
                    params.append(key, value);
                }
            });
            response = await fetcher(`${complaintAdvnanceReadAPIURL}&${params.toString()}`);
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
            response = await fetcher(`${complaintReadAPIURL}&skip=${complaintsDataCount}`);
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

    // Function to initiate CSV download
    function downloadCSV(rows: Row<any>[]) {
        // update this
        if (rows.length === 0) {
            alert('No data to export');
        } else {
            let csvData = "Quotation No, Order No, From, To, Date, Category, Type, Made By, Items and Serial Numbers\n";

            rows.map((item: any) => {
                csvData += item.original.no.toString() + "," + item.original.orderno + "," + item.original.from +
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

    useEffect(() => {
        setComplaintsData(initialComplaintsData());
        setHeaderText(createComplaint);
        if (complaintsDataCount === 0)
            getComplaints();
    }, []);

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState({ start: "", end: "", to: "" });
    const _titleId = useId();
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    // Focus management: move focus to close button when opened
    useEffect(() => {
        if (open) {
            closeBtnRef.current?.focus();
        }
    }, [open]);

    return (
        <>
            <section className="mt-5">
                <div>
                    <Dialog open={open} onClose={() => setOpen(false)} title="About imaGine">
                        <div className="flex items-center justify-between p-4 bg-headerBackground">
                            <h2 id={_titleId} className="text-lg font-semibold text-textPrimary">
                                Advance Filter
                            </h2>
                            <button
                                ref={closeBtnRef}
                                onClick={() => { setOpen(false) }}
                                className="inline-flex h-9 w-9 items-center justify-center bg-button hover:bg-button/75"
                                aria-label="Close dialog"
                            >
                                <X className="h-6 w-6 text-buttonTextPrimary" />
                            </button>
                        </div>
                        <div className="flex items-center space-x-2 p-4 w-full">
                            <div className="text-textPrimary font-semibold">Start Date</div>
                            <input type="date" className="p-2" onChange={(e) => { setQuery(pre => { return { ...pre, start: e.target.value } }) }} />
                            <div className="text-textPrimary font-semibold">End Date</div>
                            <input type="date" className="p-2" onChange={(e) => { setQuery(pre => { return { ...pre, end: e.target.value } }) }} />
                        </div>

                        <div className="flex justify-between gap-2 p-4">
                            <button
                                type="button"
                                onClick={() => { handleAdvanceSearch(query); setOpen(false); }}
                                className="bg-button font-semibold text-buttonTextPrimary px-4 py-1 mt-4"
                            >
                                Search
                            </button>
                            <button
                                onClick={() => { setOpen(false) }}
                                className="inline-flex font-semibold items-center gap-2 px-4 py-1 mt-4 text-buttonTextPrimary bg-button hover:bg-button/75"
                            >
                                {profile.username === "gunjan" ? "Okie" : "Close"}
                            </button>
                        </div>
                    </Dialog >
                    <TableUI
                        data={oldComplaintsData}
                        columns={useComplaintsColumn()}
                        EmptyText="No Complaints Data Found!"
                        isFetching={loading}
                        advanceSearch={handleAdvanceSearch}
                        advanceSearchOpen={setOpen}
                        refresh={getComplaints}
                        filterTypes={{ "Complaint #": "no", "Recorded By": "recordedby", "Date": "date", "Status": "status", "Type": "type" }}
                        exportCSV={downloadCSV}
                    />
                </div>
            </section>
        </>
    );
};

export default ComplaintShow;