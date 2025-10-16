import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Ellipsis, Pencil, Trash2 } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import { ChallanItems } from "~/routes/dashboard.challan.create";

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

export function useChallanColumns() {
    const { permissions } = useGlobalContext();

    const columns: ColumnDef<any, any>[] = [
        {
            accessorKey: "no",
            header: "Challan #",
            cell: (user: any) => {
                return <span>{user.row.original.no}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "billno",
            header: "Bill #",
            cell: (user: any) => {
                return <span>{user.row.original?.billno ?? ""}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().filter((item: ChallanItems) => item.sno?.some(i => i.toLowerCase().includes(filterValue.toLowerCase()))).length > 0;
            },
        },
        {
            accessorKey: "madeby",
            header: "Made By",
            cell: (user: any) => {
                return <span>{user.row.original.madeby}</span>
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
            accessorKey: "to",
            header: "To",
            cell: (user: any) => {
                return <span>{user.row.original.to}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "category",
            header: "Category",
            cell: (user: any) => {
                return <span>{user.row.original.category}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "sno",
            header: "S. No.",
            cell: (user: any) => {
                return <span>{user.row.original?.items?.map((item: ChallanItems) => { return item.sno?.join(", ") }).join(", ")}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original["items"].filter((item: ChallanItems) => item.sno?.some(i => i.toLowerCase().includes(filterValue.toLowerCase()))).length > 0;
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
                                            onClick={() => user.table.options.meta?.deleteChallan?.(user.row.original.no)}>
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
    return columns;
}