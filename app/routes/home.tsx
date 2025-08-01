import Header from "~/component/header";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { NotebookText, NotepadText, ScrollText } from "lucide-react";
import packageJson from "../../package.json";

export default function DashboardSettings() {
    const navigate = useNavigate();
    const { accessToken, setHeaderText, setAppName, setHomeLink } = useGlobalContext();


    useEffect(() => {
        if (accessToken === undefined)
            navigate("/");
    }, [accessToken]);

    useEffect(() => {
        // Set the header text for the settings page  
        setHeaderText("Select Service");
    }, []);

    return (
        <>
            <div className="h-screen w-screen bg-background">
                <Header />
                <div className="mx-10">
                    <div className="my-10 grid grid-cols-3 gap-x-20">
                        <div className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/50 mx-10 py-10" onClick={() => { setHomeLink("/dashboard/quotations/show"); setAppName(packageJson.name.slice(0, 3) + packageJson.name[3].toUpperCase() + packageJson.name.slice(4) + " - Quotation"); navigate("/dashboard/quotations/show") }}>
                            <ScrollText size={100} className="text-textSecondary" />
                            <div className="text-textSecondary font-bold text-center text-2xl">Quotation</div>
                        </div>
                        <div className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/50 mx-10 py-10" onClick={() => { setHomeLink("/dashboard/challan/show"); setAppName(packageJson.name.slice(0, 3) + packageJson.name[3].toUpperCase() + packageJson.name.slice(4) + " - Challan"); navigate("/dashboard/challan/show") }}>
                            <NotepadText size={100} className="text-textSecondary" />
                            <div className="text-textSecondary font-bold text-center text-2xl">Challan</div>
                        </div>
                        <div className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/50 mx-10 py-10" onClick={() => { setHomeLink("/dashboard/complaints/show"); setAppName(packageJson.name.slice(0, 3) + packageJson.name[3].toUpperCase() + packageJson.name.slice(4)); navigate("/dashboard/challan/show") }}>
                            <NotebookText size={100} className="text-textSecondary" />
                            <div className="text-textSecondary font-bold text-center text-2xl">Complaints</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}