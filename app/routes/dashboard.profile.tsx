import { useEffect } from "react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";

export type user = {
    username?: string,
    password?: string,
    contact: string,
    email: string
    website?: string,
    company: string,
    address: string
    pdfColor: string
}

export default function Profile() {
    const { setHeaderText, profile, setProfile } = useGlobalContext();
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    useEffect(() => {
        setHeaderText("Profile Settings");
    }, []);

    async function handleSubmit() {
        const response = await fetcher('/api/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profile),
        });
        if (response.status === 200) addNotifications({ title: "Success...", message: "Profile updated successfully" });
        else addNotifications({ title: "Failure...", message: "Fail to update profile...try gain later.." });
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-4 text-textPrimary mt-4">
                <div>
                    Contact Number : <input type="text" name="contactNumber" placeholder="+91 ...." className="border border-border p-2 bg-background w-full" value={profile?.contact} onChange={(e) => { setProfile((pre) => { return { ...pre, contact: e.target.value } }) }} />
                </div>
                <div>
                    Email ID : <input type="email" name="email" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.email} onChange={(e) => { setProfile((pre) => { return { ...pre, email: e.target.value } }) }} />
                </div>
                <div>
                    Website : <input type="text" name="website" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.website} onChange={(e) => { setProfile((pre) => { return { ...pre, website: e.target.value } }) }} />
                </div>
                <div>
                    Company : <input type="text" name="company" placeholder="abc@email.com" className="border border-border p-2 w-full bg-background" value={profile?.company} onChange={(e) => { setProfile((pre) => { return { ...pre, company: e.target.value } }) }} />
                </div>
                <div>
                    Address :     <textarea rows={5} placeholder="Enter Address" className="border border-border p-2 w-full bg-background" value={profile?.address} onChange={(e) => { setProfile((pre) => { return { ...pre, address: e.target.value } }) }} />
                </div>
                <div>
                    PDF Accent Color : <input max={360} min={0} title="Hue Value for Color (0, 360)" type="number" name="pdfColor" placeholder="Enter Color HUE Value" className="border border-border p-2 w-full bg-background" value={profile?.pdfColor} onChange={(e) => { setProfile((pre) => { return { ...pre, pdfColor: e.target.value } }) }} />
                </div>
            </div>
            <div className="flex justify-center ">
                <button onClick={handleSubmit} className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                    Save
                </button>
            </div>
        </>
    );
}