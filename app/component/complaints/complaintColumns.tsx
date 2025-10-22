import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, Ellipsis, Pencil, Trash2 } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import { ComplaintsData } from "~/routes/dashboard.complaints.create";
import { useCentralFetcher } from "../centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { compalints } from "../statics";


export function useComplaintsColumn() {
    const { permissions, setComplaintsData, setOldComplaintsData, profile } = useGlobalContext();
    const navigate = useNavigate();
    const fetcher = useCentralFetcher();
    const { addNotifications } = useNotification();

    function handleEdit(row: ComplaintsData) {
        setComplaintsData(row);
        navigate("/dashboard/complaints/create", { state: { editing: true } });
    }

    function handleCopy(row: ComplaintsData) {
        setComplaintsData(row);
        navigate("/dashboard/complaints/create", { state: { editing: false } });
    }

    async function handleDelete(no: string) {
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ "no": no, "username": profile.username, type: compalints }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldComplaintsData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }

    const column: ColumnDef<any, any>[] = [
        {
            accessorKey: "no",
            header: "Complaint #",
            cell: (user: any) => {
                return <span>{user.row.original.no}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "recordedby",
            header: "Recorded By",
            cell: (user: any) => {
                return <span>{user.row.original.recordedby}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "date",
            header: "Date",
            cell: (user: any) => {
                return <span>{user.row.original.date}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            }
        },
        {
            accessorKey: "type",
            header: "Type",
            cell: (user: any) => {
                return <span>{user.row.original.type}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "complaint",
            header: "Complaint",
            cell: (user: any) => {
                return <span>{user.row.original.complaint}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: (user: any) => {
                return <span>{user.row.original.status}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "actions",
            header: () => <div className="text-center">Actions</div>,
            cell: (user: any) => {
                return <>
                    < Menu as="div" className="relative inline-block text-left text-sm text-textSecondary w-full" >
                        <div>
                            <MenuButton className="w-full flex items-center justify-center hover:bg-buttonHover px-2">
                                <Ellipsis className="text-textPrimary" />
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute right-8 z-10 mt-2 w-36 origin-top-right divide-y divide-border rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="flex flex-col gap-y-1 p-1 text-base">
                                <MenuItem>
                                    <div
                                        className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                        onClick={() => handleEdit(user.row.original)}
                                    >
                                        <div className="text-textSecondary mr-4"><Pencil size={20} /></div>
                                        <div className="text-textPrimary">Edit</div>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                        onClick={() => handleCopy(user.row.original)}>
                                        <div className="text-textSecondary mr-4"><Copy size={20} /></div>
                                        <div className="text-textPrimary">Copy</div>
                                    </div>
                                </MenuItem>
                                {permissions.includes("delete") &&
                                    <MenuItem>
                                        <div className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                            onClick={() => handleDelete(user.row.original.no)}>
                                            <div className="text-textSecondary mr-4"><Trash2 size={20} /></div>
                                            <div className="text-textPrimary">Delete</div>
                                        </div>
                                    </MenuItem>}
                            </div>
                        </MenuItems >
                    </Menu >
                </>
            }
        },
    ];
    return column;
}