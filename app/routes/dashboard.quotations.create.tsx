import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import QuotationAutocompleteSearch from "~/component/quotation/quotationAutocompleteSearch";
import { AnimatePresence, motion } from "framer-motion";
import { useCentralFetcher } from "~/component/centralFetcher";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Switch } from "@headlessui/react";
import { ChallanData } from "./dashboard.challan.create";
import { ChevronDown, Minus } from "lucide-react";

export type QuoteItems = {
    id: number;
    hsn: string;
    name: string;
    price: number;
    addon: number;
    discount: number;
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
    amount: number;
    madeby: string;
    email?: string;
    contact?: string;
    website?: string;
    pdfColor?: string;
    showLinks?: boolean;
    todealer?: boolean
};

export async function createPdf(data: QuotationData | ChallanData, fetcher: any, showCustomerList?: boolean, save: boolean = true, type: string = "quotation") {
    let filteredItems;
    if (type === "quotation") {
        filteredItems = data.items.filter((item: any) => {
            if (!isFinite(item.price) || !isFinite(item.quantity)) return false;
            else return true;
        })
    }
    else if (type === "challan") {
        filteredItems = data.items.filter((item: any) => {
            if (!isFinite(item.quantity)) return false;
            else return true;
        })
    }

    const response = await fetcher(`/api/pdf?save=${save}&showCustomerList=${showCustomerList}&type=${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, items: filteredItems })
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    window.open(url); // or trigger download
}

export default function QuotationsCreate() {
    const location = useLocation();
    const passedData = location.state;

    const { items, setItems, data, setData, setHeaderText, profile, selectedProfile, setSelectedProfile } = useGlobalContext();
    const [step, setStep] = useState<number>(0);
    const fetcher = useCentralFetcher();
    const names = profile?.generalInfo.map((p) => p.company) || [];

    const navigate = useNavigate();

    function addItem() {
        //const newKey = new Date().getTime() + 1;
        setItems(pre => {
            return [
                ...pre,
                { id: 0, hsn: "", name: "", description: "", price: 0, quantity: 0, link: "#", addon: 0, discount: 0 }
            ]
        });
    }

    useEffect(() => {
        if (step === 0) setHeaderText("Quotation Details")
        else if (step === 1) setHeaderText("Quotation Product Details")
        else if (step === 2) setHeaderText("Quotation Terms and Conditions")
    }, [step])

    useEffect(() => {
        const amount = Object.entries(items).reduce((acc, [_, item]) => acc + (item.price * item.quantity * (1 + 0.01 * item.addon) * (1 - item.discount * 0.01)), 0);
        setData(pre => { return { ...pre, amount: amount } });
    }, [items]);

    useEffect(() => {
        const d = new Date();
        let no = d.getTime().toString();
        let fromAddress = profile.generalInfo[selectedProfile].address || "";
        let from = profile.generalInfo[selectedProfile].company;
        let itemswithAddonandDiscount = items;
        let intro = profile.quotationInfo[selectedProfile].intro ?? "";
        let date = d.toISOString().split("T")[0];

        if (passedData && passedData?.editing === true) {
            no = data.no;
            fromAddress = data.fromAddress;
            from = data.from;
            intro = data.intro;
            date = data.date;

            itemswithAddonandDiscount = itemswithAddonandDiscount.map((item) => {
                if (!item.addon) item.addon = 0;
                if (!item.discount) item.discount = 0;
                return item;
            });
        }
        setItems(itemswithAddonandDiscount);
        setData((pre) => { return { ...pre, no: no, from: from, fromAddress: fromAddress, email: profile.generalInfo[selectedProfile].email, website: profile.generalInfo[selectedProfile].website, contact: profile.generalInfo[selectedProfile].contact, pdfColor: String(profile.quotationInfo[selectedProfile].pdfColor), madeby: profile.username || "", date: date, showLinks: data?.showLinks !== undefined ? data.showLinks : false, items: itemswithAddonandDiscount, intro: intro, terms: profile.quotationInfo[selectedProfile].terms ?? data.terms, additionalInfo: profile.quotationInfo[selectedProfile].additionalInfo ?? data.additionalInfo } });
    }, [])

    useEffect(() => {
        if (profile) {
            let fromAddress = profile.generalInfo[selectedProfile].address || "";
            let from = profile.generalInfo[selectedProfile].company;
            let email = profile.generalInfo[selectedProfile].email || "";
            let website = profile.generalInfo[selectedProfile].website || "";
            let contact = profile.generalInfo[selectedProfile].contact || "";
            let pdfColor = String(profile.quotationInfo[selectedProfile].pdfColor);
            let intro = profile.quotationInfo[selectedProfile].intro || "";
            let terms = profile.quotationInfo[selectedProfile].terms || "";
            let additionalInfo = profile.quotationInfo[selectedProfile].additionalInfo || "";
            setData(pre => { return { ...pre, from: from, fromAddress: fromAddress, email: email, website: website, contact: contact, pdfColor: pdfColor, intro: intro, terms: terms, additionalInfo: additionalInfo } });
        }
    }, [selectedProfile])

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
                                className={`${data.showLinks ? "bg-button/75" : "bg-buttonHover"}
                                      relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`${data.showLinks ? "translate-x-4" : "translate-x-0"}
                                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                            <div className="text-sm font-semibold ml-10 mr-2">To Dealer</div>
                            <Switch
                                checked={data.todealer}
                                onChange={(e) => { setData(pre => { return { ...pre, todealer: e } }) }}
                                className={` ${data.todealer ? "bg-button/75" : "bg-buttonHover"}
                                      relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`${data.todealer ? "translate-x-4" : "translate-x-0"}
                                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>

                            <div className="ml-10 w-72">
                                <Listbox value={profile.generalInfo[selectedProfile].company} onChange={e => { setSelectedProfile(names.indexOf(e)) }}>
                                    <div className="relative flex justify-center">
                                        <ListboxButton className="w-full flex items-center justify-between hover:bg-buttonHover border border-border py-2">
                                            <div className="text-textSecondary">{profile.generalInfo[selectedProfile].company}</div>
                                            <ChevronDown className="text-textPrimary" />
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="w-full absolute -right-34 top-10 z-10 mt-2 origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="p-1">
                                                {names.map((category) => (
                                                    <ListboxOption
                                                        key={category}
                                                        value={category}
                                                        className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                                    >
                                                        {category}
                                                    </ListboxOption>
                                                ))}
                                            </div>
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                            </div>
                        </div>

                        {step === 1 &&
                            <div className="w-1/4 flex justify-end">
                                <button onClick={addItem} className="button px-4 py-1 text-lg">
                                    Add Item
                                </button>
                            </div>}
                    </div>

                    <div className="flex flex-col items-center">
                        {step === 0 && <>
                            <div className="w-full">
                                <label htmlFor="introductorytext" className="text-sm font-semibold">Introductory text</label>
                                <textarea id="introductorytext" rows={3} placeholder="Enter Introductory Text" className="p-2 border border-border rounded w-full mb-2 bg-background" value={data.intro} onChange={e => setData(pre => { return { ...pre, intro: e.target.value } })} />
                            </div>
                            <div className="mx-10 flex space-x-10 w-full">
                                <div className="w-full space-y-2">
                                    <div>
                                        <label htmlFor="firstPartyName" className="text-sm font-semibold">First Party Name</label>
                                        <input id="firstPartyName" key={"frist"} type="text" placeholder="Enter First Party Name" className="border border-border p-2 w-full bg-background" value={data.from} onChange={e => setData(pre => { return { ...pre, from: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label htmlFor="firstPartyAddress" className="text-sm font-semibold">First Party Address</label>
                                        <textarea id="firstPartyAddress" rows={5} placeholder="Enter First Party Address" className="p-2 border border-border w-full bg-background" value={data.fromAddress} onChange={e => setData(pre => { return { ...pre, fromAddress: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="w-full space-y-2">
                                    <div>
                                        <label htmlFor="secondPartyName" className="text-sm font-semibold">Second Party Name</label>
                                        <input id="secondPartyName" key={"second"} type="text" placeholder="Enter Second Party Name" className="border border-border p-2 w-full bg-background" value={data.to} onChange={e => setData(pre => { return { ...pre, to: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label htmlFor="secondPartyAddress" className="text-sm font-semibold">Second Party Address</label>
                                        <textarea id="secondPartyAddress" rows={5} placeholder="Enter Second Party Address" className="p-2 border border-border w-full bg-background" value={data.toAddress} onChange={e => setData(pre => { return { ...pre, toAddress: e.target.value } })} />
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setStep(1)} className="button px-4 py-1 mt-4 text-lg">
                                Next
                            </button>
                        </>
                        }
                        {
                            step === 1 && <>
                                <div className="mt-4 space-y-2 overflow-y-auto h-[calc(100vh-220px)] w-full">
                                    <div className="flex relative w-auto gap-x-2">
                                        <div className="grid grid-cols-12 gap-x-2 w-[98%]">
                                            <div className="col-span-3 p-2">Name</div>
                                            <div className="col-span-4 p-2">Description</div>
                                            <div className="col-span-1 p-2">HSN</div>
                                            <div className="col-span-1 p-2">Quantity</div>
                                            <div className="col-span-1 p-2">Price</div>
                                            <div className="col-span-1 p-2">Discount %</div>
                                            <div className="col-span-1 p-2">Addon %</div>
                                        </div>
                                        <button className="invisible p-2"><Minus className="text-textSecondary" /></button>
                                    </div>
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
                                        <div className="">Rs.{data.amount.toLocaleString("en-IN")}</div>
                                    </div>
                                    <div className="flex items-center">
                                        <label htmlFor="tax" className="text-sm font-semibold mr-4">Tax (%)</label>
                                        <input id="tax" type="number" placeholder="Enter Tax Percentage" className="border border-border p-2 w-25 bg-background" value={data.tax} onChange={e => setData(pre => { return { ...pre, tax: parseFloat(e.target.value) } })} />
                                    </div>
                                    <div className="flex items-center">
                                        <div className="text-sm font-semibold mr-4">Total:</div>
                                        <div className="">Rs.{Number((data.amount * (1 + data.tax * 0.01)).toFixed(2)).toLocaleString("en-IN")}</div>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button onClick={() => setStep(0)} className="button px-4 py-1 mt-2 text-lg">
                                        Back
                                    </button>
                                    <button onClick={() => { setData((pre) => { return { ...pre, items: [...items] } }); setStep(2) }} className="button px-4 py-1 mt-2 text-lg">
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
                                        <label htmlFor="termsAndConditions" className="text-sm font-semibold">Terms and Conditions</label>
                                        <textarea id="termsAndConditions" rows={5} placeholder="Enter Terms and Conditions....." className="p-2 border border-border w-full bg-background" value={data.terms} onChange={e => setData(pre => { return { ...pre, terms: e.target.value } })} />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="additionalInformation" className="text-sm font-semibold">Additional Information</label>
                                        <textarea id="additionalInformation" rows={5} placeholder="Enter Additional Information....." className="p-2 border border-border w-full bg-background" value={data.additionalInfo} onChange={e => setData(pre => { return { ...pre, additionalInfo: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button onClick={() => setStep(1)} className="button px-4 py-1 mt-4 text-lg">
                                        Back
                                    </button>
                                    <form onSubmit={(e) => { createPdf(data, fetcher, profile?.quotationInfo[selectedProfile].showCustomerList); e.preventDefault(); navigate("/dashboard/quotations/show") }}>
                                        <button className="button px-4 py-1 mt-4 text-lg" type="submit">Generate Quotation PDF</button>
                                    </form>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </motion.div>
        </AnimatePresence >
    </>);
}