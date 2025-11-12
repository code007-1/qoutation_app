import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowBigDownDash, ArrowDownToLine, ArrowUpDown, Copy, Ellipsis, Pencil, Trash2 } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import { ChallanData, ChallanItems } from "../statics";
import { createPdf } from "~/routes/dashboard.quotations.create.full";
import { useCentralFetcher } from "../centralFetcher";
import { challanReadAPIURL, challans, documentDeleteAPIURL } from "../statics";
import { useNavigate } from "@remix-run/react";
import { useNotification } from "~/modules/notificationContext";

export function useChallanColumns() {
    const fetcher = useCentralFetcher();
    const navigate = useNavigate();
    const { setChallanData, setChallanItems, setOldChallanData, permissions } = useGlobalContext();
    const { addNotifications } = useNotification();

    async function handleDelete(no: string) {
        const result = await fetcher(documentDeleteAPIURL, { method: "POST", body: JSON.stringify({ filter: { "no": no }, type: challans }) });
        if (result.status !== 200) {
            addNotifications({
                title: "Error while deletion...",
                message: result.statusText || "",
            });
        }
        else {
            setOldChallanData((pre: any) => { return pre.filter((item: any) => item.no === no ? false : true) });
        }
    }


    async function getChallans(no: string) {
        const response = await fetcher(`${challanReadAPIURL}&no=${no}&full=true`);
        if (response.status === 200) {
            const data = await response.json()
            return data;
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
    }

    async function handleEdit(row: ChallanData) {
        const fullRow = await getChallans(row.no);
        if (fullRow && fullRow.length > 0) {
            setChallanData(fullRow[0]);
            setChallanItems(fullRow[0].items);
            navigate("/dashboard/challan/create", { state: { editing: true } });
        }
    }

    async function handleCopy(row: ChallanData) {
        const fullRow = await getChallans(row.no);
        if (fullRow && fullRow.length > 0) {
            setChallanData(fullRow[0]);
            setChallanItems(fullRow[0].items);
            navigate("/dashboard/challan/create", { state: { editing: false } });
        }
    }


    async function handleDownload(no: string) {
        const fullRow = await getChallans(no);
        if (fullRow && fullRow.length > 0) {
            createPdf(fullRow[0], fetcher, false, false, challans);
        }
    }

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
                    < Menu as="div" className="relative inline-block text-left text-sm text-textSecondary w-full cursor-pointer" >
                        <div>
                            <MenuButton className="w-full flex items-center justify-center hover:bg-buttonHover px-2">
                                <Ellipsis className="text-textPrimary" />
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute right-8 z-10 mt-2 w-48 origin-top-right divide-y divide-border rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
                                <MenuItem>
                                    <div
                                        className="flex px-6 py-1 data-[focus]:bg-buttonHover"
                                        onClick={(e) => handleDownload(user.row.original.no)}
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
        },
    ];
    return columns;
}