import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";

export default function Password() {
    const { setHeaderText, profile, setProfile } = useGlobalContext();

    useEffect(() => {
        setHeaderText("Change Password");
    }, []);

    async function handleSubmit() {
        const response = await fetch('/api/password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profile),
        });
    }

    return (
        <>
            <form method="post" action="/api/password" className="text-textPrimary mt-4 space-y-4">
                <input hidden name="username" value={profile.username} />
                <div>
                    Current Password <input required autoComplete="password" type="password" name="currentPassword" placeholder="Enter Current Password" className="border border-border p-2 bg-background w-full" onChange={(e) => { setProfile((pre) => { return { ...pre, contact: e.target.value } }) }} />
                </div>
                <div>
                    New Password (At least 6 character long) <input required minLength={6} autoComplete="password" type="password" name="newPassword" placeholder="Enter New Password" className="border border-border p-2 w-full bg-background" onChange={(e) => { setProfile((pre) => { return { ...pre, email: e.target.value } }) }} />
                </div>
                <div>
                    Repeat Password (At least 6 character long) <input required minLength={6} autoComplete="password" type="password" name="repeatPassword" placeholder="Enter New Password" className="border border-border p-2 w-full bg-background" onChange={(e) => { setProfile((pre) => { return { ...pre, email: e.target.value } }) }} />
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg">
                        Save
                    </button>
                </div>
            </form>

        </>
    );
}