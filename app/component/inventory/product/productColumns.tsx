import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Ellipsis, Pencil, Trash2 } from "lucide-react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { products } from "~/component/statics";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";
import { ProductsData } from "~/routes/dashboard.inventory.create";

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

export function useProductsColumn() {
    const { permissions, setProductsData, setOldProductsData } = useGlobalContext();
    const navigate = useNavigate();
    const fetcher = useCentralFetcher();
    const { addNotifications } = useNotification();

    function handleEdit(row: ProductsData) {
        setProductsData(row);
        navigate("/dashboard/products/create", { state: { editing: true } });
    }

    function handleCopy(row: ProductsData) {
        setProductsData(row);
        navigate("/dashboard/products/create", { state: { editing: false } });
    }


    async function handleDelete(productid: string) {
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ "productid": productid, type: products }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldProductsData((pre: any) => { return pre.filter((id: string) => id === productid ? false : true) });
        }
    }

    const column: ColumnDef<any, any>[] = [
        {
            accessorKey: "productid",
            header: "ID",
            cell: (user: any) => {
                return <span>{user.row.original.productid}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "name",
            header: "Name",
            cell: (user: any) => {
                return <span>{user.row.original.name}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "hsn",
            header: "HSN Code",
            cell: (user: any) => {
                return <span>{user.row.original.hsn}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "description",
            header: "Description",
            cell: (user: any) => {
                return <span>{user.row.original.description}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            }
        },
        {
            accessorKey: "group",
            header: "Group",
            cell: (user: any) => {
                return <span>{user.row.original.complaint}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "stock",
            header: "Current Stock",
            cell: (user: any) => {
                return <span>{user.row.original.stock}</span>
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
                            <div className="flex flex-col gap-y-1 p-1 cursor-pointer text-base">
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
                                            onClick={() => handleDelete(user.row.original.productid)}>
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