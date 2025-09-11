import { Button, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@remix-run/react";
import { AlignRight, Info, LogOut, NotebookText, NotepadText, Power, RotateCcwKey, ScrollText, UserPen, X } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "../centralFetcher";
import { Dialog } from "./about";
import { useEffect, useId, useRef, useState } from "react";

export default function MainMenu() {
    const { profile, setAccessToken } = useGlobalContext();

    let text = "";
    if (profile.username) {
        text = profile.username?.slice(0, 1).toLocaleUpperCase() + profile.username?.slice(1);
        if (profile.username?.toLowerCase() === "gunjan") text = `Hi...${text} Ji...`;
    }

    const fetcher = useCentralFetcher();

    async function handleSubmit(event: any) {
        event.preventDefault();
        const result = await fetcher(`/api/logout`);
        if (result.status === 200) {
            setAccessToken(undefined);
            localStorage.removeItem("login");
        }
        else
            console.log("error while logging out : ", result);
    }

    const _titleId = useId();
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    // Focus management: move focus to close button when opened
    useEffect(() => {
        if (isOpen) {
            closeBtnRef.current?.focus();
        }
    }, [isOpen]);

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} title="About imaGine">
                <div className="flex items-center justify-between p-4 bg-headerBackground">
                    <h2 id={_titleId} className="text-lg font-semibold text-textPrimary">
                        About imaGine
                    </h2>
                    <button
                        ref={closeBtnRef}
                        onClick={() => { setIsOpen(false) }}
                        className="inline-flex h-9 w-9 items-center justify-center bg-button hover:bg-button/75"
                        aria-label="Close dialog"
                    >
                        <X className="h-6 w-6 text-buttonTextPrimary" />
                    </button>
                </div>
                <div className="p-4">
                    <table className="font-medium text-textSecondary">
                        <tr><td>Company : </td><td >Teen Telecommunication Pvt. Ltd.</td></tr>
                        <tr><td>Product Developer : </td><td >Saurav</td></tr>
                        <tr><td>Product Consultant : </td><td >Gunjan</td></tr>
                        <tr><td>Data Curator : </td><td >Gauri, Gunjan, Seema</td></tr>
                        <tr><td>Visionary and Stakeholder : </td><td >Mukesh Kalra</td></tr>
                        <tr><td>Version : </td><td >1.2.0</td></tr>
                    </table>
                </div>

                <div className="flex justify-between gap-2 p-4">
                    <Link to="/dashboard/changelog" className="inline-flex font-semibold items-center gap-2 px-4 py-2 text-buttonTextPrimary bg-button hover:bg-button/75">Change Logs</Link>
                    <button
                        onClick={() => { setIsOpen(false) }}
                        className="inline-flex font-semibold items-center gap-2 px-4 py-2 text-buttonTextPrimary bg-button hover:bg-button/75"
                    >
                        {profile.username === "gunjan" ? "Okie" : "Close"}
                    </button>
                </div>
            </Dialog >
            {/*isOpen && <About isOpen={isOpen} setIsOpen={setIsOpen} />*/}
            < Menu as="div" className="relative inline-block text-left text-sm text-textSecondary" >
                <div>
                    <MenuButton className="flex mr-10 items-center hover:bg-buttonHover px-2">
                        <div className="text-textPrimary text-xl mr-2">{text}</div>
                        <AlignRight className="text-textPrimary" />
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-10 z-10 mt-2 w-52 origin-top-right divide-y divide-border rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="p-1">
                        <MenuItem>
                            <Link
                                to="/dashboard/quotations/show"
                                className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <ScrollText size={20} className="mr-2 " />
                                Quotation Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/dashboard/challan/show"
                                className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <NotepadText size={20} className="mr-2" />
                                Challan Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/dashboard/complaints/show"
                                className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <NotebookText size={20} className="mr-2" />
                                Complaint Home
                            </Link>
                        </MenuItem>
                    </div>

                    <div className="p-1">
                        <MenuItem>
                            <Link
                                to="/dashboard/settings/profile"
                                className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <UserPen size={20} className="mr-2" />
                                Profile Settings
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/dashboard/settings/password"
                                className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <RotateCcwKey size={20} className="mr-2" />
                                Update Password
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <button
                                className="w-full flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                onClick={() => { setIsOpen(true); }}
                            >
                                <Info size={20} className="mr-2" />
                                About
                            </button>
                        </MenuItem>
                    </div>
                    <div className="p-1">
                        <form onSubmit={handleSubmit}>
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="flex w-full px-4 py-2 text-left text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                >
                                    <Power size={20} className="mr-2" />
                                    Log Out
                                </button>
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </Menu >
        </>);
}