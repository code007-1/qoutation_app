import Header from "~/component/menu/header";
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { BadgeAlert, FilePenLine, Layers, ScrollText } from "lucide-react";

export default function DashboardSettings() {
    const navigate = useNavigate();
    const { setHeaderText } = useGlobalContext();

    useEffect(() => {
        // Set the header text for the settings page  
        setHeaderText("Select Service");
    }, []);

    return (
        <>
            <div className="min-h-screen w-screen bg-background">
                <Header />

                <div className="m-5 grid grid-cols-3 gap-x-20">
                    <button className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/75 py-10 mx-20 my-4" onClick={() => navigate("/dashboard/quotations/show")}>
                        <ScrollText size={100} className="text-textSecondary" />
                        <div className="text-textSecondary font-bold text-center text-2xl">Quotation</div>
                    </button>
                    <button className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/50 py-10 mx-20 my-4" onClick={() => navigate("/dashboard/challan/show")}>
                        <FilePenLine size={100} className="text-textSecondary" />
                        <div className="text-textSecondary font-bold text-center text-2xl">Challan</div>
                    </button>
                    <button className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/50 py-10 mx-20 my-4" onClick={() => navigate("/dashboard/complaints/show")}>
                        <BadgeAlert size={100} className="text-textSecondary" />
                        <div className="text-textSecondary font-bold text-center text-2xl">Complaints</div>
                    </button>
                    <button className="flex flex-col items-center cursor-pointer hover:bg-buttonHover/50 py-10 mx-20 my-4" onClick={() => navigate("/dashboard/inventory/show")}>
                        <Layers size={100} className="text-textSecondary" />
                        <div className="text-textSecondary font-bold text-center text-2xl">Inventory</div>
                    </button>
                </div>
            </div>

        </>
    );
}