import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";

export default function Dashboard() {
    const navigate = useNavigate();
    const { accessToken } = useGlobalContext();


    useEffect(() => {
        if (accessToken === undefined)
            navigate("/");
    }, [accessToken]);

    return (
        <>
            <Outlet />
        </>
    );
}