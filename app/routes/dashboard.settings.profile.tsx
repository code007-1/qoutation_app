import { useEffect, useState } from "react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Switch } from '@headlessui/react';

export type profile = {
    username?: string,
    password?: string,
    contact: string,
    email: string
    website?: string,
    company: string,
    address: string,
    pdfColor: string,
    showCustomerList?: boolean
    terms?: string,
    additionalInfo?: string,
    intro?: string,
}

export default function SettingsProfile() {
    const { setHeaderText, profile, setProfile } = useGlobalContext();
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();
    const [enabled, setEnabled] = useState(profile.showCustomerList);

    useEffect(() => {
        setHeaderText("Profile Settings");
    });

    async function handleSubmit() {
        const response = await fetcher('/api/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profile),
        });
        if (response.status === 200) addNotifications({ title: "Success...", message: "Profile updated successfully" });
        else addNotifications({ title: "Failure....", message: "Fail to update profile...try gain later..." });
    }

    return (
        <>
            <TabGroup className={"mt-4"}>
                <TabList className="flex justify-center w-full">
                    <div className="flex bg-headerBackground">
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
                                Contact Number <input type="text" name="contactNumber" placeholder="+91 ...." className="border border-border p-2 bg-background w-full" value={profile?.contact} onChange={(e) => { setProfile((pre) => { return { ...pre, contact: e.target.value } }) }} />
                            </div>
                            <div>
                                Email ID <input type="email" name="email" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.email} onChange={(e) => { setProfile((pre) => { return { ...pre, email: e.target.value } }) }} />
                            </div>
                            <div>
                                Website <input type="text" name="website" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.website} onChange={(e) => { setProfile((pre) => { return { ...pre, website: e.target.value } }) }} />
                            </div>
                            <div>
                                Company <input type="text" name="company" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.company} onChange={(e) => { setProfile((pre) => { return { ...pre, company: e.target.value } }) }} />
                            </div>
                            <div>
                                Address <textarea rows={3} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.address} onChange={(e) => { setProfile((pre) => { return { ...pre, address: e.target.value } }) }} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel key={"Quotation Related Settings"} className="">
                        <div className="grid grid-cols-2 gap-4 text-textPrimary mt-4">
                            <div>
                                Terms and Conditions <textarea rows={5} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.terms} onChange={(e) => { setProfile((pre) => { return { ...pre, terms: e.target.value } }) }} />
                            </div>
                            <div>
                                Additional Information <textarea rows={5} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.additionalInfo} onChange={(e) => { setProfile((pre) => { return { ...pre, additionalInfo: e.target.value } }) }} />
                            </div>
                            <div>
                                Introuductory Text <textarea rows={3} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.intro} onChange={(e) => { setProfile((pre) => { return { ...pre, intro: e.target.value } }) }} />
                            </div>
                            <div>
                                PDF Accent Color <input max={360} min={0} title="Hue Value for Color (0, 360)" type="number" name="pdfColor" placeholder="Enter Color HUE Value" className="border border-border p-2 w-full bg-background" value={profile?.pdfColor} onChange={(e) => { setProfile((pre) => { return { ...pre, pdfColor: e.target.value } }) }} />
                                <div className="mt-4 flex items-center">
                                    <div>Show Customer Lists : </div>
                                    <Switch
                                        checked={enabled}
                                        onChange={(e) => { setEnabled(e); setProfile((pre) => { return { ...pre, showCustomerList: e } }) }}
                                        className={`ml-4 ${enabled ? 'bg-button/75' : 'bg-buttonHover'}
          relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                                    >
                                        <span className="sr-only">Show Customer Lists : </span>
                                        <span
                                            aria-hidden="true"
                                            className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
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
        </>
    );
}