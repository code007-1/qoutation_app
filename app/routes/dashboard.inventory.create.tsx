import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Minus } from "lucide-react";
import { ObjectId } from "mongodb";
import { useEffect, useState } from "react";
import ProductAutocompleteSearch from "~/component/product/productAutocompleteSearch";
import { useGlobalContext } from "~/modules/gcontext";

export interface ProductsData {
    _id?: ObjectId,
    name: string,
    description?: string,
    hsn?: string,
    price: number,
    link?: string,
    id: string
}

export interface GroupsData {
    _id?: ObjectId,
    name: string,
    parent?: string,
}

export interface InvoiceItem {
    id: string, // product id
    name: string, // product name
    quantity: number, // product name
    price: number, // purchase price
    discount: number, // is there any discount on purchase price
    sno: string[]
}

export default function InventoryCreation() {
    const { setHeaderText, groupsData, setGroupsData } = useGlobalContext();
    const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([]);

    function addItem() {
        //const newKey = new Date().getTime() + 1;
        setInvoiceItems(pre => {
            return [
                ...pre,
                { id: "0", name: "", price: 0, quantity: 0, discount: 0, sno: [] }
            ]
        });
    }

    useEffect(() => {
        setHeaderText("Inventory Management");
    }, []);

    return (<>
        <div className="flex w-full mt-4 gap-x-10">
            <TabGroup className="flex w-full gap-x-4">
                <div className="w-[15%]">
                    <TabList className="w-full bg-headerBackground flex flex-col">
                        {["Create Product", "Create Group", "Add Incoming Invoice"].map((name: string) => (
                            <Tab
                                key={name}
                                className="py-2 px-4 font-semibold text-textSecondary focus:outline-none hover:bg-buttonHover text-left"
                            >
                                {name}
                            </Tab>
                        ))}

                    </TabList>
                </div>
                <TabPanels className="w-full">
                    <TabPanel key={"Create Product"} className="">
                        <div className="w-full py-2 px-4 font-semibold text-textSecondary bg-buttonHover text-center">
                            Add Product
                        </div>

                        <div className="grid grid-cols-6 gap-4 text-textPrimary mt-4">
                            <div>
                                Product ID <div className="p-2 bg-headerBackground w-full border-0 ">1</div>
                            </div>
                            <div>
                                Product HSN Code <input type="text" name="hsncode" placeholder="Enter HSN Code" className="border border-border p-2 bg-background w-full" onChange={(e) => {

                                }} />
                            </div>
                            <div className="">
                                Product Brand Name <input type="text" name="productname" placeholder="Enter Product Brand Name" className="border border-border p-2 bg-background w-full" onChange={(e) => {

                                }} />
                            </div>
                            <div className="col-span-3">
                                Product Model No. <input type="text" name="productname" placeholder="Enter Product Model No." className="border border-border p-2 bg-background w-full" onChange={(e) => {

                                }} />
                            </div>
                            <div>
                                Product Quantity <div className="p-2 bg-headerBackground w-full border-0 ">0</div>
                            </div>
                            <div>
                                Product Price <input type="text" name="productid" placeholder="Enter Product Price" className="border border-border p-2 bg-background w-full" onChange={(e) => {

                                }} />
                            </div>
                            <div>
                                Product Group <textarea rows={3} name="productgroup" placeholder="Product Group" className="border border-border p-2 bg-background w-full" onChange={(e) => {

                                }} />
                            </div>
                            <div className="col-span-3">
                                Product Description <textarea rows={3} name="productdescrition" placeholder="Enter Product Description" className="border border-border p-2 bg-background w-full" onChange={(e) => {

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
                        <div className="w-full flex justify-between items-center px-4 font-semibold text-textSecondary bg-buttonHover text-center">
                            <div></div>
                            <div>Add Incoming Invoice</div>
                            <button onClick={addItem} className="button px-4 py-2">
                                Add Item
                            </button>
                        </div>

                        <div className="grid grid-cols-6 gap-4 text-textPrimary mt-4">
                            <div className="col-span-1">
                                Invoice No. <input type="text" name="invoiceno" placeholder="Enter Invoice No." className="border border-border p-2 bg-background w-full" onChange={(e) => {

                                }} />
                            </div>
                            <div className="col-span-4">
                                Vendor Name <input type="text" name="vendorname" placeholder="Enter Vendor Name" className="border border-border p-2 bg-background w-full" onChange={(e) => {

                                }} />
                            </div>
                            <div className="col-span-1">
                                Date
                                <input id="date" type="date" color="white" name="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border h-10 bg-background w-full px-2" />
                            </div>
                            <div className="col-span-6">
                                <div className="mt-0 space-y-2 overflow-y-auto h-[calc(100vh-250px)] w-full">
                                    <div className="flex relative w-auto gap-x-2">
                                        <div className="grid grid-cols-12 gap-x-2 w-[98%]">
                                            <div className="col-span-1 p-2">id</div>
                                            <div className="col-span-3 p-2">Name</div>
                                            <div className="col-span-4 p-2">Serial No</div>
                                            <div className="col-span-1 p-2">Quantity</div>
                                            <div className="col-span-1 p-2">Price</div>
                                            <div className="col-span-1 p-2">Discount</div>
                                        </div>
                                        <button className="invisible p-2"><Minus className="text-textSecondary" /></button>
                                    </div>
                                    {
                                        invoiceItems.map((_, index) => {
                                            return <>
                                                <ProductAutocompleteSearch key={index} index={index} invoiceItems={invoiceItems} setInvoiceItems={setInvoiceItems} />
                                            </>;
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center ">
                            <button className="button px-4 py-1 mt-4 text-lg">
                                Save
                            </button>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div >
    </>);
}