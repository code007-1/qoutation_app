import Header from "~/component/menu/header";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";

export default function DashboardSettings() {
    const navigate = useNavigate();
    const { accessToken } = useGlobalContext();


    useEffect(() => {
        if (accessToken === undefined)
            navigate("/");
    }, [accessToken]);

    return (
        <>
            <div className="h-screen w-screen bg-background">
                <Header />
                <div className="mx-10">
                    <Outlet />
                </div>
            </div>
        </>
    );
}