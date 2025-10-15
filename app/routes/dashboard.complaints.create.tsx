import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { AnimatePresence, motion } from "framer-motion";
import { useCentralFetcher } from "~/component/centralFetcher";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import constData from "../../assets/data.json";

export type ComplaintsData = {
    no: string;
    type: string;
    date: string;
    time: string;
    contactPerson: string;
    contactNumber: string;
    complaint: string;
    nameOrAddress: string;
    attendingEngineer: string;
    recordedby: string;
    remarks: string;
    status: string;
};

export default function ComplaintsCreate() {
    const location = useLocation();
    const passedData = location.state;

    const { complaintsData, setComplaintsData, setHeaderText, profile } = useGlobalContext();
    const [step, setStep] = useState<number>(0);
    const fetcher = useCentralFetcher();

    function saveComplaint() {
        fetcher(`/api/create/complaint`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(complaintsData),
        })
    }

    useEffect(() => {
        // copying existing complaint
        if (passedData && passedData?.editing === false) {
            const d = new Date().toISOString().split("T");
            const date = d[0];
            const time = d[1].split(".")[0];
            setComplaintsData((pre) => { return { ...pre, no: "Govt-1", recordedby: profile.username || "", date: date, time: time } });
        }

        // editing existing complaint
        else if (passedData && passedData?.editing === true) {
            return;
        }
        else {
            const d = new Date().toISOString().split("T");
            const date = d[0];
            const time = d[1].split(".")[0];
            setComplaintsData((pre) => { return { ...pre, no: "Govt-1", recordedby: profile.username || "", date: date, time: time } });
        }
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
                <div className="mt-4 flex items-center align-middle text-textSecondary">
                    <div className="grid grid-cols-3 gap-x-2 gap-y-2 w-full">
                        <div className="">
                            <label htmlFor="complaintNo" className="text-sm font-semibold">Complaint No.</label>
                            <input id="complaintNo" type="text" className="sm border border-border p-2 bg-background w-full" placeholder="Enter complaint no." value={complaintsData.no} onChange={(e) => { setComplaintsData(pre => { return { ...pre, no: e.target.value } }) }} />
                        </div>
                        <div className="">
                            <label htmlFor="dateAndTime" className="text-sm font-semibold">Date & Time</label>
                            <input id="dateAndTime" type="datetime-local" color="white" name="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="border border-border h-10 bg-background w-full" value={complaintsData.date + "T" + complaintsData.time} onChange={e => { setComplaintsData(pre => { const dt = e.target.value.split("T"); return { ...pre, date: dt[0], time: dt[1] } }) }} />
                        </div>
                        <div className="">
                            <label htmlFor="complaintType" className="text-sm font-semibold">Complaint Type</label>
                            <div id="complaintType">
                                <Listbox value={complaintsData.type} onChange={e => { setComplaintsData(pre => { return { ...pre, type: e } }) }}>
                                    <div className="relative">
                                        <ListboxButton className="flex items-center justify-between hover:bg-buttonHover p-2 border border-border w-full">
                                            <div className="text-textSecondary">{complaintsData.type}</div>
                                            <ChevronDown className="text-textPrimary" />
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="absolute -right-34 z-10 w-[100%] mt-2 origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="p-1">
                                                {constData.complaintType.map((category) => (
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
                            <label htmlFor="contactpersonName" className="text-sm font-semibold">Contact Person Name</label>
                            <input id="contactpersonName" key={"address"} type="text" placeholder="Enter Contact Person Name" className="border border-border p-2 w-full bg-background" value={complaintsData.contactPerson} onChange={e => setComplaintsData(pre => { return { ...pre, contactPerson: e.target.value } })} />
                        </div>
                        <div>
                            <label htmlFor="contactNumber" className="text-sm font-semibold">Contact Number</label>
                            <input id="contactNumber" key={"second"} type="text" placeholder="Enter contact number" className="border border-border p-2 w-full bg-background" value={complaintsData.contactNumber} onChange={e => setComplaintsData(pre => { return { ...pre, contactNumber: e.target.value } })} />
                        </div>
                        <div className="">
                            <label htmlFor="assignedEngineer" className="text-sm font-semibold mr-2">Assigned Engineer</label>
                            <div id="assignedEngineer">
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
                                                {constData.Engineers.map((category) => (
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
                            <label htmlFor="nameOrAddress" className="text-sm font-semibold">Name or Address</label>
                            <textarea id="nameOrAddress" rows={3} placeholder="Enter name or address details" className="p-2 border border-border w-full bg-background" value={complaintsData.nameOrAddress} onChange={e => setComplaintsData(pre => { return { ...pre, nameOrAddress: e.target.value } })} />
                        </div>
                        <div >
                            <label htmlFor="complaint" className="text-sm font-semibold">Complaint</label>
                            <textarea id="complaint" rows={3} placeholder="Enter complaint" className="p-2 border border-border w-full bg-background" value={complaintsData.complaint} onChange={e => setComplaintsData(pre => { return { ...pre, complaint: e.target.value } })} />
                        </div>

                        <div>
                            <label htmlFor="remakrs" className="text-sm font-semibold">Remarks</label>
                            <textarea id="remarks" rows={3} placeholder="Enter remarks" className="p-2 border border-border w-full bg-background" value={complaintsData.remarks} onChange={e => setComplaintsData(pre => { return { ...pre, remarks: e.target.value } })} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-x-2 justify-center text-textSecondary">
                    <div className="text-sm font-semibold">Status</div>
                    <Listbox value={complaintsData.status} onChange={e => { setComplaintsData(pre => { return { ...pre, status: e } }) }}>
                        <div className="relative flex justify-center">
                            <ListboxButton className="flex items-center justify-between hover:bg-buttonHover px-2 border border-border py-2">
                                <div className="text-textSecondary">{complaintsData.status}</div>
                                <ChevronDown className="text-textPrimary" />
                            </ListboxButton>

                            <ListboxOptions
                                transition
                                className="absolute -right-34 top-10 z-10 mt-2 origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-1">
                                    {constData.complaintStatus.map((category) => (
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
                <div className="flex flex-col items-center">
                    <button onClick={saveComplaint} className="button px-4 py-1 mt-4 text-lg">
                        Save
                    </button>
                </div>
            </motion.div>
        </AnimatePresence >
    </>);
}