import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";

export default function Dashboard() {
    const { accessToken } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (accessToken === undefined) {
            if (!login || login === "n")
                navigate("/");
        }
        else
            localStorage.setItem("login", "y");
    }, [accessToken]);

    return (
        <>
            <Outlet />
        </>
    );
}