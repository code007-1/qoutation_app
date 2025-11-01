import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import ChallanAutocompleteSearch from "~/component/challan/challanAutocompleteSearch";
import { AnimatePresence, motion } from "framer-motion";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDown, Minus } from "lucide-react";
import { createPdf } from "./dashboard.quotations.create.full";
import { useCentralFetcher } from "~/component/centralFetcher";
import constData from "../../assets/data.json";
import { challans } from "~/component/statics";

export type ChallanItems = {
    id: number;
    name: string;
    quantity: number;
    sno?: string[];
    unit?: string;
};

export type ChallanData = {
    no: string;
    date: string;
    items: ChallanItems[];
    type: string;
    category: string;
    from: string;
    fromAddress: string;
    to: string;
    toAddress: string;
    orderno?: string;
    billno?: string;
    modeofdispatch?: string;
    madeby: string;
    email?: string;
    contact?: string;
    website?: string;
    pdfColor?: string;
};

export default function CreateChallan() {
    const location = useLocation();
    const passedData = location.state;

    const { challanItems, setChallanItems, challanData, setChallanData, setHeaderText, profile, setSelectedProfile, selectedProfile } = useGlobalContext();
    const [step, setStep] = useState<number>(0);
    const fetcher = useCentralFetcher();
    const names = profile?.generalInfo.map((p) => p.company) || [];

    const navigate = useNavigate();

    function addItem() {
        setChallanItems(pre => { return [...pre, { id: 0, name: "", quantity: 0, sno: [], unit: "pcs" }] });
    }

    useEffect(() => {
        if (step === 0) setHeaderText("Challan Details");
        else if (step === 1) setHeaderText("Challan Product Details");
    }, [step]);

    useEffect(() => {
        // copying existing challan
        if (passedData && passedData?.editing === false) {
            const d = new Date();
            setChallanData((pre) => { return { ...pre, no: d.getTime().toString(), date: d.toISOString().split("T")[0] } });
        }
        // editing existing challan
        else if (passedData && passedData?.editing === true) {
            return;
        }
        // new challan
        else {
            const d = new Date();
            setChallanData((pre) => {
                return {
                    ...pre, no: d.getTime().toString(),
                    from: profile.generalInfo[selectedProfile].company,
                    fromAddress: profile?.generalInfo[selectedProfile]?.address ?? "",
                    email: profile.generalInfo[selectedProfile].email ?? "",
                    website: profile.generalInfo[selectedProfile].website,
                    contact: profile.generalInfo[selectedProfile].contact,
                    pdfColor: String(profile.quotationInfo[selectedProfile].pdfColor),
                    madeby: profile.username ?? "",
                    date: d.toISOString().split("T")[0],
                    billno: ""
                }
            });
        }
    }, []);

    function updateData(index: number) {
        if (profile) {
            let fromAddress = profile.generalInfo[index].address || "";
            let from = profile.generalInfo[index].company;
            let email = profile.generalInfo[index].email || "";
            let website = profile.generalInfo[index].website || "";
            let contact = profile.generalInfo[index].contact || "";
            setChallanData(pre => { return { ...pre, from: from, fromAddress: fromAddress, email: email, website: website, contact: contact } });
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
                        <div className="w-[90%] grid grid-cols-4">
                            <div className="flex items-center gap-x-2">
                                <div className="text-sm font-semibold">Challan No.</div>
                                {/*<input type="text" name="no" placeholder="Enter Qoutation No." className="border border-border p-2 mb-2 mr-5 w-25 bg-background" value={data.no} onChange={e => setData((pre) => { return { ...pre, no: e.target.value }; })} />*/}
                                <div className="bg-headerBackground p-2">{challanData.no}</div>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <div className="text-sm font-semibold">Date</div>
                                <input type="date" color="white" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="p-2 bg-headerBackground w-36 h-10" value={challanData.date} onChange={e => setChallanData(pre => { return { ...pre, date: e.target.value } })} />
                            </div>
                            <div className="w-auto mr-10">
                                <Listbox value={profile.generalInfo[selectedProfile].company} onChange={e => {
                                    const index = names.indexOf(e);
                                    setSelectedProfile(index);
                                    updateData(index);
                                }}>
                                    <div className="relative flex justify-center items-center gap-x-4">
                                        <div className="text-sm font-semibold">Profile</div>
                                        <ListboxButton className="w-full flex items-center justify-between hover:bg-buttonHover bg-headerBackground p-2">
                                            <div className="text-textSecondary truncate text-nowrap overflow-hidden w-48 px-2">{profile.generalInfo[selectedProfile].company}</div>
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
                            <div className="flex items-center gap-x-4">
                                <div className="text-sm font-semibold">Bill No.</div>
                                <input type="text" color="white" name="billno" id="billno" placeholder="Bill No." className="p-2 border border-border w- h-10 bg-background" value={challanData.billno} onChange={e => setChallanData(pre => { return { ...pre, billno: e.target.value } })} />
                            </div>
                        </div>
                        {step === 1 &&
                            <div className="w-[10%] flex justify-end">
                                <button onClick={addItem} className="button px-4 py-1 text-lg">
                                    Add Item
                                </button>
                            </div>}
                    </div>


                    {/*<div className="w-1/2 flex justify-end">
                            <Link to={"/dashboard/showquotations"} className="bg-button text-buttonTextPrimary px-4 py-1 text-lg" onClick={(e) => { setHeaderText(createQuotation); }}>
                                Cancel
                            </Link>
                        </div>*/}
                </div>

                <div className="flex flex-col items-center w-full text-textSecondary">
                    {step === 0 && <>
                        <div className="flex w-full mt-4">
                            <div className="w-full space-y-4">
                                <div className="w-[90%] grid grid-cols-4">
                                    <div className="">
                                        <div className="text-sm font-semibold text-left">Order No</div>
                                        <input type="text" color="white" name="orderno" id="orderno" placeholder="Order No." className="p-2 border border-border w- h-10 bg-background" value={challanData.orderno} onChange={e => setChallanData(pre => { return { ...pre, date: e.target.value } })} />
                                    </div>
                                    <div className="">
                                        <div className="text-sm font-semibold">Mode of Dispatch</div>
                                        <input type="text" color="white" name="modeofdispatch" id="orderno" placeholder="Mode of Dispatch" className="p-2 border border-border w-25 h-10 bg-background" value={challanData.modeofdispatch} onChange={e => setChallanData(pre => { return { ...pre, date: e.target.value } })} />
                                    </div>
                                    <div className="">
                                        <div className="text-sm font-semibold">Challan Type</div>
                                        <Listbox value={challanData.type} onChange={(e) => { setChallanData(pre => { return { ...pre, type: e } }) }}>
                                            <div className="relative">
                                                <ListboxButton className="w-[75%] flex items-center justify-between hover:bg-buttonHover bg-headerBackground p-2">
                                                    <div className="text-textSecondary mr-2">{challanData.type}</div>
                                                    <ChevronDown className="text-textPrimary" />
                                                </ListboxButton>

                                                <ListboxOptions
                                                    transition
                                                    className="absolute -right-34 z-10 mt-2 w-[75%] origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                >
                                                    <div className="p-1">
                                                        {constData.challanType.map((type) => (
                                                            <ListboxOption
                                                                key={type}
                                                                value={type}
                                                                className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                                            >
                                                                {type}
                                                            </ListboxOption>
                                                        ))}
                                                    </div>
                                                </ListboxOptions>
                                            </div>
                                        </Listbox>
                                    </div>
                                    <div className="">
                                        <div className="text-sm font-semibold">Challan Category</div>
                                        <Listbox value={challanData.category} onChange={e => { setChallanData(pre => { return { ...pre, category: e } }) }}>
                                            <div className="relative">
                                                <ListboxButton className="w-[75%] flex items-center justify-between hover:bg-buttonHover p-2 bg-headerBackground">
                                                    <div className="text-textSecondary mr-2">{challanData.category}</div>
                                                    <ChevronDown className="text-textPrimary" />
                                                </ListboxButton>

                                                <ListboxOptions
                                                    transition
                                                    className="absolute -right-34 z-10 mt-2 w-[75%] origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                >
                                                    <div className="p-1">
                                                        {constData.challanCatorgoies.map((category) => (
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
                                <div className="flex space-x-10 w-full">
                                    <div className="w-full space-y-4">
                                        <div>
                                            <label htmlFor="firstPartyName" className="text-sm font-semibold">First Party Name</label>
                                            <input id="firstPartyName" key={"frist"} type="text" placeholder="Enter First Party Name" className="border border-border p-2 w-full bg-background" value={challanData.from} onChange={e => setChallanData(pre => { return { ...pre, from: e.target.value } })} />
                                        </div>
                                        <div>
                                            <label htmlFor="firstPartyAddress" className="text-sm font-semibold">First Party Address</label>
                                            <textarea id="firstPartyAddress" rows={5} placeholder="Enter First Party Address" className="p-2 border border-border w-full bg-background" value={challanData.fromAddress} onChange={e => setChallanData(pre => { return { ...pre, fromAddress: e.target.value } })} />
                                        </div>
                                    </div>
                                    <div className="w-full space-y-4">
                                        <div>
                                            <label htmlFor="secondPartyName" className="text-sm font-semibold">Second Party Name</label>
                                            <input id="secondPartyName" key={"second"} type="text" placeholder="Enter Second Party Name" className="border border-border p-2 w-full bg-background" value={challanData.to} onChange={e => setChallanData(pre => { return { ...pre, to: e.target.value } })} />
                                        </div>
                                        <div>
                                            <label htmlFor="secondPartyAddress" className="text-sm font-semibold">Second Party Address</label>
                                            <textarea id="secondPartyAddress" rows={5} placeholder="Enter Second Party Address" className="p-2 border border-border w-full bg-background" value={challanData.toAddress} onChange={e => setChallanData(pre => { return { ...pre, toAddress: e.target.value } })} />
                                        </div>
                                    </div>
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
                            <div className="mt-4 space-y-2 overflow-y-auto h-[calc(100vh-280px)] w-full">
                                <div className="w-full grid grid-cols-10 gap-x-2">
                                    <div className="col-span-3 p-2">Name</div>
                                    <div className="col-span-4 p-2">Serial Numbers</div>
                                    <div className="col-span-1 p-2">Quantity</div>
                                    <div className="col-span-1 p-2">Unit</div>
                                    <button className="col-span-1 invisible p-2"><Minus className="text-textSecondary" /></button>
                                </div>
                                {
                                    challanItems.map((_, index) => {
                                        return <>
                                            <ChallanAutocompleteSearch key={index} index={index} />
                                        </>;
                                    })}
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="flex items-center">
                                    <div className="text-sm font-semibold mr-4">Total Items:</div>
                                    <div className="">{challanItems.length}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm font-semibold mr-4">Total Quantity:</div>
                                    <div className="">{challanItems.reduce((acc, item) => acc + item.quantity, 0)}</div>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button onClick={() => setStep(0)} className="button px-4 py-1 mt-4 text-lg">
                                    Back
                                </button>

                                <form onSubmit={(e) => { const updatedChallanData = { ...challanData, items: challanItems }; setChallanData(pre => { return { ...pre, items: challanItems } }); createPdf(updatedChallanData, fetcher, false, true, challans); e.preventDefault(); navigate("/dashboard/challan/show"); }}>
                                    <button className="button px-4 py-1 mt-4 text-lg" type="submit">Generate Challan PDF</button>
                                </form>
                            </div>
                        </>
                    }
                </div>
            </motion.div>
        </AnimatePresence >
    </>);
}

