import { SunMoon } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";

export default function Header() {
    const { toggleTheme, accessToken } = useGlobalContext();


    return (
        <>
            <div className="flex justify-between items-center align-middle bg-black">
                <div className="w-1/2 flex justify-between items-center ">
                    <div className="text-white">a</div>
                    <div className="p-4 text-textMain">
                        <h1 className="text-2xl font-semibold text-white font-trade">Unnamed</h1>
                    </div>
                </div>


                <div className="flex space-x-2 mr-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-white rounded-md border-none"
                    >
                        <SunMoon className="text-textMain" />
                    </button>
                </div>
            </div >
        </>
    );
}
