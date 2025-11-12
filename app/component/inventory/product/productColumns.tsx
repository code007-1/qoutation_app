import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Ellipsis, MoveDown, MoveUp, Pencil, Trash2, History } from "lucide-react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { products } from "~/component/statics";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";
import { ProductsData } from "~/component/statics";

export const sortButton = (column: any, name: string) => {

    return (
        <button
            className="flex"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {name}
            {column.getIsSorted() === "asc" ? <MoveUp className="ml-2 h-4 w-4" /> : column.getIsSorted() === "desc" ? <MoveDown className="ml-2 h-4 w-4" /> : <ArrowUpDown className="ml-2 h-4 w-4" />}
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
        navigate("/dashboard/inventory/products/create", { state: { editing: true } });
    }

    function handleCopy(row: ProductsData) {
        setProductsData(row);
        navigate("/dashboard/inventory/products/create", { state: { editing: false } });
    }


    async function handleDelete(productno: number) {
        const result = await fetcher("/api/delete", { method: "POST", body: JSON.stringify({ filter: { "no": productno }, type: products }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldProductsData((pre: any) => { return pre.filter(({ no }: { no: number }) => no != productno) });
        }
    }

    function handleSummary(row: ProductsData) {
        navigate("/dashboard/inventory/product/summary", { state: { product: row } });
    }

    const column: ColumnDef<any, any>[] = [
        {
            accessorKey: "no",
            header: ({ column }) => sortButton(column, "ID"),
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toString().toLowerCase().includes(filterValue);
            },
            sortingFn: (row1, row2) => row1.original.no - row2.original.no,
            enableSorting: true
        },
        {
            accessorKey: "name",
            header: "Name",
            cell: (user: any) => {
                return <><p className="text-nowrap overflow-hidden text-ellipsis max-w-[300px]">{user.row.original.name}</p></>;
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "hsn",
            header: "HSN",
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "description",
            header: "Description",
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
            cell: (user: any) => {
                return <div className="text-nowrap overflow-hidden text-ellipsis max-w-[400px]">{user.row.original.description}</div>
            },

        },
        {
            accessorKey: "group",
            header: "Group",
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "quantity",// change here
            header: "Available",
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toString().toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "quantity",// change here
            header: "Sold",
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toString().toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "price",
            header: "Price",
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId]?.toString().toLowerCase().includes(filterValue);
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
                                            onClick={() => handleDelete(user.row.original.no)}>
                                            <div className="text-textSecondary mr-4"><Trash2 size={20} /></div>
                                            <div className="text-textPrimary">Delete</div>
                                        </div>
                                    </MenuItem>}
                                <MenuItem>
                                    <div className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                        onClick={() => handleSummary(user.row.original)}>
                                        <div className="text-textSecondary mr-4"><History size={20} /></div>
                                        <div className="text-textPrimary">Summary</div>
                                    </div>
                                </MenuItem>
                            </div>
                        </MenuItems >
                    </Menu >
                </>
            }
        },
    ];
    return column;
}