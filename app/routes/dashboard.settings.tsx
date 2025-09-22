import Header from "~/component/menu/header";
import { Outlet } from "@remix-run/react";

export default function DashboardSettings() {

    return (
        <>
            <div className="min-h-screen w-screen bg-background">
                <Header />
                <div className="mx-10">
                    <Outlet />
                </div>
            </div>
        </>
    );
}