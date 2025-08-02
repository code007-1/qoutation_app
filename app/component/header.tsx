import packageJson from '../../package.json';
import { SunMoon } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import MainMenu from "./menu";
import { Link } from "@remix-run/react";

export default function Header() {
    const { toggleTheme, headerText, theme, appName, homeLink } = useGlobalContext();

    return (
        <>
            <div className="bg-headerBackground">
                <div className="flex justify-between items-center align-middle mx-10 py-2">
                    <div className="w-1/3 text-xl text-textPrimary text-left">{headerText}</div>
                    <div className="w-1/3 text-2xl font-semibold text-textPrimary text-center">{appName}</div>

                    <div className="w-1/3 flex justify-end items-center">
                        {/*<Link to={homeLink} className="text-xl text-textPrimary mr-10 px-2 hover:bg-buttonHover">Home</Link>*/}
                        <MainMenu />
                        <button
                            onClick={toggleTheme}
                            className="py-1 px-2 border-none hover:bg-buttonHover"
                        >
                            <SunMoon color={`${theme === "light" ? "black" : "white"}`} />
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
}