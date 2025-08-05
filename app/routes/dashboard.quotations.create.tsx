import { useFetcher, useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import QuotationAutocompleteSearch from "~/component/quotation/quotationAutocompleteSearch";
import { logoutData } from "~/modules/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCentralFetcher } from "~/component/centralFetcher";
import { Switch } from "@headlessui/react";

export type QuoteItems = {
    id: number;
    hsn: string;
    name: string;
    price: number;
    quantity: number;
    description?: string;
    link?: string;
    showLink?: boolean;
};

export type QuotationData = {
    no: string;
    date: string;
    items: QuoteItems[];
    intro: string;
    terms: string;
    additionalInfo: string;
    from: string;
    fromAddress: string;
    to: string;
    toAddress: string;
    tax: number;
    discount: number;
    amount: number;
    madeby: string;
    email?: string;
    contact?: string;
    website?: string;
    pdfColor?: string;
    showLinks?: boolean;
};

export async function createPdf(data: QuotationData, fetcher: any, showCustomerList?: boolean, save: boolean = true, type: string = "quotation") {
    const response = await fetcher(`/api/pdf?save=${save}&showCustomerList=${showCustomerList}&type=${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    window.open(url); // or trigger download
}

export default function QuotationsCreate() {
    const location = useLocation();
    const passedData = location.state;

    const { items, setItems, data, setData, accessToken, setAccessToken, setHeaderText, profile } = useGlobalContext();
    const [step, setStep] = useState<number>(0);
    const fetcher = useCentralFetcher();

    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken === undefined) //console.log("should navigate to home page");
            navigate("/");
    }, [accessToken]);

    function addItem() {
        //const newKey = new Date().getTime() + 1;
        setItems(pre => {
            return [
                ...pre,
                { id: 0, hsn: "", name: "", description: "", price: 0, quantity: 0, link: "#" }
            ]
        });
    }

    useEffect(() => {
        if (step === 0) setHeaderText("Quotation Details")
        else if (step === 1) setHeaderText("Quotation Product Details")
        else if (step === 2) setHeaderText("Quotation Terms and Conditions")
    }, [step])

    useEffect(() => {
        const amount = Object.entries(items).reduce((acc, [_, item]) => acc + (item.price * item.quantity), 0);
        setData(pre => { return { ...pre, amount: amount } });
    }, [items]);

    useEffect(() => {
        var no = new Date().getTime().toString();
        var fromAddress = profile.address;
        var from = profile.company;

        if (passedData && passedData?.editing === true) {
            no = data.no;
            fromAddress = data.fromAddress;
            from = data.from;
        }
        setData((pre) => { return { ...pre, no: no, from: from, fromAddress: fromAddress, email: profile.email, website: profile.website, contact: profile.contact, pdfColor: String(profile.pdfColor), madeby: profile.username || "", date: new Date().toISOString().split("T")[0], showLinks: data?.showLinks !== undefined ? data.showLinks : true } });
    }, [])

    //updateItem={updatedItem} updatePrice={updatedPrice} updateQuanity={updatedQuanity} deleteItem={deleteItem}

    return (<>
        <AnimatePresence>
            <motion.div
                key={step}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="text-textSecondary">
                    <div className="mt-4 flex space-x-4 items-center align-middle">
                        <div className="flex items-center w-3/4">
                            <div className="text-sm font-semibold mr-2">Quotation No.</div>
                            {/*<input type="text" name="no" placeholder="Enter Quotation No." className="border border-border p-2 mb-2 mr-5 w-25 bg-background" value={data.no} onChange={e => setData((pre) => { return { ...pre, no: e.target.value }; })} />*/}
                            <div className="text-sm">{data.no}</div>
                            <div className="text-sm font-semibold ml-10 mr-2">Date</div>
                            <input type="date" color="white" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border w-25 h-10 bg-background" value={data.date} onChange={e => setData(pre => { return { ...pre, date: e.target.value } })} />
                            <div className="text-sm font-semibold ml-10 mr-2">Show Links</div>
                            <Switch
                                checked={data.showLinks}
                                onChange={(e) => { setData(pre => { return { ...pre, showLinks: e } }) }}
                                className={`ml-4 ${data.showLinks ? 'bg-button/75' : 'bg-buttonHover'}
                                      relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                            >
                                <span className="sr-only">Show Customer Lists : </span>
                                <span
                                    aria-hidden="true"
                                    className={`${data.showLinks ? 'translate-x-4' : 'translate-x-0'}
                                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                        {step === 1 &&
                            <div className="w-1/4 flex justify-end">
                                <button onClick={addItem} className="bg-button text-buttonTextPrimary px-4 py-1 text-lg">
                                    Add Item
                                </button>
                            </div>}
                        {/*<div className="w-1/2 flex justify-end">
                            <Link to={"/dashboard/showquotations"} className="bg-button text-buttonTextPrimary px-4 py-1 text-lg" onClick={(e) => { setHeaderText(createQuotation); }}>
                                Cancel
                            </Link>
                        </div>*/}
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        {step === 0 && <>
                            <div className="w-full">
                                <label className="text-sm font-semibold">Introductory text</label>
                                <textarea rows={5} placeholder="Enter Introductory Text" className="p-2 border border-border rounded w-full mb-2 bg-background" value={data.intro} onChange={e => setData(pre => { return { ...pre, intro: e.target.value } })} />
                            </div>
                            <div className="mx-10 flex space-x-10 w-full">
                                <div className="w-full space-y-4">
                                    <div>
                                        <label className="text-sm font-semibold">First Party Name</label>
                                        <input key={"frist"} type="text" placeholder="Enter First Party Name" className="border border-border p-2 w-full bg-background" value={data.from} onChange={e => setData(pre => { return { ...pre, from: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold">First Party Address</label>
                                        <textarea rows={5} placeholder="Enter First Party Address" className="p-2 border border-border w-full bg-background" value={data.fromAddress} onChange={e => setData(pre => { return { ...pre, fromAddress: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="w-full space-y-4">
                                    <div>
                                        <label className="text-sm font-semibold">Second Party Name</label>
                                        <input key={"second"} type="text" placeholder="Enter Second Party Name" className="border border-border p-2 w-full bg-background" value={data.to} onChange={e => setData(pre => { return { ...pre, to: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold">Second Party Address</label>
                                        <textarea rows={5} placeholder="Enter Second Party Address" className="p-2 border border-border w-full bg-background" value={data.toAddress} onChange={e => setData(pre => { return { ...pre, toAddress: e.target.value } })} />
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setStep(1)} className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                                Next
                            </button>
                        </>
                        }
                        {
                            step === 1 && <>
                                <div className="mt-6 space-y-4 overflow-y-auto h-[calc(100vh-280px)] w-full">
                                    {
                                        items.map((_, index) => {
                                            return <>
                                                <QuotationAutocompleteSearch key={index} index={index} />
                                            </>;
                                        })}
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex items-center">
                                        <div className="text-sm font-semibold mr-4">Taxable Value:</div>
                                        <div className="">Rs.{data.amount.toLocaleString('en-US')}</div>
                                    </div>
                                    <div className="flex items-center">
                                        <label className="text-sm font-semibold mr-4">Tax (%)</label>
                                        <input type="number" placeholder="Enter Tax Percentage" className="border border-border p-2 w-25 bg-background" value={data.tax} onChange={e => setData(pre => { return { ...pre, tax: parseFloat(e.target.value) } })} />
                                    </div>
                                    <div className="flex items-center">
                                        <label className="text-sm font-semibold mr-4">Discount (%)</label>
                                        <input type="number" placeholder="Enter Discount Percentage" className="border border-border p-2 w-25 bg-background" value={data.discount} onChange={e => setData(pre => { return { ...pre, discount: parseFloat(e.target.value) } })} />
                                    </div>
                                    <div className="flex items-center">
                                        <div className="text-sm font-semibold mr-4">Total:</div>
                                        <div className="">Rs.{Number((data.amount * (1 + data.tax * 0.01) * (1 - data.discount * 0.01)).toFixed(2)).toLocaleString('en-US')}</div>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button onClick={() => setStep(0)} className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                                        Back
                                    </button>
                                    <button onClick={() => { setData((pre) => { return { ...pre, items: [...items] } }); setStep(2) }} className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                                        Next
                                    </button>
                                </div>
                            </>
                        }

                        {
                            step === 2 &&
                            <>
                                <div className="flex w-full space-x-10">
                                    <div className="w-full">
                                        <label className="text-sm font-semibold">Terms and Conditions</label>
                                        <textarea rows={5} placeholder="Enter Terms and Conditions....." className="p-2 border border-border w-full bg-background" value={data.terms} onChange={e => setData(pre => { return { ...pre, terms: e.target.value } })} />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-sm font-semibold">Additional Information</label>
                                        <textarea rows={5} placeholder="Enter Additional Information....." className="p-2 border border-border w-full bg-background" value={data.additionalInfo} onChange={e => setData(pre => { return { ...pre, additionalInfo: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button onClick={() => setStep(1)} className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                                        Back
                                    </button>
                                    <form onSubmit={(e) => { createPdf(data, fetcher, profile?.showCustomerList); e.preventDefault(); navigate("/dashboard/quotations/show") }}>
                                        <button className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg" type="submit">Generate Quotation PDF</button>
                                    </form>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    </>);
}