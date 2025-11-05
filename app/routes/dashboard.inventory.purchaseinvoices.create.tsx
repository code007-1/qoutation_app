import { useEffect } from "react";
import { initialPurchaseInvoiceData, useGlobalContext } from "~/modules/gcontext";
import PurchaseInvoiceAutocompleteSearch from "../component/inventory/purchaseInvoices/purchaseInvoiceAutocompleteSearch";
import { useCentralFetcher } from "../component/centralFetcher";
import { purchaseInvoiceCreateAPIURL } from "../component/statics";
import { ObjectId } from "mongodb";
import { useLocation } from "@remix-run/react";

/*
        {
  "serial": "SN001",
  "productId": "abc123",
  "purchaseInvoice": "INV-P001",
  "saleInvoice": "INV-S005", // null if unsold
  "status": "sold", // or "in_stock"
  "timestamps": {
    "purchased": "2025-10-19",
    "sold": "2025-10-21"
  }
}
  2. Invoice Documents Reference Serials
Purchase invoice stores list of serials added.

Sales invoice stores list of serials sold.

These are references, not the source of truth.
Product Document Stores Quantity

update to purchase or sale invoice ddirectly after editing and in serials collection match for particular serial before and after editing 
for purchase invoice, serial is still there before and after editing don't do enything may be update meta data like vendor name or date and if any serial is missing delete it
what if serial is already sold, now you are removing it from purchase, delete purchase date only like it was never pruchased and make stock negetive or may be give error in this condition
for sales invoice, serial is still there before and after editing don't do enything may be update meta data like vendor name or date and if any serial is remove sold date from serial like it was never sold

then query whole serials collection and update quantity for products 

so for purchase invoice
check if this is editing (if mongodb objectid is provided from frontend then update that document), fetch previous serial numbers, for all new serial numbers add those, for all removed serial numbers remove purchased date if sold already otherswise remove for serial no entry
or new insert to purchase invoice collection and serial number insert, what if duplicate is find ? insert this duplicate as well (duplicate with product id and serial number would not be there - for sure)
and update quantity for all products of that invoice

for selling invoice -> here autocompletion for serial numbers would be provided
check if this is editing (if mongodb objectid is provided from frontend then update that document), fetch previous serial numbers, for all new serial numbers add those update serial number i.e., add sold date if this serial number not found still add entry with sold date wihtout purchase date leads to negetive quantity, for all removed serial numbers remove sold date
or new insert to sales invoice, insert this document to sales collection and for all new serial numbers add those update serial number i.e., add sold date if this serial number not found still add entry with sold date wihtout purchase date leads to negetive quantity
and update quantity for all products of that invoice



bug - form causing first item to disapper
         */

export interface PurchaseInvoiceItem {
    no: number, // product id
    name: string, // product name
    quantity: number, // product name
    price: number, // purchase price
    discount: number, // is there any discount on purchase price
    sno: string[]
}
export interface PurchaseInvoiceData {
    _id?: ObjectId,
    no: string,
    vendor: string,
    date: string,
    items: PurchaseInvoiceItem[]
    amount: number,
    tax: number
}

export default function CreatePurchaseInvoice() {
    const { purcahseInvoiceData, setPurchaseInvoiceData, purchaseInvoiceItems, setPurchaseInvoiceItems, setHeaderText } = useGlobalContext();
    const fetcher = useCentralFetcher();
    const location = useLocation();
    const passedData = location.state;

    function addItem() {
        setPurchaseInvoiceItems(pre => {
            return [
                ...pre,
                { no: 0, name: "", price: 0, quantity: 0, discount: 0, sno: [] }
            ]
        });
    }

    async function save() {
        const payload = { ...purcahseInvoiceData, items: purchaseInvoiceItems }
        const response = await fetcher(`${purchaseInvoiceCreateAPIURL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        //console.log("payload", payload);
        setPurchaseInvoiceData(payload);
    }

    useEffect(() => {
        const amount = Object.entries(purchaseInvoiceItems).reduce((acc, [_, item]) => acc + (item.price * item.quantity * (1 - item.discount * 0.01)), 0);
        setPurchaseInvoiceData(pre => { return { ...pre, amount: amount } });
    }, [purchaseInvoiceItems]);

    useEffect(() => {
        //setHeaderText("Purchase Invoice");
        // copying existing product
        if (passedData && passedData?.editing === false) {
            setPurchaseInvoiceData(pre => { return { ...pre, date: new Date().toISOString().split("T")[0] } });
        }
        // editing existing product
        else if (passedData && passedData?.editing === true) {
            console.log("printing : ", purcahseInvoiceData);
        }
        // new product
        else {
            setPurchaseInvoiceData(initialPurchaseInvoiceData());
            setPurchaseInvoiceItems([]);
        }
    }, []);

    return (<>
        <div className="w-full flex justify-end items-center font-semibold text-textSecondary text-center">


        </div>
        <div className="grid grid-cols-6 gap-4 text-textPrimary mt-4">
            <div className="col-span-1">
                {(passedData && passedData?.editing === true) ? <>Invoice No.<div className="border-0 p-2 bg-buttonHover w-full">{purcahseInvoiceData.no}</div></> : <>Invoice No.<input required type="text" name="invoiceno" placeholder="Enter Invoice No." className="border border-border p-2 bg-background w-full" value={purcahseInvoiceData.no} onChange={e => setPurchaseInvoiceData(pre => { return { ...pre, no: e.target.value } })} /></>}
            </div>
            <div className="col-span-3">
                Vendor Name <input type="text" name="vendorname" placeholder="Enter Vendor Name" className="border border-border p-2 bg-background w-full" value={purcahseInvoiceData.vendor} onChange={e => setPurchaseInvoiceData(pre => { return { ...pre, vendor: e.target.value || "" } })} />
            </div>
            <div className="col-span-1">
                Date
                <input required id="date" type="date" color="white" name="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border h-10 bg-background w-full px-2" value={purcahseInvoiceData.date} onChange={e => setPurchaseInvoiceData(pre => { return { ...pre, date: e.target.value || "" } })} />
            </div>
            <div className="ml-auto mr-0">
                <div>&nbsp;</div>
                <button onClick={addItem} type="button" className="button px-4 py-2">
                    Add Item
                </button>
            </div>
            <div className="col-span-6">
                <div className="mt-0 space-y-2 overflow-y-auto h-[calc(100vh-225px)] w-full">
                    <div className="grid grid-cols-12 gap-x-2 w-[100%]">
                        <div className="flex gap-x-2 col-span-4">
                            <div className="w-[100px] p-2 ">Id</div>
                            <div className="w-full p-2">Name</div>
                        </div>
                        <div className="col-span-4 p-2">Serial No</div>
                        <div className="col-span-1 p-2">Quantity</div>
                        <div className="col-span-1 p-2">Price</div>
                        <div className="col-span-1 p-2">Discount</div>
                    </div>
                    {
                        purchaseInvoiceItems.map((_, index) => {
                            return <>
                                <PurchaseInvoiceAutocompleteSearch key={index} index={index} />
                            </>;
                        })}
                </div>
            </div>
        </div>
        <div className="flex justify-between w-full text-textSecondary">
            <div className="flex items-center">
                <div className="text-sm font-semibold mr-4">Taxable Value:</div>
                <div className="">Rs.{purcahseInvoiceData.amount.toLocaleString("en-IN")}</div>
            </div>
            <div className="flex items-center">
                <label htmlFor="tax" className="text-sm font-semibold mr-4">Tax (%)</label>
                <input id="tax" type="number" placeholder="Enter Tax Percentage" className="border border-border p-2 w-25 bg-background" value={purcahseInvoiceData.tax} onChange={e => setPurchaseInvoiceData(pre => { return { ...pre, tax: parseFloat(e.target.value) } })} />
            </div>
            <div className="flex items-center">
                <div className="text-sm font-semibold mr-4">Total:</div>
                <div className="">Rs.{Number((purcahseInvoiceData.amount * (1 + purcahseInvoiceData.tax * 0.01)).toFixed(2)).toLocaleString("en-IN")}</div>
            </div>
        </div>
        <div className="flex justify-center ">
            <button className="button px-4 py-1 mt-4 text-lg" onClick={(e) => { e.preventDefault(); save() }}>
                Save
            </button>
        </div>
    </>);
}