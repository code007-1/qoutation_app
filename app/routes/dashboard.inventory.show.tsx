import { Menu, MenuButton, MenuItem, MenuItems, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PurchaseInvoiceShow from "../component/inventory/purchaseInvoices/purchaseInvoiceShow";
import ProductShow from "../component/inventory/product/productShow";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { AlignRight, BadgeAlert, FilePenLine, Layers, ScrollText } from "lucide-react";
import { Link } from "@remix-run/react";

export default function Inventory() {
    const [selectedTabIndex, setSelectedTabIndex] = useState(-1);
    const { setHeaderText } = useGlobalContext();

    useEffect(() => {
        const selectedTab = sessionStorage.getItem("inventoryCreationSelectedTab");
        if (selectedTab) setSelectedTabIndex(parseInt(selectedTab));
    }, []);

    useEffect(() => {
        if (selectedTabIndex !== -1) sessionStorage.setItem("inventoryCreationSelectedTab", selectedTabIndex.toString());
    }, [selectedTabIndex]);

    useEffect(() => {
        const header = <>
            < Menu as="div" className="relative inline-block text-left text-sm text-textSecondary" >
                <div>
                    <MenuButton className="flex mr-10 items-center hover:bg-buttonHover px-2">
                        <div className="text-textPrimary text-xl mr-2">{"Create Inventory"}</div>
                        <AlignRight className="text-textPrimary" />
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-10 z-10 mt-2 w-52 origin-top-right divide-y divide-border rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="p-1">
                        <MenuItem>
                            <Link
                                to="/dashboard/inventory/purchaseinvoices/create"
                                className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <ScrollText size={20} className="mr-2 " />
                                Purchase Invoice
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/dashboard/challan/show"
                                className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <FilePenLine size={20} className="mr-2" />
                                Product
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/dashboard/complaints/show"
                                className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <BadgeAlert size={20} className="mr-2" />
                                Group
                            </Link>
                        </MenuItem>
                    </div>
                </MenuItems >
            </Menu >
        </>;
        setHeaderText(header);
    }, []);

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