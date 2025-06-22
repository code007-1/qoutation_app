import { useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import AutocompleteSearch from "~/modules/qoute";

export type QuoteItems = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description?: string;
};

export type QuotationData = {
    no: string;
    date: string;
    items: Record<string, QuoteItems>;
    intro: string;
    terms: string[];
    additionalInfo: string[];
    from: string;
    fromAddress: string[];
    to: string;
    toAddress: string[];
    tax: number;
    discount: number;
};

export default function Quote() {
    const { items, setItems } = useGlobalContext();
    const [step, setStep] = useState<number>(0);
    const { data, setData } = useGlobalContext();

    function addItem() {
        const newKey = new Date().getTime() + 1;
        setItems({
            ...items,
            [newKey]: { id: 0, name: "" }
        });
    }

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
        {step === 0 &&
            <div>
                <div className="mb-10 text-lg py-4 px-10 bg-slate-100">Qoutation Details</div>
                <div className="flex flex-col items-center h-screen">
                    <div className="flex justify-center">
                        <input type="text" placeholder="Qoutation No." className="border p-4 mb-5 mr-5 w-25" value={data.no} onChange={e => setData((pre) => { return { ...pre, no: e.target.value }; })} />
                        <input type="date" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border w-25 h-14" value={data.date} onChange={e => setData(pre => { return { ...pre, date: e.target.value } })} />
                    </div>
                    <textarea rows={5} placeholder="Enter Introductory Text" className="p-2 border rounded w-3/4 mb-5" value={data.intro} onChange={e => setData(pre => { return { ...pre, intro: e.target.value } })} />
                    <button onClick={() => setStep(1)} className="bg-blue-500 text-white px-4 py-2 mt-4 text-lg">
                        Next
                    </button>
                </div>
            </div>
        }
        {step === 1 &&
            <div>
                <div className="text-lg py-4 px-10 bg-slate-100">Enter Parties Details</div>
                <div className="mx-10 flex flex-col items-center h-screen">
                    <div className="flex space-x-10 my-10 mx-20 w-full">
                        <div className="w-full space-y-4">
                            <input key={"frist"} type="text" placeholder="Enter First Party Name" className="border p-2 w-full" value={data.from} onChange={e => setData(pre => { return { ...pre, from: e.target.value } })} />
                            <textarea rows={5} placeholder="Enter First Party Address" className="p-2 border rounded w-full" value={data.fromAddress} onChange={e => setData(pre => { return { ...pre, fromAddress: e.target.value.split(",") } })} />
                        </div>
                        <div className="w-full space-y-4">
                            <input key={"second"} type="text" placeholder="Enter Second Party Name" className="border p-2 w-full" value={data.to} onChange={e => setData(pre => { return { ...pre, to: e.target.value } })} />
                            <textarea rows={5} placeholder="Enter Second Party Address" className="p-2 border rounded w-full" value={data.toAddress} onChange={e => setData(pre => { return { ...pre, toAddress: e.target.value.split(",") } })} />
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
        }

        {step === 2 &&
            <div><div className="py-4 px-10 bg-slate-100 text-lg ">Enter Product Details</div>
                <div className="mt-5 flex flex-col items-center align-middle p-4 space-y-10">
                    <button onClick={addItem} className="bg-blue-500 text-white p-2 text-lg">
                        Add Item
                    </button>
                    <div className="space-y-4 overflow-y-auto h-[calc(100vh-300px)] w-full">
                        {Object.keys(items).map((key) => {
                            return <>
                                <AutocompleteSearch key={key} index={key} />
                            </>;
                        })}
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={() => setStep(1)} className="bg-blue-500 text-white px-4 py-2 mt-4 text-lg">
                            Back
                        </button>
                        <button onClick={() => { setData((pre) => { return { ...pre, items: { ...items } } }); setStep(3) }} className="bg-blue-500 text-white px-4 py-2 mt-4 text-lg">
                            Next
                        </button>
                    </div>
                </div >
            </div>
        }

        {step === 3 &&
            <div>
                <div className="py-4 px-10 bg-slate-100 text-lg">
                    Enter Terms and Conditions and Additional Information
                </div>
                <div className="mx-10 my-10 flex flex-col items-center h-screen space-y-10">
                    <div className="flex w-full space-x-10">
                        <textarea rows={5} placeholder="Enter Terms and Conditions.....each line should be comma seperated" className="p-2 border rounded w-full" value={data.terms} onChange={e => setData(pre => { return { ...pre, terms: e.target.value.split(",") } })} />
                        <textarea rows={5} placeholder="Enter Additional Information.....each line should be comma seperated" className="p-2 border rounded w-full" value={data.additionalInfo} onChange={e => setData(pre => { return { ...pre, additionalInfo: e.target.value.split("\n") } })} />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={() => setStep(2)} className="bg-blue-500 text-white px-4 py-2 mt-4 text-lg">
                            Back
                        </button>
                        <form onSubmit={(e) => { handlesubmit(e); e.preventDefault(); }}>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 text-lg" type="submit">Generate Qoutation PDF</button>
                        </form>
                    </div>
                </div>
            </div>
        }
    </>);
}