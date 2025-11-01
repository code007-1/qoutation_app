import { useEffect, useId, useRef, useState } from "react";
import { useQuotationsColumns } from "~/component/quotation/quotationColumns";
import { createQuotation, initialQuotationData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { quotationAdvnanceReadAPIURL, quotationReadAPIURL } from "~/component/statics";
import TableUI from "~/component/tableUI";
import { Dialog } from "~/component/menu/about";
import { AlignLeft, BadgeAlert, FilePenLine, ScrollText, X } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { MenuButton, MenuItem, MenuItems, Menu, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { Link } from "@remix-run/react";
import ProductShow from "~/component/inventory/product/productShow";

const QuotationsShow = () => {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();
    const [selectedTabIndex, setSelectedTabIndex] = useState(-1);

    const { oldQuotationData, setHeaderText, quotationDataCount, setQuotationDataCount, setOldQuotationData, setQuotationData, setQuotationItems, profile } = useGlobalContext();

    async function getQoutes() {
        setLoading(true);
        const response = await fetcher(`${quotationReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json();
            setOldQuotationData(data);
            setQuotationDataCount(data.length);
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

            response = await fetcher(`${quotationAdvnanceReadAPIURL}&${params.toString()}`);
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
            response = await fetcher(`${quotationReadAPIURL}&skip=${quotationDataCount}`);
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

    const quotationsHeader = <>
        < Menu as="div" className="relative inline-block text-left text-sm text-textSecondary" >
            <div>
                <MenuButton className="flex mr-10 items-center hover:bg-buttonHover px-2 text-textPrimary">
                    <AlignLeft className="text-textPrimary mr-2" />
                    <div className="text-xl mr-2">Create Quotation</div>
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-10 z-10 mt-2 w-52 origin-top-right divide-y divide-border rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="p-1">
                    <MenuItem>
                        <Link
                            to="/dashboard/quotations/create/full"
                            className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                        >
                            Full Quotation
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            to="/dashboard/quotations/create/short"
                            className="flex px-4 py-2    data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                        >
                            Short Quotation
                        </Link>
                    </MenuItem>
                </div>
            </MenuItems >
        </Menu >
    </>;

    useEffect(() => {

        setQuotationData(initialQuotationData());
        setQuotationItems([]);
        setHeaderText(quotationsHeader);
        if (quotationDataCount === 0)
            getQoutes();
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
                <TabGroup className="" selectedIndex={selectedTabIndex} onChange={e => setSelectedTabIndex(e)}>
                    <TabList className="flex justify-center w-full">
                        <div className="flex bg-headerBackground w-[25%] justify-evenly" tabIndex={0}>
                            {["Full Quotations", "Short Quotations"].map((name: string) => (
                                <Tab
                                    key={name}
                                    className="w-full py-2 px-4 font-semibold text-textSecondary focus:outline-none hover:bg-buttonHover"
                                >
                                    {name}
                                </Tab>
                            ))}
                        </div>
                    </TabList>

                    <TabPanels className="mt-3">
                        <TabPanel key={"Groups"} className="">
                            Something 1
                        </TabPanel>
                        <TabPanel key={"Invoices"} className="">
                            Something 2
                        </TabPanel>
                    </TabPanels>
                </TabGroup>

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
                    </Dialog>
                    <TableUI
                        data={oldQuotationData}
                        columns={useQuotationsColumns()}
                        EmptyText="No Quotations Found!"
                        isFetching={loading}
                        advanceSearch={handleAdvanceSearch}
                        refresh={getQoutes}
                        filterTypes={{ "Quotation #": "no", "Made By": "madeby", "Date": "date", "To": "to" }}
                        exportCSV={downloadCSV}
                        advanceSearchOpen={setOpen}
                    />
                </div>
            </section>
        </>
    );
};

export default QuotationsShow;