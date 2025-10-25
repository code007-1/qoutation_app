import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, Ellipsis, Pencil, Trash2 } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import { ComplaintsData } from "~/routes/dashboard.complaints.create";
import { useCentralFetcher } from "../centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { compalints, complaintReadAPIURL } from "../statics";


export function useComplaintsColumn() {
    const { permissions, setComplaintsData, setOldComplaintsData } = useGlobalContext();
    const navigate = useNavigate();
    const fetcher = useCentralFetcher();
    const { addNotifications } = useNotification();

    async function getComplaints(no: string) {
        const response = await fetcher(`${complaintReadAPIURL}&no=${no}`);
        if (response.status === 200) {
            const data = await response.json()
            return data;
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
    }

    async function handleEdit(row: ComplaintsData) {
        const fullRow = await getComplaints(row.no);
        if (fullRow && fullRow.length > 0) {
            setComplaintsData(fullRow[0]);
            navigate("/dashboard/complaints/create", { state: { editing: true } });
        }
    }

    async function handleCopy(row: ComplaintsData) {
        const fullRow = await getComplaints(row.no);
        if (fullRow && fullRow.length > 0) {
            setComplaintsData(fullRow[0]);
            navigate("/dashboard/complaints/create", { state: { editing: false } });
        }
    }

    async function handleDelete(no: string) {
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ filter: { "no": no }, type: compalints }) });
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