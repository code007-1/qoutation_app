import Header from "~/component/header";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { createQuotation, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";

export default function Dashboard() {
    const navigate = useNavigate();
    const { accessToken } = useGlobalContext();


    useEffect(() => {
        if (accessToken === undefined)
            navigate("/");
    }, [accessToken]);



    useEffect(() => {

    }, []);

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