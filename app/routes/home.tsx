import Header from "~/component/header";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { NotepadText, ReceiptIndianRupee, ReceiptText, ScrollText } from "lucide-react";

export default function DashboardSettings() {
    const navigate = useNavigate();
    const { accessToken, setHeaderText } = useGlobalContext();


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
                        <div className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/50 my-4 mx-10" onClick={() => navigate("/dashboard/quotations/show")}>                            <ScrollText size={200} className="text-textSecondary" />
                            <div className="text-textSecondary font-bold text-center text-2xl">
                                Quotation
                            </div>
                        </div>
                        <div className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/50 my-4 mx-10" onClick={() => navigate("/dashboard/challan/show")}>
                            <NotepadText size={200} className="text-textSecondary" />
                            <div className="text-textSecondary font-bold text-center text-2xl">Challan</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}