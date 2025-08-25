import { useEffect } from "react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";

export default function SettingsPassword() {
    const { setHeaderText, profile } = useGlobalContext();
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    useEffect(() => {
        setHeaderText("Change Password");
    }, []);

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetcher('/api/password', {
            method: 'POST',
            body: formData,
        });
        if (response.status === 200) addNotifications({ title: "Success...", message: "Password updated successfully" });
        else addNotifications({ title: "Failure...", message: "Fail to update password...try gain later." });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="text-textPrimary mt-4 space-y-4">
                <input hidden name="username" value={profile.username} />
                <div>
                    Current Password <input required autoComplete="password" type="password" name="currentPassword" placeholder="Enter Current Password" className="border border-border p-2 bg-background w-full" />
                </div>
                <div>
                    New Password (At least 6 character long) <input required minLength={6} autoComplete="password" type="password" name="newPassword" placeholder="Enter New Password" className="border border-border p-2 w-full bg-background" />
                </div>
                <div>
                    Repeat Password (At least 6 character long) <input required minLength={6} autoComplete="password" type="password" name="repeatPassword" placeholder="Enter New Password" className="border border-border p-2 w-full bg-background" />
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