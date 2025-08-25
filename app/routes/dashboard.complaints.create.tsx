import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { AnimatePresence, motion } from "framer-motion";
import { useCentralFetcher } from "~/component/centralFetcher";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export type ComplaintsData = {
    no: string;
    type: string;
    date: string;
    time: string;
    complainingParty: string;
    partyNumber: string;
    complaint: string;
    partyAddress: string;
    attendingEngineer: string;
    madeby: string;
    remarks: string[];
};

export default function ComplaintsCreate() {
    const location = useLocation();
    const passedData = location.state;

    const { complaintsData, setComplaintsData, setHeaderText, profile } = useGlobalContext();
    const [step, setStep] = useState<number>(0);
    const fetcher = useCentralFetcher();

    function saveComplaint() {
        fetcher(`/api/savecomplaint`, {
            method: "POST", headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(complaintsData),
        })
    }

    useEffect(() => {
        var no = "Govt-1";

        if (passedData && passedData?.editing === true) {
            no = complaintsData.no;
        }
        setComplaintsData((pre) => { return { ...pre, no: no, madeby: profile.username || "", date: new Date().toISOString().split("T")[0] } });
        setHeaderText("Complaint Details");
    }, [])

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
                    <div className="mt-4 flex items-center align-middle">
                        <div className="grid grid-cols-3 gap-x-2 gap-y-2 w-full">
                            <div className="">
                                <div className="text-sm font-semibold mr-2">Complaint No.</div>
                                <input type="text" className="sm border border-border p-2 bg-background w-full" placeholder="Enter complaint no." value={complaintsData.no} onChange={(e) => { setComplaintsData(pre => { return { ...pre, no: e.target.value } }) }} />
                            </div>
                            <div className="">
                                <div className="text-sm font-semibold mr-2">Date & Time</div>
                                <input type="datetime-local" color="white" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border h-10 bg-background w-full" value={complaintsData.date + "T" + complaintsData.time} onChange={e => { setComplaintsData(pre => { const dt = e.target.value.split("T"); return { ...pre, date: dt[0], time: dt[1] } }) }} />
                            </div>
                            <div>
                                <label className="text-sm font-semibold">Complaining Party Name</label>
                                <input key={"address"} type="text" placeholder="Enter party Name" className="border border-border p-2 w-full bg-background" value={complaintsData.complainingParty} onChange={e => setComplaintsData(pre => { return { ...pre, complainingParty: e.target.value } })} />
                            </div>
                            <div className="">
                                <div className="text-sm font-semibold mr-2">Complaint Type</div>
                                <div>
                                    <Listbox value={complaintsData.type} onChange={e => { setComplaintsData(pre => { return { ...pre, type: e } }) }}>
                                        <div className="relative">
                                            <ListboxButton className="flex items-center justify-between hover:bg-buttonHover px-2 border border-border py-2 w-full">
                                                <div className="text-textSecondary mr-2">{complaintsData.type}</div>
                                                <ChevronDown className="text-textPrimary" />
                                            </ListboxButton>

                                            <ListboxOptions
                                                transition
                                                className="absolute -right-34 z-10 w-[100%] mt-2 origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                <div className="p-1">
                                                    {["Government", "Private"].map((category) => (
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
                            <div className="">
                                <div className="text-sm font-semibold mr-2">Assigned Engineer</div>
                                <div>
                                    <Listbox value={complaintsData.attendingEngineer} onChange={e => { setComplaintsData(pre => { return { ...pre, attendingEngineer: e } }) }}>
                                        <div className="relative">
                                            <ListboxButton className="flex items-center justify-between hover:bg-buttonHover px-2 border border-border py-2 w-full">
                                                <div className="text-textSecondary mr-2">{complaintsData.attendingEngineer}</div>
                                                <ChevronDown className="text-textPrimary" />
                                            </ListboxButton>

                                            <ListboxOptions
                                                transition
                                                className="absolute -right-34 h-60 overflow-y-scroll z-10 mt-2 w-full origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                <div className="p-1">
                                                    {["Abhishek Mishra", "Abhishek Luthra", "Abhishek Verma", "Gulshan", "Mukesh Chand", "Prakhar", "Rahul", "Raj", "Roshan", "Saurav", "Shaifali", "Vishal", "Yashwant"].map((category) => (
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
                            <div>
                                <label className="text-sm font-semibold">Contact Number</label>
                                <input key={"second"} type="text" placeholder="Enter contact number" className="border border-border p-2 w-full bg-background" value={complaintsData.partyNumber} onChange={e => setComplaintsData(pre => { return { ...pre, partyNumber: e.target.value } })} />
                            </div>
                            <div>
                                <label className="text-sm font-semibold">Address</label>
                                <textarea rows={5} placeholder="Enter address" className="p-2 border border-border w-full bg-background" value={complaintsData.partyAddress} onChange={e => setComplaintsData(pre => { return { ...pre, partyAddress: e.target.value } })} />
                            </div>
                            <div >
                                <label className="text-sm font-semibold">Complaint</label>
                                <textarea rows={5} placeholder="Enter complaint" className="p-2 border border-border w-full bg-background" value={complaintsData.complaint} onChange={e => setComplaintsData(pre => { return { ...pre, complaint: e.target.value } })} />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">Remarks</label>
                                <textarea rows={5} placeholder="Enter remarks" className="p-2 border border-border w-full bg-background" value={complaintsData.remarks} onChange={e => setComplaintsData(pre => { return { ...pre, remarks: [e.target.value] } })} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <button onClick={saveComplaint} className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                            Save
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence >
    </>);
}