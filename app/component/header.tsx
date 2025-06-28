import { SunMoon } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";

export default function Header() {
    const { toggleTheme, userName, accessToken } = useGlobalContext();

    return (
        <>
            <div className="flex justify-between items-center align-middle bg-slate-100 mx-10">
                <div className="w-1/3 text-black text-2xl">{userName?.toLocaleUpperCase()}</div>
                <h1 className="w-1/3 p-4 text-2xl font-semibold text-black text-center">Unnamed</h1>

                <div className="w-1/3 flex justify-end">
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-black rounded-md border-none"
                    >
                        <SunMoon className="text-textMain" color="white" />
                    </button>
                </div>
            </div >
        </>
    );
}
