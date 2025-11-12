import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import QuotationAutocompleteSearch from "~/component/quotation/quotationAutocompleteSearch";
import { AnimatePresence, motion } from "framer-motion";
import { useCentralFetcher } from "~/component/centralFetcher";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Switch } from "@headlessui/react";
import { ChevronDown, Minus } from "lucide-react";
import { ChallanData, challans, QuotationData, quotations, saveAndCreatequotationAndChallanPDF } from "~/component/statics";

export async function createPdf(data: QuotationData | ChallanData, fetcher: any, showCustomerList?: boolean, save: boolean = true, type: string = quotations) {
    let filteredItems;
    if (type === quotations) {
        filteredItems = data.items.filter((item: any) => {
            if (!isFinite(item.price) || !isFinite(item.quantity)) return false;
            else return true;
        })
    }
    else if (type === challans) {
        filteredItems = data.items.filter((item: any) => {
            if (!isFinite(item.quantity)) return false;
            else return true;
        })
    }

    const response = await fetcher(`${saveAndCreatequotationAndChallanPDF}?save=${save}&showCustomerList=${showCustomerList}&type=${type}`, {
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
    const [selectedBank, setSelectedBank] = useState<number>(0);
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
        const avgdiscount = Object.entries(quotationItems).reduce((acc, [_, item]) => acc + (item.discount ?? 0), 0) / (quotationItems.length || 1);
        const avgaddon = Object.entries(quotationItems).reduce((acc, [_, item]) => acc + (item.addon ?? 0), 0) / (quotationItems.length || 1);
        setQuotationData(pre => { return { ...pre, amount: amount, avgdiscount: Number(avgdiscount.toFixed(2)), avgaddon: Number(avgaddon.toFixed(2)) } });
    }, [quotationItems]);

    useEffect(() => {
        // copying existing quotation
        if (passedData && passedData?.editing === false) {
            const d = new Date();
            const no = d.getTime().toString();
            const date = d.toISOString().split("T")[0];

            setQuotationData((pre) => { return { ...pre, no: no, date: date } });
        }
        // editing existing quotation
        else if (passedData && passedData?.editing === true) {
            return;
        }
        // new quotation
        else {
            const d = new Date();
            let no = d.getTime().toString();

            setQuotationData((pre) => {
                return {
                    ...pre, no: no,
                    from: profile.generalInfo[selectedProfile].company,
                    fromAddress: profile.generalInfo[selectedProfile].address || "",
                    email: profile.generalInfo[selectedProfile].email,
                    website: profile.generalInfo[selectedProfile].website,
                    contact: profile.generalInfo[selectedProfile].contact,
                    pdfColor: String(profile.quotationInfo[selectedProfile].pdfColor),
                    madeby: profile.username ?? "",
                    date: d.toISOString().split("T")[0],
                    showLinks: false,
                    intro: profile.quotationInfo[selectedProfile].intro ?? "",
                    terms: profile.quotationInfo[selectedProfile].terms ?? "",
                    additionalInfo: profile.quotationInfo[selectedProfile].additionalInfo ?? "",
                    madeByInfo: profile.generalInfo[selectedProfile].madeByInfo || "",
                    avgdiscount: 0,
                    avgaddon: 0,
                    bankInfo: profile.generalInfo[selectedProfile]?.bankInfo && profile.generalInfo[selectedProfile].bankInfo.length > 0
                        ? profile.generalInfo[selectedProfile].bankInfo[selectedBank].trim()
                        : ""
                }
            });
        }
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
            let madeByInfo = profile.generalInfo[index].madeByInfo || "";
            setQuotationData(pre => { return { ...pre, from: from, fromAddress: fromAddress, email: email, website: website, contact: contact, pdfColor: pdfColor, intro: intro, terms: terms, additionalInfo: additionalInfo, madeByInfo: madeByInfo } });
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
                        <div className="grid grid-cols-4 gap-x-10 w-[90%]">
                            <div className="w-full">
                                <div className="text-sm font-semibold">Quotation No.</div>
                                {/*<input type="text" name="no" placeholder="Enter Quotation No." className="border border-border p-2 mb-2 mr-5 w-25 bg-background" value={data.no} onChange={e => setData((pre) => { return { ...pre, no: e.target.value }; })} />*/}
                                <div className="inputFilled">{quotationData.no}</div>
                            </div>
                            <div className="w-full">
                                <div className="text-sm font-semibold">Date</div>
                                <input type="date" color="white" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="inputFilled w-full" value={quotationData.date} onChange={e => setQuotationData(pre => { return { ...pre, date: e.target.value } })} />
                            </div>
                            <div className="w-full">
                                <div className="text-sm font-semibold">Profile</div>
                                <Listbox value={profile.generalInfo[selectedProfile].company} onChange={e => {
                                    const index = names.indexOf(e);
                                    setSelectedProfile(index);
                                    updateData(index);
                                }}>
                                    <div className="relative flex justify-center">
                                        <ListboxButton className="w-full flex items-center justify-between hover:bg-buttonHover inputFilled">
                                            <div className="text-left text-textSecondary truncate text-nowrap overflow-hidden">{profile.generalInfo[selectedProfile].company}</div>
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
                                                        className="block p-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                                    >
                                                        {category}
                                                    </ListboxOption>
                                                ))}
                                            </div>
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                            </div>
                            <div className="flex gap-x-5">
                                <div>
                                    <div className="text-sm font-semibold">Show Links</div>
                                    <div className="flex items-center h-10">
                                        <Switch
                                            checked={quotationData.showLinks}
                                            onChange={(e) => { setQuotationData(pre => { return { ...pre, showLinks: e } }) }}
                                            className={`${quotationData.showLinks ? "bg-button/75" : "bg-buttonHover"}
                                      relative flex h-6 items-center w-[60px] rounded-full cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={`${quotationData.showLinks ? "translate-x-10" : "translate-x-0"}
                                        pointer-events-none inline-block h-8 w-8 rounded-full transform bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">To Dealer</div>
                                    <div className="flex items-center h-10">
                                        <Switch
                                            checked={quotationData.todealer}
                                            onChange={(e) => { setQuotationData(pre => { return { ...pre, todealer: e } }) }}
                                            className={` ${quotationData.todealer ? "bg-button/75" : "bg-buttonHover"}
                                      relative flex h-6 items-center w-[60px] rounded-full cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={`${quotationData.todealer ? "translate-x-10" : "translate-x-0"}
                                        pointer-events-none inline-block h-8 w-8 rounded-full transform bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {step === 1 &&
                            <div className="w-[10%]">
                                <div>&nbsp;</div>
                                <div className="w-full flex justify-end">
                                    <button onClick={addItem} className="button px-4 py-1 text-lg">
                                        Add Item
                                    </button>
                                </div>
                            </div>
                        }

                        {(step === 2 && profile.generalInfo[selectedProfile].bankInfo && profile.generalInfo[selectedProfile].bankInfo.length > 0) &&
                            <div className="w-1/4 flex justify-end">
                                <Listbox value={profile.generalInfo[selectedProfile].bankInfo[selectedBank]} onChange={e => {
                                    let index = profile.generalInfo[selectedBank].bankInfo?.findIndex((predeicate) => { return predeicate == e }) || 0;
                                    if (index === -1)
                                        index = 0;
                                    setQuotationData(pre => {
                                        const bankInfoArr = profile.generalInfo[selectedProfile].bankInfo;
                                        return {
                                            ...pre,
                                            bankInfo: (bankInfoArr && bankInfoArr[index] ? bankInfoArr[index] : "").trim()
                                        };
                                    });
                                    setSelectedBank(index);
                                }}>
                                    <div className="relative flex justify-center">
                                        <ListboxButton className="w-full flex items-center justify-between hover:bg-buttonHover inputFilled">
                                            <div className="text-left text-textSecondary truncate text-nowrap overflow-hidden w-44">{profile.generalInfo[selectedProfile].bankInfo[selectedBank].split(",")[0]}</div>
                                            <ChevronDown className="text-textPrimary" />
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="w-full absolute -right-34 top-10 z-10 mt-2 origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="p-1">
                                                {profile.generalInfo[selectedProfile].bankInfo.map((info) => (
                                                    <ListboxOption
                                                        key={info}
                                                        value={info}
                                                        className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                                    >
                                                        {info.split(",")[0]}
                                                    </ListboxOption>
                                                ))}
                                            </div>
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                            </div>}
                    </div>

                    <div className="flex flex-col items-center">
                        {step === 0 && <>
                            <div className="w-full">
                                <label htmlFor="introductorytext" className="text-sm font-semibold">Introductory text</label>
                                <textarea id="introductorytext" rows={3} placeholder="Enter Introductory Text" className="inputHollow w-full mb-2" value={quotationData.intro} onChange={e => setQuotationData(pre => { return { ...pre, intro: e.target.value } })} />
                            </div>
                            <div className="mx-10 flex space-x-10 w-full">
                                <div className="w-full space-y-2">
                                    <div>
                                        <label htmlFor="firstPartyName" className="text-sm font-semibold">First Party Name</label>
                                        <input id="firstPartyName" key={"frist"} type="text" placeholder="Enter First Party Name" className="inputHollow w-full" value={quotationData.from} onChange={e => setQuotationData(pre => { return { ...pre, from: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label htmlFor="firstPartyAddress" className="text-sm font-semibold">First Party Address</label>
                                        <textarea id="firstPartyAddress" rows={5} placeholder="Enter First Party Address" className="inputHollow w-full" value={quotationData.fromAddress} onChange={e => setQuotationData(pre => { return { ...pre, fromAddress: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="w-full space-y-2">
                                    <div>
                                        <label htmlFor="secondPartyName" className="text-sm font-semibold">Second Party Name</label>
                                        <input id="secondPartyName" key={"second"} type="text" placeholder="Enter Second Party Name" className="inputHollow w-full" value={quotationData.to} onChange={e => setQuotationData(pre => { return { ...pre, to: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label htmlFor="secondPartyAddress" className="text-sm font-semibold">Second Party Address</label>
                                        <textarea id="secondPartyAddress" rows={5} placeholder="Enter Second Party Address" className="inputHollow w-full" value={quotationData.toAddress} onChange={e => setQuotationData(pre => { return { ...pre, toAddress: e.target.value } })} />
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
                                <div className="mt-2 space-y-2 overflow-y-auto h-[calc(100vh-220px)] w-full">
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
                                        <input id="tax" type="number" placeholder="Enter Tax Percentage" className="inputHollow w-25" value={quotationData.tax} onChange={e => setQuotationData(pre => { return { ...pre, tax: parseFloat(e.target.value) } })} />
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
                                <div className="grid grid-cols-2 gap-x-10 w-full">
                                    <div>
                                        <label htmlFor="termsAndConditions" className="text-sm font-semibold">Terms and Conditions</label>
                                        <textarea id="termsAndConditions" rows={5} placeholder="Enter Terms and Conditions....." className="inputHollow w-full" value={quotationData.terms} onChange={e => setQuotationData(pre => { return { ...pre, terms: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label htmlFor="additionalInformation" className="text-sm font-semibold">Additional Information</label>
                                        <textarea id="additionalInformation" rows={5} placeholder="Enter Additional Information....." className="inputHollow w-full" value={quotationData.additionalInfo} onChange={e => setQuotationData(pre => { return { ...pre, additionalInfo: e.target.value } })} />
                                    </div>
                                    <div >
                                        <label htmlFor="additionalInformation" className="text-sm font-semibold">Bank Details</label>
                                        <textarea id="additionalInformation" rows={5} placeholder="Enter Bank Details....." className="inputHollow w-full" value={quotationData.bankInfo} onChange={e => setQuotationData(pre => { return { ...pre, bankInfo: e.target.value } })} />
                                    </div>
                                    <div>
                                        <label htmlFor="additionalInformation" className="text-sm font-semibold">User Signature</label>
                                        <textarea id="additionalInformation" rows={5} placeholder="Enter Made by Info....." className="inputHollow w-full" value={quotationData.madeByInfo} onChange={e => setQuotationData(pre => { return { ...pre, madeByInfo: e.target.value } })} />
                                    </div>
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