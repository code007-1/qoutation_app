import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import QuotationAutocompleteSearch from "~/component/quotation/quotationAutocompleteSearch";
import { AnimatePresence, motion } from "framer-motion";
import { useCentralFetcher } from "~/component/centralFetcher";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Switch } from "@headlessui/react";
import { ChallanData } from "./dashboard.challan.create";
import { ChevronDown, Minus } from "lucide-react";
import { saveAndCreatePDF } from "~/component/statics";

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
    madeByInfo?: string
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

    const response = await fetcher(`${saveAndCreatePDF}?save=${save}&showCustomerList=${showCustomerList}&type=${type}`, {
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

    const { quotationItems, setQuotationItems, quotationData, setQuotationData, setHeaderText, profile, selectedProfile, setSelectedProfile } = useGlobalContext();
    const [step, setStep] = useState<number>(0);
    const fetcher = useCentralFetcher();
    const names = profile?.generalInfo.map((p) => p.company) || [];

    const navigate = useNavigate();

    function addItem() {
        //const newKey = new Date().getTime() + 1;
        setQuotationItems(pre => {
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
        const amount = Object.entries(quotationItems).reduce((acc, [_, item]) => acc + (item.price * item.quantity * (1 + 0.01 * item.addon) * (1 - item.discount * 0.01)), 0);
        setQuotationData(pre => { return { ...pre, amount: amount } });
    }, [quotationItems]);

    useEffect(() => {
        const d = new Date();
        let no = d.getTime().toString();
        let fromAddress = profile.generalInfo[selectedProfile].address || "";
        let from = profile.generalInfo[selectedProfile].company;
        let itemswithAddonandDiscount = quotationItems;
        let intro = profile.quotationInfo[selectedProfile].intro ?? "";
        let date = d.toISOString().split("T")[0];
        let madeByInfo = profile.generalInfo[selectedProfile].madeByInfo;
        let madeby = profile.username ?? "";

        if (passedData && passedData?.editing === true) {
            no = quotationData.no;
            fromAddress = quotationData.fromAddress;
            from = quotationData.from;
            intro = quotationData.intro;
            date = quotationData.date;
            madeByInfo = quotationData?.madeByInfo;
            madeby = quotationData?.madeby;

            itemswithAddonandDiscount = itemswithAddonandDiscount.map((item) => {
                if (!item.addon) item.addon = 0;
                if (!item.discount) item.discount = 0;
                return item;
            });
        }
        setQuotationItems(itemswithAddonandDiscount);
        setQuotationData((pre) => { return { ...pre, no: no, from: from, fromAddress: fromAddress, email: profile.generalInfo[selectedProfile].email, website: profile.generalInfo[selectedProfile].website, contact: profile.generalInfo[selectedProfile].contact, pdfColor: String(profile.quotationInfo[selectedProfile].pdfColor), madeby: madeby, date: date, showLinks: quotationData?.showLinks !== undefined ? quotationData.showLinks : false, items: itemswithAddonandDiscount, intro: intro, terms: profile.quotationInfo[selectedProfile].terms ?? quotationData.terms, additionalInfo: profile.quotationInfo[selectedProfile].additionalInfo ?? quotationData.additionalInfo, madeByInfo: madeByInfo } });
    }, [])

    function updateData(index: number) {
        if (profile) {
            let fromAddress = profile.generalInfo[index].address || "";
            let from = profile.generalInfo[index].company;
            let email = profile.generalInfo[index].email || "";
            let website = profile.generalInfo[index].website || "";
            let contact = profile.generalInfo[index].contact || "";
            let pdfColor = String(profile.quotationInfo[index].pdfColor);
            let intro = profile.quotationInfo[index].intro || "";
            let terms = profile.quotationInfo[index].terms || "";
            let additionalInfo = profile.quotationInfo[index].additionalInfo || "";
            setQuotationData(pre => { return { ...pre, from: from, fromAddress: fromAddress, email: email, website: website, contact: contact, pdfColor: pdfColor, intro: intro, terms: terms, additionalInfo: additionalInfo } });
        }
    }

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
                            <div className="text-sm">{quotationData.no}</div>
                            <div className="text-sm font-semibold ml-4 mr-2">Date</div>
                            <input type="date" color="white" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border w-28 h-10 bg-background" value={quotationData.date} onChange={e => setQuotationData(pre => { return { ...pre, date: e.target.value } })} />
                            <div className="text-sm font-semibold ml-4 mr-2">Show Links</div>
                            <Switch
                                checked={quotationData.showLinks}
                                onChange={(e) => { setQuotationData(pre => { return { ...pre, showLinks: e } }) }}
                                className={`${quotationData.showLinks ? "bg-button/75" : "bg-buttonHover"}
                                      relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`${quotationData.showLinks ? "translate-x-4" : "translate-x-0"}
                                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                            <div className="text-sm font-semibold ml-4 mr-2">To Dealer</div>
                            <Switch
                                checked={quotationData.todealer}
                                onChange={(e) => { setQuotationData(pre => { return { ...pre, todealer: e } }) }}
                                className={` ${quotationData.todealer ? "bg-button/75" : "bg-buttonHover"}
                                      relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`${quotationData.todealer ? "translate-x-4" : "translate-x-0"}
                                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>

                            <div className="w-auto ml-4">
                                <Listbox value={profile.generalInfo[selectedProfile].company} onChange={e => {
                                    const index = names.indexOf(e);
                                    setSelectedProfile(index);
                                    updateData(index);
                                }}>
                                    <div className="relative flex justify-center">
                                        <ListboxButton className="w-full flex items-center justify-between hover:bg-buttonHover border border-border py-2">
                                            <div className="text-textSecondary truncate text-nowrap overflow-hidden w-48">{profile.generalInfo[selectedProfile].company}</div>
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
                                <textarea id="introductorytext" rows={3} placeholder="Enter Introductory Text" className="p-2 border border-border rounded w-full mb-2 bg-background" value={quotationData.intro} onChange={e => setQuotationData(pre => { return { ...pre, intro: e.target.value } })} />
                            </div>
                            <div className="mx-10 flex space-x-10 w-full">
                                <div className="w-full space-y-2">
                                    <div>
                                        <label htmlFor="firstPartyName" className="text-sm font-semibold">First Party Name</label>
                                        <input id="firstPartyName" key={"frist"} type="text" placeholder="Enter First Party Name" className="border border-border p-2 w-full bg-background" value={quotationData.from} onChange={e => setQuotationData(pre => { return { ...pre, from: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label htmlFor="firstPartyAddress" className="text-sm font-semibold">First Party Address</label>
                                        <textarea id="firstPartyAddress" rows={5} placeholder="Enter First Party Address" className="p-2 border border-border w-full bg-background" value={quotationData.fromAddress} onChange={e => setQuotationData(pre => { return { ...pre, fromAddress: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="w-full space-y-2">
                                    <div>
                                        <label htmlFor="secondPartyName" className="text-sm font-semibold">Second Party Name</label>
                                        <input id="secondPartyName" key={"second"} type="text" placeholder="Enter Second Party Name" className="border border-border p-2 w-full bg-background" value={quotationData.to} onChange={e => setQuotationData(pre => { return { ...pre, to: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label htmlFor="secondPartyAddress" className="text-sm font-semibold">Second Party Address</label>
                                        <textarea id="secondPartyAddress" rows={5} placeholder="Enter Second Party Address" className="p-2 border border-border w-full bg-background" value={quotationData.toAddress} onChange={e => setQuotationData(pre => { return { ...pre, toAddress: e.target.value } })} />
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
                                            <div className="col-span-1 p-2">Discount</div>
                                            <div className="col-span-1 p-2">Addon</div>
                                        </div>
                                        <button className="invisible p-2"><Minus className="text-textSecondary" /></button>
                                    </div>
                                    {
                                        quotationItems.map((_, index) => {
                                            return <>
                                                <QuotationAutocompleteSearch key={index} index={index} />
                                            </>;
                                        })}
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex items-center">
                                        <div className="text-sm font-semibold mr-4">Taxable Value:</div>
                                        <div className="">Rs.{quotationData.amount.toLocaleString("en-IN")}</div>
                                    </div>
                                    <div className="flex items-center">
                                        <label htmlFor="tax" className="text-sm font-semibold mr-4">Tax (%)</label>
                                        <input id="tax" type="number" placeholder="Enter Tax Percentage" className="border border-border p-2 w-25 bg-background" value={quotationData.tax} onChange={e => setQuotationData(pre => { return { ...pre, tax: parseFloat(e.target.value) } })} />
                                    </div>
                                    <div className="flex items-center">
                                        <div className="text-sm font-semibold mr-4">Total:</div>
                                        <div className="">Rs.{Number((quotationData.amount * (1 + quotationData.tax * 0.01)).toFixed(2)).toLocaleString("en-IN")}</div>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button onClick={() => setStep(0)} className="button px-4 py-1 mt-2 text-lg">
                                        Back
                                    </button>
                                    <button onClick={() => { setQuotationData((pre) => { return { ...pre, items: [...quotationItems] } }); setStep(2) }} className="button px-4 py-1 mt-2 text-lg">
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
                                        <textarea id="termsAndConditions" rows={5} placeholder="Enter Terms and Conditions....." className="p-2 border border-border w-full bg-background" value={quotationData.terms} onChange={e => setQuotationData(pre => { return { ...pre, terms: e.target.value } })} />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="additionalInformation" className="text-sm font-semibold">Additional Information</label>
                                        <textarea id="additionalInformation" rows={5} placeholder="Enter Additional Information....." className="p-2 border border-border w-full bg-background" value={quotationData.additionalInfo} onChange={e => setQuotationData(pre => { return { ...pre, additionalInfo: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="additionalInformation" className="text-sm font-semibold">User Signature</label>
                                    <textarea id="additionalInformation" rows={5} placeholder="Enter Made by Info....." className="p-2 border border-border w-full bg-background" value={quotationData.madeByInfo} onChange={e => setQuotationData(pre => { return { ...pre, madeByInfo: e.target.value } })} />
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button onClick={() => setStep(1)} className="button px-4 py-1 mt-4 text-lg">
                                        Back
                                    </button>
                                    <form onSubmit={(e) => { createPdf(quotationData, fetcher, profile?.quotationInfo[selectedProfile].showCustomerList); e.preventDefault(); navigate("/dashboard/quotations/show") }}>
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