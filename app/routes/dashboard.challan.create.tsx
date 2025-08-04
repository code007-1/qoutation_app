import { useFetcher, useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import ChallanAutocompleteSearch from "~/component/challan/challanAutocompleteSearch";
import { logoutData } from "~/modules/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCentralFetcher } from "~/component/centralFetcher";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Switch } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

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

    const { challanItems, setChallanItems, challanData, setChallanData, oldChallanData, accessToken, setAccessToken, setHeaderText, profile } = useGlobalContext();
    const [step, setStep] = useState<number>(0);

    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken === undefined) //console.log("should navigate to home page");
            navigate("/");
    }, [accessToken]);

    function addItem() {
        setChallanItems(pre => { return [...pre, { id: 0, name: "", quantity: 0, sno: [], unit: "pcs" }] });
    }

    useEffect(() => {
        if (step === 0) setHeaderText("Challan Details");
        else if (step === 1) setHeaderText("Challan Product Details");
    }, [step]);

    useEffect(() => {
        var no = new Date().getTime().toString();
        var fromAddress = profile.address;
        var from = profile.company;

        if (passedData && passedData?.editing === true) {
            no = challanData.no;
            fromAddress = challanData.fromAddress;
            from = challanData.from;
        }
        setChallanData((pre) => { return { ...pre, no: no, from: from, fromAddress: fromAddress, email: profile.email, website: profile.website, contact: profile.contact, pdfColor: String(profile.pdfColor), madeby: profile.username || "", date: new Date().toISOString().split("T")[0] } });
    }, [])

    //updateItem={updatedItem} updatePrice={updatedPrice} updateQuanity={updatedQuanity} deleteItem={deleteItem}
    const [type, setType] = useState<string>("Delivery Challan");

    const [category, setCategory] = useState<string>("Dealer Sale");
    const challanCatorgoies = ["Dealer Sale", "Dealer Return", "Customer Sale", "Customer Return", "Other"];

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
                        <div className="flex items-center w-[90%]">
                            <div className="flex w-[15%] gap-x-2">
                                <div className="text-sm font-semibold">Challan No.</div>
                                {/*<input type="text" name="no" placeholder="Enter Qoutation No." className="border border-border p-2 mb-2 mr-5 w-25 bg-background" value={data.no} onChange={e => setData((pre) => { return { ...pre, no: e.target.value }; })} />*/}
                                <div className="text-sm">{challanData.no}</div>
                            </div>
                            <div className="flex w-[15%] items-center gap-x-4">
                                <div className="text-sm font-semibold">Date</div>
                                <input type="date" color="white" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border w-25 h-10 bg-background" value={challanData.date} onChange={e => setChallanData(pre => { return { ...pre, date: e.target.value } })} />
                            </div>
                        </div>

                        {step === 1 &&
                            <div className="w-[10%] flex justify-end">
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

                    <div className="flex flex-col items-center">
                        {step === 0 && <>
                            <div className="flex w-full mt-4">
                                <div className="w-full space-y-4">
                                    <div className="w-[90%] flex">
                                        <div className="w-[15%]">
                                            <div className="text-sm font-semibold text-left">Order No</div>
                                            <input type="text" color="white" name="orderno" id="orderno" placeholder="Order No." className="p-2 border border-border w- h-10 bg-background" value={challanData.date} onChange={e => setChallanData(pre => { return { ...pre, date: e.target.value } })} />
                                        </div>
                                        <div className="w-[15%]">
                                            <div className="text-sm font-semibold">Mode of Dispatch</div>
                                            <input type="text" color="white" name="modeofdispatch" id="orderno" placeholder="Mode of Dispatch" className="p-2 border border-border w-25 h-10 bg-background" value={challanData.date} onChange={e => setChallanData(pre => { return { ...pre, date: e.target.value } })} />
                                        </div>
                                        <div className="w-[15%]">
                                            <div className="text-sm font-semibold">Challan Type</div>
                                            <Listbox value={type} onChange={setType}>
                                                <div className="relative">
                                                    <ListboxButton className="w-[75%] flex items-center justify-between hover:bg-buttonHover px-2 border border-border py-2">
                                                        <div className="text-textSecondary mr-2">{type}</div>
                                                        <ChevronDown className="text-textPrimary" />
                                                    </ListboxButton>

                                                    <ListboxOptions
                                                        transition
                                                        className="absolute -right-34 z-10 mt-2 w-[75%] origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                    >
                                                        <div className="p-1">
                                                            {["Delivery Challan", "MIS Challan"].map((type) => (
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
                                        <div className="w-[15%]">
                                            <div className="text-sm font-semibold">Challan Category</div>
                                            <Listbox value={category} onChange={setCategory}>
                                                <div className="relative">
                                                    <ListboxButton className="w-[75%] flex items-center justify-between hover:bg-buttonHover px-2 border border-border py-2">
                                                        <div className="text-textSecondary mr-2">{category}</div>
                                                        <ChevronDown className="text-textPrimary" />
                                                    </ListboxButton>

                                                    <ListboxOptions
                                                        transition
                                                        className="absolute -right-34 z-10 mt-2 w-[75%] origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                    >
                                                        <div className="p-1">
                                                            {challanCatorgoies.map((category) => (
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
                                                <label className="text-sm font-semibold">First Party Name</label>
                                                <input key={"frist"} type="text" placeholder="Enter First Party Name" className="border border-border p-2 w-full bg-background" value={challanData.from} onChange={e => setChallanData(pre => { return { ...pre, from: e.target.value } })} />
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold">First Party Address</label>
                                                <textarea rows={5} placeholder="Enter First Party Address" className="p-2 border border-border w-full bg-background" value={challanData.fromAddress} onChange={e => setChallanData(pre => { return { ...pre, fromAddress: e.target.value } })} />
                                            </div>
                                        </div>
                                        <div className="w-full space-y-4">
                                            <div>
                                                <label className="text-sm font-semibold">Second Party Name</label>
                                                <input key={"second"} type="text" placeholder="Enter Second Party Name" className="border border-border p-2 w-full bg-background" value={challanData.to} onChange={e => setChallanData(pre => { return { ...pre, to: e.target.value } })} />
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold">Second Party Address</label>
                                                <textarea rows={5} placeholder="Enter Second Party Address" className="p-2 border border-border w-full bg-background" value={challanData.toAddress} onChange={e => setChallanData(pre => { return { ...pre, toAddress: e.target.value } })} />
                                            </div>
                                        </div>
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
                                        challanItems.map((_, index) => {
                                            return <>
                                                <ChallanAutocompleteSearch key={index} index={index} />
                                            </>;
                                        })}
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex items-center">
                                        <div className="text-sm font-semibold mr-4">Total Quantity:</div>
                                        <div className="">Rs.{"11"}</div>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button onClick={() => setStep(0)} className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                                        Back
                                    </button>
                                    <form onSubmit={(e) => { "create pdf"; e.preventDefault(); navigate("/dashboard/showquotations") }}>
                                        <button className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg" type="submit">Generate Challan PDF</button>
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