import { Link, useFetcher, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { createQuotation, useGlobalContext } from "~/modules/gcontext";
import AutocompleteSearch from "~/component/autocompleteSearch";
import { logoutData } from "~/modules/utils";

export type QuoteItems = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description?: string;
    link?: string;
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
};

export default function Quote() {
    const { items, setItems } = useGlobalContext();
    const [step, setStep] = useState<number>(0);
    const { data, setData, userName, accessToken, setAccessToken, setHeaderText } = useGlobalContext();

    const logoutFetcher = useFetcher<logoutData>();
    const navigate = useNavigate();

    useEffect(() => {
        if (logoutFetcher.data?.success)
            setAccessToken(undefined);
    }, [logoutFetcher.data]);

    useEffect(() => {
        if (accessToken === undefined) //console.log("should navigate to home page");
            navigate("/dashboard");
    }, [accessToken]);


    function addItem() {
        //const newKey = new Date().getTime() + 1;
        setItems(pre => {
            return [
                ...pre,
                { id: 0, name: "", price: 0, quantity: 0 }
            ]
        });
    }

    useEffect(() => {
        if (step === 0) setHeaderText("Qoutation Details")
        else if (step === 1) setHeaderText("Product Details")
        else if (step === 2) setHeaderText("Terms and Conditions")
    }, [step])

    useEffect(() => {
        const amount = Object.entries(items).reduce((acc, [_, item]) => acc + (item.price * item.quantity), 0);
        setData(pre => { return { ...pre, amount: amount } });
    }, [items]);

    useEffect(() => {
        const no = userName[0]?.toLocaleUpperCase() + "-" + new Date().getTime()
        setData((pre) => { return { ...pre, no: no } })
    }, [])

    //updateItem={updatedItem} updatePrice={updatedPrice} updateQuanity={updatedQuanity} deleteItem={deleteItem}

    async function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
        const response = await fetch('/api/pdf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url); // or trigger download
    }

    return (<>
        <div className="text-textSecondary">
            <div className="flex space-x-4 items-center align-middle mx-10">
                <div className="flex items-center w-1/2 mt-4">
                    <div className="text-sm font-semibold mr-2">Qoutation No.</div>
                    {/*<input type="text" name="no" placeholder="Enter Qoutation No." className="border border-border p-2 mb-2 mr-5 w-25 bg-background" value={data.no} onChange={e => setData((pre) => { return { ...pre, no: e.target.value }; })} />*/}
                    <div className="text-sm">{data.no}</div>
                    <div className="text-sm font-semibold ml-10 mr-2">Date</div>
                    <input type="date" color="white" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border w-25 h-10 bg-background" value={data.date} onChange={e => setData(pre => { return { ...pre, date: e.target.value } })} />
                </div>
                <div className="w-1/2 flex justify-end">
                    <Link to={"/dashboard/home"} className="bg-button text-buttonTextPrimary px-4 py-1 text-lg" onClick={(e) => { setHeaderText(createQuotation); }}>
                        Cancel
                    </Link>
                </div>
            </div>
            <div className="mx-10 flex flex-col items-center space-y-2">
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
                {/*step === 1 &&
            <div>
                <div className="text-lg py-4 px-10 bg-slate-100">Enter Parties Details</div>
                <div className="mx-10 flex flex-col items-center h-screen">
                    <div className="flex space-x-10 my-10 mx-20 w-full">
                        <div className="w-full space-y-4">
                            <div>
                                <label className="text-sm">First Party Name</label>
                                <input key={"frist"} type="text" placeholder="Enter First Party Name" className="border p-2 w-full" value={data.from} onChange={e => setData(pre => { return { ...pre, from: e.target.value } })} />
                            </div>
                            <div>
                                <label className="text-sm">First Party Address</label>
                                <textarea rows={5} placeholder="Enter First Party Address" className="p-2 border rounded w-full" value={data.fromAddress} onChange={e => setData(pre => { return { ...pre, fromAddress: e.target.value } })} />
                            </div>
                        </div>
                        <div className="w-full space-y-4">
                            <div>
                                <label className="text-sm">Second Party Name</label>
                                <input key={"second"} type="text" placeholder="Enter Second Party Name" className="border p-2 w-full" value={data.to} onChange={e => setData(pre => { return { ...pre, to: e.target.value } })} />
                            </div>
                            <div>
                                <label className="text-sm">Second Party Address</label>
                                <textarea rows={5} placeholder="Enter Second Party Address" className="p-2 border rounded w-full" value={data.toAddress} onChange={e => setData(pre => { return { ...pre, toAddress: e.target.value } })} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={() => setStep(0)} className="bg-blue-500 text-white px-4 py-2 mt-4 text-lg">
                            Back
                        </button>
                        <button onClick={() => setStep(2)} className="bg-blue-500 text-white px-4 py-2 mt-4 text-lg">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        */}

                {
                    step === 1 && <>
                        <button onClick={addItem} className="bg-button text-buttonTextPrimary px-4 py-1 text-lg">
                            Add Item
                        </button>
                        <div className="space-y-4 overflow-y-auto h-[calc(100vh-320px)] w-full">
                            {
                                items.map((_, index) => {
                                    return <>
                                        <AutocompleteSearch key={index} index={index} />
                                    </>;
                                })}
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex items-center">
                                <label className="text-sm font-semibold mr-4">Tax (%)</label>
                                <input type="number" placeholder="Enter Tax Percentage" className="border border-border p-2 w-25 bg-background" value={data.tax} onChange={e => setData(pre => { return { ...pre, tax: parseFloat(e.target.value) } })} />
                            </div>
                            <div className="flex items-center">
                                <label className="text-sm font-semibold mr-4">Discount (%)</label>
                                <input type="number" placeholder="Enter Discount Percentage" className="border border-border p-2 w-25 bg-background" value={data.discount} onChange={e => setData(pre => { return { ...pre, discount: parseFloat(e.target.value) } })} />
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm font-semibold mr-4">Amount before tax and discount:</div>
                                <div className="">Rs.{data.amount}</div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm font-semibold mr-4">Amount after tax:</div>
                                <div className="">Rs.{(data.amount * (1 + data.tax * 0.01)).toFixed(2)}</div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm font-semibold mr-4">Amount after tax and discount:</div>
                                <div className="">Rs.{(data.amount * (1 + data.tax * 0.01) * (1 - data.discount * 0.01)).toFixed(2)}</div>
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
                            <form onSubmit={(e) => { handlesubmit(e); e.preventDefault(); }}>
                                <button className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg" type="submit">Generate Qoutation PDF</button>
                            </form>
                        </div>
                    </>
                }
            </div>
        </div>
    </>);
}