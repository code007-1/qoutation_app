import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import PurchaseInvoiceAutocompleteSearch from "../component/inventory/purchaseInvoices/purchaseInvoiceAutocompleteSearch";
import { useCentralFetcher } from "../component/centralFetcher";
import { purchaseInvoiceCreateURL } from "../component/statics";

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

export interface InvoiceItem {
    no: number, // product id
    name: string, // product name
    quantity: number, // product name
    price: number, // purchase price
    discount: number, // is there any discount on purchase price
    sno: string[]
}
export interface InvoiceData {
    invoiceno: string,
    vendor: string,
    date: string,
    items: InvoiceItem[]
    amount: number,
    tax: number
}

export default function CreatePurchaseInvoice() {
    const { invoiceData, setInvoiceData, invoiceItems, setInvoiceItems } = useGlobalContext();
    const fetcher = useCentralFetcher();

    function addItem() {
        setInvoiceItems(pre => {
            return [
                ...pre,
                { no: 0, name: "", price: 0, quantity: 0, discount: 0, sno: [] }
            ]
        });
    }

    async function save() {
        const payload = { ...invoiceData, items: invoiceItems }
        const response = await fetcher(`${purchaseInvoiceCreateURL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: payload, objectid: "" })
        });
        setInvoiceData(pre => { return { ...pre, items: invoiceItems } });
    }

    useEffect(() => {
        const amount = Object.entries(invoiceItems).reduce((acc, [_, item]) => acc + (item.price * item.quantity * (1 - item.discount * 0.01)), 0);
        setInvoiceData(pre => { return { ...pre, amount: amount } });
    }, [invoiceItems]);

    return (<>
        <div className="w-full flex justify-between items-center font-semibold text-textSecondary bg-buttonHover text-center">
            <div className="w-[33%]"></div>
            <div className="w-[34%]">Add Purchase Invoice</div>
            <div className="w-[33%] flex justify-end">
                <button onClick={addItem} type="button" className="button px-4 py-2">
                    Add Item
                </button>
            </div>
        </div>
        <div className="grid grid-cols-6 gap-4 text-textPrimary mt-4">
            <div className="col-span-1">
                Invoice No. <input required type="text" name="invoiceno" placeholder="Enter Invoice No." className="border border-border p-2 bg-background w-full" value={invoiceData.invoiceno} onChange={e => setInvoiceData(pre => { return { ...pre, invoiceno: e.target.value } })} />
            </div>
            <div className="col-span-4">
                Vendor Name <input type="text" name="vendorname" placeholder="Enter Vendor Name" className="border border-border p-2 bg-background w-full" value={invoiceData.vendor} onChange={e => setInvoiceData(pre => { return { ...pre, vendor: e.target.value || "" } })} />
            </div>
            <div className="col-span-1">
                Date
                <input required id="date" type="date" color="white" name="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border h-10 bg-background w-full px-2" value={invoiceData.date} onChange={e => setInvoiceData(pre => { return { ...pre, date: e.target.value || "" } })} />
            </div>
            <div className="col-span-6">
                <div className="mt-0 space-y-2 overflow-y-auto h-[calc(100vh-300px)] w-full">
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
                        invoiceItems.map((_, index) => {
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
                <div className="">Rs.{invoiceData.amount.toLocaleString("en-IN")}</div>
            </div>
            <div className="flex items-center">
                <label htmlFor="tax" className="text-sm font-semibold mr-4">Tax (%)</label>
                <input id="tax" type="number" placeholder="Enter Tax Percentage" className="border border-border p-2 w-25 bg-background" value={invoiceData.tax} onChange={e => setInvoiceData(pre => { return { ...pre, tax: parseFloat(e.target.value) } })} />
            </div>
            <div className="flex items-center">
                <div className="text-sm font-semibold mr-4">Total:</div>
                <div className="">Rs.{Number((invoiceData.amount * (1 + invoiceData.tax * 0.01)).toFixed(2)).toLocaleString("en-IN")}</div>
            </div>
        </div>
        <div className="flex justify-center ">
            <button className="button px-4 py-1 mt-4 text-lg" onClick={(e) => { e.preventDefault(); save() }}>
                Save
            </button>
        </div>
    </>);
}