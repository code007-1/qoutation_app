import Header from "~/component/header";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";

export default function Dashboard() {
    const navigate = useNavigate();
    const { accessToken, setHeaderText } = useGlobalContext();

    useEffect(() => {
        if (accessToken === undefined)
            navigate("/");
    }, [accessToken]);

    //useEffect(() => { setHeaderText("Create New Qoutation") }, [])

    return (
        <>
            <div className="h-screen w-screen bg-background">
                <Header />
                <Outlet />
            </div>
        </>
    );
}