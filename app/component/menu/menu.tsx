import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@remix-run/react";
import { AlignRight, LogOut, NotepadText, RotateCcwKey, ScrollText, UserPen } from "lucide-react";
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { useGlobalContext } from "~/modules/gcontext";
import { logoutData } from "~/modules/utils";
import { useCentralFetcher } from "../centralFetcher";

export default function MainMenu() {
    const { profile, setAccessToken } = useGlobalContext();
    var text = "";
    if (profile.username) {
        text = profile.username?.slice(0, 1).toLocaleUpperCase() + profile.username?.slice(1);
        if (profile.username?.toLowerCase() === "gunjan") text = `Hi...${text} Ji...`;;
    }

    const logoutFetcher = useFetcher<logoutData>();
    const fetcher = useCentralFetcher();

    async function handleSubmit(event: any) {
        event.preventDefault();
        await fetcher("/api/logout")
            .then((result) => { result.status === 200 && setAccessToken(undefined) })
            .catch(error => console.log("error while logging out : ", error));
    }

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="flex mr-10 items-center hover:bg-buttonHover px-2">
                        <div className="text-textPrimary text-xl mr-2">{text}</div>
                        <AlignRight className="text-textPrimary" />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-10 z-10 mt-2 w-48 origin-top-right divide-y divide-border rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="p-1">
                        <MenuItem>
                            <Link
                                to="/dashboard/quotations/show"
                                className="flex px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <ScrollText size={20} className="mr-2" />
                                Quotation's Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/dashboard/challan/show"
                                className="flex px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <NotepadText size={20} className="mr-2" />
                                Challan's Home
                            </Link>
                        </MenuItem>
                    </div>

                    <div className="p-1">
                        <MenuItem>
                            <Link
                                to="/dashboard/settings/profile"
                                className="flex px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <UserPen size={20} className="mr-2" />
                                Profile Settings
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/dashboard/settings/password"
                                className="flex px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                            >
                                <RotateCcwKey size={20} className="mr-2" />
                                Update Password
                            </Link>
                        </MenuItem>
                        <form onSubmit={handleSubmit}>
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="flex w-full px-4 py-2 text-left text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                >
                                    <LogOut size={20} className="mr-2" />
                                    Log Out
                                </button>
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </Menu>
        </>);
}