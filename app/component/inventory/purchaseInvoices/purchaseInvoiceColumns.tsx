import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Ellipsis, Pencil, Trash2 } from "lucide-react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { documentDeleteAPIURL, purchaseInvoice, purchaseInvoiceReadAPIURL } from "~/component/statics";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";
import { PurchaseInvoiceData, PurchaseInvoiceItem } from "~/routes/dashboard.inventory.purchaseinvoices.create";

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

export function usePurchaseInvoiceColumn() {
    const { permissions, setPurchaseInvoiceData, setOldPurchaseInvoiceData, setPurchaseInvoiceItems } = useGlobalContext();
    const navigate = useNavigate();
    const fetcher = useCentralFetcher();
    const { addNotifications } = useNotification();

    async function getPurchaseInvoices(no: string) {
        const response = await fetcher(`${purchaseInvoiceReadAPIURL}&no=${no}`);
        if (response.status === 200) {
            const data = await response.json()
            return data;
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
    }

    async function handleEdit(row: PurchaseInvoiceData) {
        const fullRow = await getPurchaseInvoices(row.no);
        console.log("eidint full row", row);
        if (fullRow && fullRow.length > 0) {
            setPurchaseInvoiceData(fullRow[0]);
            setPurchaseInvoiceItems(fullRow[0].items);
            navigate("/dashboard/inventory/purchaseinvoices/create", { state: { editing: true } });
        }
    }

    async function handleCopy(row: PurchaseInvoiceData) {
        const fullRow = await getPurchaseInvoices(row.no);
        if (fullRow && fullRow.length > 0) {
            setPurchaseInvoiceData(fullRow[0]);
            setPurchaseInvoiceItems(fullRow[0].items);
            navigate("/dashboard/inventory/purchaseinvoices/create", { state: { editing: false } });
        }
    }


    async function handleDelete(id: string) {
        const result = await fetcher(documentDeleteAPIURL, { method: "POST", body: JSON.stringify({ filter: id, type: purchaseInvoice }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldPurchaseInvoiceData((pre: any) => { return pre.filter((i: any) => !(i._id == id)) });
        }
    }

    const column: ColumnDef<any, any>[] = [
        {
            accessorKey: "no",
            header: "Invoice #",
            cell: (user: any) => {
                return <span>{user.row.original.no}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },
        {
            accessorKey: "vendor",
            header: "Vendor",
            cell: (user: any) => {
                return <span>{user.row.original.vendor}</span>
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
            },
        },
        {
            accessorKey: "amount",
            header: "Amount",
            cell: (user: any) => {
                return <span>{user.row.original.amount}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            }
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
                                            onClick={(e) => handleDelete(user.row.original._id)}>
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