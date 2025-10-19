import { useEffect, useState } from "react";
import { useComplaintsColumn } from "~/component/complaints/complaintColumns";
import { createInvetory, initialComplaintsData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { compalints, complaintReadAPIURL, productReadAPIURL } from "~/component/statics";
import ComplaintTableUI from "~/component/complaints/complaintTableUI";
import { useProductsolumn as useProductsColumn } from "~/component/product/productColumns";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function Inventory() {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { oldComplaintsData, setHeaderText, complaintsDataCount, setComplaintsDataCount, setOldComplaintsData, setComplaintsData, profile } = useGlobalContext();
    async function getInventory() {
        setLoading(true);
        const response = await fetcher(`${productReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json()
            console.log("products : ", data);
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

    async function handleDeleteInventory(no: string) {
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
        setHeaderText(createInvetory);
        if (complaintsDataCount === 0)
            getInventory();
    }, []);

    return (
        <>
            <section className="mt-2">
                <TabGroup className="">
                    <TabList className="flex justify-center w-full">
                        <div className="flex bg-headerBackground w-[25%] justify-evenly" tabIndex={0}>
                            {["Products", "Groups", "Invoices"].map((name: string) => (
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
                        <TabPanel key={"Products"} className="">
                            <div>
                                <ComplaintTableUI
                                    data={oldComplaintsData}
                                    columns={useProductsColumn()}
                                    searchLabel="Search by Name or job title"
                                    EmptyText="No Complaints Data Found!"
                                    isFetching={loading}
                                    search={handleAdvanceSearch}
                                    refresh={getInventory}
                                    deleteComplaints={handleDeleteInventory}
                                />
                            </div>
                        </TabPanel>

                        <TabPanel key={"Groups"} className="">
                            Groups
                        </TabPanel>
                        <TabPanel key={"Invoices"} className="">
                            Invoices
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </section>
        </>
    );
};