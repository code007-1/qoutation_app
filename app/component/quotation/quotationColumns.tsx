import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownToLine, ArrowUpDown, Copy, Ellipsis, Pencil, Trash2 } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import { createPdf, QuotationData } from "~/routes/dashboard.quotations.create";
import { useCentralFetcher } from "../centralFetcher";
import { quotationDeleteAPIURL, quotations } from "../statics";
import { useNotification } from "~/modules/notificationContext";

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

export function FormatAmountToINR(amount: number) {
    return Math.round(amount).toLocaleString("en-IN");
}

export function useQuotationsColumns() {
    const { permissions, setQuotationData, setQuotationItems, profile, selectedProfile, setOldQuotationData } = useGlobalContext();
    const navigate = useNavigate();
    const fetcher = useCentralFetcher();
    const { addNotifications } = useNotification();

    function handleEdit(row: QuotationData) {
        setQuotationData(row);
        setQuotationItems(row.items);
        navigate("/dashboard/quotations/create", { state: { editing: true } });
    }

    function handleCopy(row: QuotationData) {
        setQuotationData(row);
        setQuotationItems(row.items);
        navigate("/dashboard/quotations/create", { state: { editing: false } });
    }

    async function handleDelete(no: string) {
        const result = await fetcher(quotationDeleteAPIURL, { method: "POST", body: JSON.stringify({ filter: { "no": no }, type: quotations }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldQuotationData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }


    const columns: ColumnDef<any, any>[] = [
        {
            accessorKey: "no",
            header: "Qoutation #",
            cell: (user: any) => {
                return <span>{user.row.original.no}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
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
                return <span>{user.row.original.to} ({user.row.original.todealer ? "DL" : "C"})</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original[columnId].toLowerCase().includes(filterValue);
            },
        },

        {
            accessorKey: "discount",
            header: "Avg. Disc.",
            cell: (user: any) => {
                //const avg = user.row.original.items.reduce((acc: number, item: { discount?: number }) => acc + (item.discount ?? 0), 0) / (user.row.original.items.length || 1);
                //return <span>{avg.toFixed(2)} %</span>
                return <span>{user.row.original.avgdiscount} %</span>
            },
        },
        {
            accessorKey: "addon",
            header: "Avg. Addon",
            cell: (user: any) => {
                //const avg = user.row.original.items.reduce((acc: number, item: { addon?: number }) => acc + (item.addon ?? 0), 0) / (user.row.original.items.length || 1);
                //return <span>{avg.toFixed(2)} %</span>
                return <span>{user.row.original.avgaddon} %</span>
            },
        },

        {
            accessorKey: "amount",
            header: "Amount",
            cell: (user: any) => {
                if (!user.row.original.amount)
                    return "";
                return <span>Rs.{FormatAmountToINR(user.row.original.amount)}</span>
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
                            className="absolute right-8 z-10 mt-2 w-48 origin-top-right divide-y divide-border rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="flex flex-col gap-y-1 p-1 text-base cursor-pointer">
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
                                    <div
                                        className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                        onClick={(e) => createPdf(user.row.original, fetcher, profile.quotationInfo[selectedProfile].showCustomerList, false)}
                                    >
                                        <div className="text-textSecondary mr-4"><ArrowDownToLine size={20} /></div>
                                        <div className="text-textPrimary">Download</div>
                                    </div>
                                </MenuItem>
                            </div>
                        </MenuItems >
                    </Menu >
                </>
            }
        }];

    return columns;
}