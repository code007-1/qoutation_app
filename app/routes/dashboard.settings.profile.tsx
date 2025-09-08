import { useEffect } from "react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Switch, RadioGroup, Radio } from "@headlessui/react";
import { Trash2 } from "lucide-react";

export type generalInfo = {
    contact?: string,
    email?: string,
    website?: string,
    company: string,
    address?: string,
}

export type quotationInfo = {
    pdfColor: string,
    showCustomerList?: boolean,
    terms?: string,
    additionalInfo?: string,
    intro?: string,
}

export type profile = {
    username?: string,
    password?: string,
    generalInfo: generalInfo[],
    quotationInfo: quotationInfo[],
}

export default function SettingsProfile() {
    const { setHeaderText, profile, setProfile, selectedProfile, setSelectedProfile } = useGlobalContext();
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();
    const names = profile?.generalInfo.map((p) => p.company) || [];

    useEffect(() => {
        setHeaderText("Profile Settings");
    }, []);

    async function handleSubmit() {
        const response = await fetcher("/api/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile),
        });
        if (response.status === 200) addNotifications({ title: "Success...", message: "Profile updated successfully" });
        else addNotifications({ title: "Failure....", message: "Fail to update profile...try gain later..." });
    }

    return (
        <>
            <div className="flex w-full mt-4 gap-x-10">
                <div className="bg-buttonHover/50 p-2 w-2/12">
                    <button className="w-full button px-4 py-1 text-lg mb-6" onClick={() => {
                        setProfile((pre) => {
                            const updatedGeneralInfo = [...pre.generalInfo, { contact: "", address: "", company: Array.from({ length: 10 }, () => Math.random().toString(36)[2]).join(''), website: "", email: "" }];
                            const updatedQuotationInfo = [...pre.quotationInfo, { pdfColor: "222", showCustomerList: true }]
                            return { ...pre, generalInfo: updatedGeneralInfo, quotationInfo: updatedQuotationInfo };
                        })
                    }}>Create New Profile</button>
                    <RadioGroup value={selectedProfile} onChange={setSelectedProfile} aria-label="Server size" className="space-y-2">
                        {names.map((name, idx) => (
                            <Radio
                                key={name}
                                value={idx}
                                className={({ checked }) =>
                                    `group relative flex cursor-pointer p-2 hover:bg-button hover:text-buttonTextPrimary
                                ${checked ? "bg-button text-buttonTextPrimary" : "bg-buttonHover text-textPrimary"}`
                                }
                            >
                                <div className="flex justify-between items-center w-full">
                                    <div className="overflow-ellipsis text-nowrap overflow-hidden">{name}</div>
                                    <div className="w-min text-textSecondary hover:text-textPrimary px-2 ml-2" onClick={() => {
                                        if (selectedProfile === 0 && profile?.generalInfo.length === 1) return;
                                        setProfile((pre) => {
                                            const updatedGeneralInfo = pre.generalInfo.filter((_, i) => i !== idx);
                                            const updatedQuotationInfo = pre.quotationInfo.filter((_, i) => i !== idx);
                                            if (selectedProfile === idx) setSelectedProfile(0);
                                            else if (selectedProfile > idx) setSelectedProfile((pre) => pre - 1);
                                            return { ...pre, generalInfo: updatedGeneralInfo, quotationInfo: updatedQuotationInfo };
                                        })
                                    }}><Trash2 /></div>
                                </div>
                            </Radio>
                        ))}
                    </RadioGroup>
                </div>
                <div className="w-full">
                    <TabGroup className="">
                        <TabList className="flex justify-center w-full">
                            <div className="flex bg-headerBackground" tabIndex={0}>
                                {["General Profile Settings", "Quotation Related Settings"].map((name: string) => (
                                    <Tab
                                        key={name}
                                        className="py-2 px-4 font-semibold text-textSecondary focus:outline-none hover:bg-buttonHover"
                                    >
                                        {name}
                                    </Tab>
                                ))}
                            </div>
                        </TabList>

                        <TabPanels className="">
                            <TabPanel key={"General Profile Settings"} className="">
                                <div className="grid grid-cols-2 gap-4 text-textPrimary mt-4">
                                    <div>
                                        Contact Number <input type="text" name="contactNumber" placeholder="+91 ...." className="border border-border p-2 bg-background w-full" value={profile?.generalInfo[selectedProfile]?.contact || ""} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedGeneralInfo = [...pre.generalInfo];
                                                updatedGeneralInfo[selectedProfile] = { ...updatedGeneralInfo[selectedProfile], contact: e.target.value };
                                                return { ...pre, generalInfo: updatedGeneralInfo };
                                            })
                                        }} />
                                    </div>
                                    <div>
                                        Email ID <input type="email" name="email" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.generalInfo[selectedProfile]?.email || ""} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedGeneralInfo = [...pre.generalInfo];
                                                updatedGeneralInfo[selectedProfile] = { ...updatedGeneralInfo[selectedProfile], email: e.target.value };
                                                return { ...pre, generalInfo: updatedGeneralInfo };
                                            })
                                        }} />
                                    </div>
                                    <div>
                                        Website <input type="text" name="website" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.generalInfo[selectedProfile]?.website || ""} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedGeneralInfo = [...pre.generalInfo];
                                                updatedGeneralInfo[selectedProfile] = { ...updatedGeneralInfo[selectedProfile], website: e.target.value };
                                                return { ...pre, generalInfo: updatedGeneralInfo };
                                            })
                                        }} />
                                    </div>
                                    <div>
                                        Company <input type="text" name="company" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.generalInfo[selectedProfile]?.company || ""} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedGeneralInfo = [...pre.generalInfo];
                                                updatedGeneralInfo[selectedProfile] = { ...updatedGeneralInfo[selectedProfile], company: e.target.value };
                                                return { ...pre, generalInfo: updatedGeneralInfo };
                                            })
                                        }} />
                                    </div>
                                    <div>
                                        Address <textarea rows={3} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.generalInfo[selectedProfile]?.address || ""} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedGeneralInfo = [...pre.generalInfo];
                                                updatedGeneralInfo[selectedProfile] = { ...updatedGeneralInfo[selectedProfile], address: e.target.value };
                                                return { ...pre, generalInfo: updatedGeneralInfo };
                                            })
                                        }} />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel key={"Quotation Related Settings"} className="">
                                <div className="grid grid-cols-2 gap-4 text-textPrimary mt-4">
                                    <div>
                                        Terms and Conditions <textarea rows={5} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.quotationInfo[selectedProfile]?.terms} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedQuotationInfo = [...pre.quotationInfo];
                                                updatedQuotationInfo[selectedProfile] = { ...updatedQuotationInfo[selectedProfile], terms: e.target.value };
                                                return { ...pre, quotationInfo: updatedQuotationInfo };
                                            })
                                        }} />
                                    </div>
                                    <div>
                                        Additional Information <textarea rows={5} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.quotationInfo[selectedProfile]?.additionalInfo} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedQuotationInfo = [...pre.quotationInfo];
                                                updatedQuotationInfo[selectedProfile] = { ...updatedQuotationInfo[selectedProfile], additionalInfo: e.target.value };
                                                return { ...pre, quotationInfo: updatedQuotationInfo };
                                            })
                                        }} />
                                    </div>
                                    <div>
                                        Introuductory Text <textarea rows={3} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.quotationInfo[selectedProfile]?.intro} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedQuotationInfo = [...pre.quotationInfo];
                                                updatedQuotationInfo[selectedProfile] = { ...updatedQuotationInfo[selectedProfile], intro: e.target.value };
                                                return { ...pre, quotationInfo: updatedQuotationInfo };
                                            })
                                        }} />
                                    </div>
                                    <div>
                                        PDF Accent Color <input max={360} min={0} title="Hue Value for Color (0, 360)" type="number" name="pdfColor" placeholder="Enter Color HUE Value" className="border border-border p-2 w-full bg-background" value={profile?.quotationInfo[selectedProfile]?.pdfColor} onChange={(e) => {
                                            setProfile((pre) => {
                                                const updatedQuotationInfo = [...pre.quotationInfo];
                                                updatedQuotationInfo[selectedProfile] = { ...updatedQuotationInfo[selectedProfile], pdfColor: e.target.value };
                                                return { ...pre, quotationInfo: updatedQuotationInfo };
                                            })
                                        }} />
                                        <div className="mt-4 flex items-center">
                                            <div>Show Customer Lists : </div>
                                            <Switch
                                                checked={profile?.quotationInfo[selectedProfile]?.showCustomerList || true}
                                                onChange={(e) => {
                                                    setProfile((pre) => {
                                                        const updatedQuotationInfo = [...pre.quotationInfo];
                                                        updatedQuotationInfo[selectedProfile] = { ...updatedQuotationInfo[selectedProfile], showCustomerList: e };
                                                        return { ...pre, quotationInfo: updatedQuotationInfo };
                                                    })
                                                }}
                                                className={`ml-4 ${profile?.quotationInfo[selectedProfile]?.showCustomerList || true ? "bg-button/75" : "bg-buttonHover"}
          relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                                            >
                                                <span className="sr-only">Show Customer Lists : </span>
                                                <span
                                                    aria-hidden="true"
                                                    className={`${profile?.quotationInfo[selectedProfile]?.showCustomerList || true ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                />
                                            </Switch>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                    <div className="flex justify-center ">
                        <button onClick={handleSubmit} className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                            Save
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
}

/*
update profile load from data and update profiles in db itself
*/