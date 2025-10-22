import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ObjectId } from "mongodb";
import { useEffect, useState } from "react";
import CreateProduct from "~/component/inventory/product/productCreate";
import CreatePurchaseInvoice from "~/component/inventory/purchaseInvoices/purchaseInvoicesCreate";
import { useGlobalContext } from "~/modules/gcontext";

export interface ProductsData {
    _id?: ObjectId,
    name: string,
    description?: string,
    hsn?: string,
    quantity: number,
    price: number,
    link?: string,
    productid: string
}

export interface GroupsData {
    _id?: ObjectId,
    name: string,
    parent?: string,
}

export default function InventoryCreation() {
    const { setHeaderText, setGroupsData } = useGlobalContext();
    const [selectedTabIndex, setSelectedTabIndex] = useState(-1);

    useEffect(() => {
        setHeaderText("Inventory Management");
        const selectedTab = sessionStorage.getItem("inventoryCreationSelectedTab");
        if (selectedTab) setSelectedTabIndex(parseInt(selectedTab));
    }, []);

    useEffect(() => {
        if (selectedTabIndex !== -1) sessionStorage.setItem("inventoryCreationSelectedTab", selectedTabIndex.toString());
    }, [selectedTabIndex]);

    return (<>
        <div className="flex w-full mt-4 gap-x-10">
            <TabGroup className="flex w-full gap-x-4" selectedIndex={selectedTabIndex} onChange={(e) => setSelectedTabIndex(e)}>
                <div className="w-[15%]">
                    <TabList className="w-full flex flex-col space-y-2">
                        {["Create Product", "Create Group", "Add Purchase Invoice"].map((name: string) => (
                            <Tab
                                key={name}
                                className="bg-headerBackground py-2 px-4 font-semibold text-textSecondary focus:outline-none hover:bg-buttonHover text-left"
                            >
                                {name}
                            </Tab>
                        ))}

                    </TabList>
                </div>
                <TabPanels className="w-full" >
                    <TabPanel key={"Create Product"} className="">
                        <CreateProduct />
                    </TabPanel>
                    <TabPanel key={"Create Group"} className="">
                        <div className="w-full py-2 px-4 font-semibold text-textSecondary bg-buttonHover text-center">
                            Add Product Group
                        </div>

                        <div className="grid grid-cols-5 gap-4 text-textPrimary mt-4">
                            <div>
                                Group ID <div className="p-2 bg-headerBackground w-full border-0">1</div>
                            </div>
                            <div className="col-span-2">
                                Group Name <input type="text" name="groupname" placeholder="Enter Group Name" className="border border-border p-2 bg-background w-full" onChange={(e) => {
                                    setGroupsData(pre => { return { ...pre, name: e }; });
                                }} />
                            </div>
                            <div className="col-span-2">
                                Parent Group <input type="text" name="parentgroup" placeholder="Enter Parent Group" className="border border-border p-2 bg-background w-full" onChange={(e) => {
                                    setGroupsData(pre => { return { ...pre, name: e }; });
                                }} />
                            </div>
                        </div>
                        <div className="flex justify-center ">
                            <button className="button px-4 py-1 mt-4 text-lg">
                                Save
                            </button>
                        </div>
                    </TabPanel>
                    <TabPanel key={"Create Group"} className="">
                        <CreatePurchaseInvoice />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div >
    </>);
}