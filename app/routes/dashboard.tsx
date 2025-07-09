import Header from "~/component/header";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { createQuotation, useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";
import { useCentralFetcher } from "~/component/centralFetcher";

export default function Dashboard() {
    const navigate = useNavigate();
    const { accessToken, setDataCount, dataCount, setItems } = useGlobalContext();
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    useEffect(() => {
        if (accessToken === undefined)
            navigate("/");
    }, [accessToken]);

    useEffect(() => {
        async function getQoutes() {
            const response = await fetcher(`/api/quotes?skip=${dataCount}`, {
                method: "GET",
            });
            if (response.status === 200) {
                const data = await response.json()
                setItems(data);
                setDataCount(dataCount + data.length)
            }
            else {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
        }
        getQoutes();
    }, [])

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