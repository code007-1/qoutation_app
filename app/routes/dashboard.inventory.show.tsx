import { useEffect, useState } from "react";
import { useComplaintsColumn } from "~/component/complaints/complaintColumns";
import { createInvetory, initialComplaintsData, initialProductData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { compalints, complaintReadAPIURL, productReadAPIURL } from "~/component/statics";
import ComplaintTableUI from "~/component/complaints/complaintTableUI";
import { useProductsolumn as useProductsColumn } from "~/component/product/productColumns";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ProductTableUI from "~/component/inventory/purchaseInvoices/product/productTableUI";
import ChallanTableUI from "~/component/challan/challanTableUI";

export default function Inventory() {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { oldProductsData, setHeaderText, productsDataCount, setProductsDataCount, setOldProductsData, setProductsData, profile } = useGlobalContext();
    async function getInventory() {
        setLoading(true);
        const response = await fetcher(`${productReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json()
            console.log("products : ", data);
            setOldProductsData(data);
            setProductsDataCount(data.length);
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
                setOldProductsData(data);
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setProductsDataCount(0);
            setLoading(false);
        }
        else {
            setLoading(true);
            response = await fetcher(`${complaintReadAPIURL}?skip=${productsDataCount}`);
            if (response.status === 200) {
                const data = await response.json();
                if (productsDataCount == 0) {
                    setOldProductsData(data);
                    setProductsDataCount(data.length);
                }
                else {
                    setOldProductsData(pre => { return [...pre, ...data] });
                    setProductsDataCount(oldProductsData.length + data.length);
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
            setOldProductsData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }

    useEffect(() => {
        setProductsData(initialProductData());
        setHeaderText(createInvetory);
        if (productsDataCount === 0)
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
                                <ProductTableUI
                                    data={oldProductsData}
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