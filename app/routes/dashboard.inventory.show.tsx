import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PurchaseInvoiceShow from "../component/inventory/purchaseInvoices/purchaseInvoiceShow";
import ProductShow from "../component/inventory/product/productShow";
import { useEffect, useState } from "react";

export default function Inventory() {
    const [selectedTabIndex, setSelectedTabIndex] = useState(-1);

    useEffect(() => {
        const selectedTab = sessionStorage.getItem("inventoryCreationSelectedTab");
        if (selectedTab) setSelectedTabIndex(parseInt(selectedTab));
    }, []);

    useEffect(() => {
        if (selectedTabIndex !== -1) sessionStorage.setItem("inventoryCreationSelectedTab", selectedTabIndex.toString());
    }, [selectedTabIndex]);

    return (
        <>
            <section className="mt-2">
                <TabGroup className="" selectedIndex={selectedTabIndex} onChange={e => setSelectedTabIndex(e)}>
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
                            <ProductShow />
                        </TabPanel>
                        <TabPanel key={"Groups"} className="">
                            Groups
                        </TabPanel>
                        <TabPanel key={"Invoices"} className="">
                            <PurchaseInvoiceShow />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </section>
        </>
    );
};