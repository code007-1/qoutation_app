import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Ellipsis, Pencil, Trash2 } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";

export const sortButton = (column: any, name: string) => {
    return (
        <button
            className="-ml-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {name}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
    )
}

export function useComplaintsColumn() {
    const { permissions } = useGlobalContext();

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
                            <div className="flex flex-col gap-y-1 p-1">
                                <MenuItem>
                                    <div
                                        className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                        onClick={() => user.table.options.meta?.handleEdit?.(user.row.original)}
                                    >
                                        <div className="text-textSecondary mr-4"><Pencil /></div>
                                        <div className="text-textPrimary text-lg">Edit</div>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                        onClick={() => user.table.options.meta?.handleCopy?.(user.row.original)}>
                                        <div className="text-textSecondary mr-4"><Copy /></div>
                                        <div className="text-textPrimary text-lg">Copy</div>
                                    </div>
                                </MenuItem>
                                {permissions.includes("delete") &&
                                    <MenuItem>
                                        <div className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                            onClick={() => user.table.options.meta?.deleteComplaints?.(user.row.original.no)}>
                                            <div className="text-textSecondary mr-4"><Trash2 /></div>
                                            <div className="text-textPrimary text-lg">Delete</div>
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