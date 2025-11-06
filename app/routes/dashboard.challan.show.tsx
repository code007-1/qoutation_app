import { useEffect, useId, useRef, useState } from "react";
import { useChallanColumns } from "~/component/challan/challanColumns";
import { createChallan, initialChallanData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import TableUI from "~/component/tableUI";
import { challanAdvnanceReadAPIURL, challanReadAPIURL, challans } from "~/component/statics";
import { Row } from "@tanstack/react-table";
import { Dialog } from "~/component/menu/about";
import { X } from "lucide-react";

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
            response = await fetcher(`${challanAdvnanceReadAPIURL}&${params.toString()}`);
            if (response.status === 200) {
                const data = await response.json();
                setOldChallanData(data);
            }
            else {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setChallanDataCount(0);
            setLoading(false);
        }
        else {
            setLoading(true);
            response = await fetcher(`${challanReadAPIURL}&skip=${challanDataCount}`);
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
            else {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        setChallanData(initialChallanData());
        setChallanItems([]);
        setHeaderText(createChallan);
        if (challanDataCount === 0)
            getChallans();
    }, []);

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState({ sno: "" });
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
                        <div className="mt-2 p-4 flex items-center text-textPrimary">
                            <div className="w-[15%] font-semibold">S. No.</div>
                            <input type="text" className="inputHollow w-[85%]" value={query.sno} onChange={(e) => { setQuery(pre => { return { ...pre, sno: e.target.value } }) }} />
                        </div>
                        <div className="flex justify-between gap-2 p-4">
                            <button
                                type="button"
                                onClick={() => { handleAdvanceSearch(query); setOpen(false); }}
                                className="button px-4 py-1 mt-4 font-semibold"
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
                        data={oldChallanData}
                        columns={useChallanColumns()}
                        EmptyText="No Challans Found!"
                        isFetching={loading}
                        advanceSearch={handleAdvanceSearch}
                        refresh={getChallans}
                        filterTypes={{ "Challan #": "no", "Made By": "madeby", "Date": "date", "To": "to", "S.No.": "sno" }}
                        exportCSV={downloadCSV}
                        advanceSearchOpen={setOpen}
                    />
                </div>
            </section>
        </>
    );
};

export default ChallanShow;