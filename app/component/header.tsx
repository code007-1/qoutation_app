
import { SunMoon } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import MainMenu from "./menu";
import { Link } from "@remix-run/react";

export default function Header() {
    const { toggleTheme, accessToken, headerText, theme } = useGlobalContext();

    return (
        <>
            <div className="bg-headerBackground">
                <div className="flex justify-between items-center align-middle mx-10 py-2">
                    <div className="w-1/3 text-xl text-textPrimary text-left">{headerText}</div>
                    <h1 className="w-1/3 text-2xl font-semibold text-textPrimary text-center">Unnamed</h1>

                    <div className="w-1/3 flex justify-end items-center">

                        <MainMenu />
                        <button
                            onClick={toggleTheme}
                            className="p-1 rounded-md border-none"
                        >
                            <SunMoon color={`${theme === "light" ? "black" : "white"}`} />
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
}