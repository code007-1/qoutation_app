import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Ellipsis, MoveDown, MoveUp, Pencil, Trash2 } from "lucide-react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { challanReadAPIURL, challans, products } from "~/component/statics";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";
import { ProductsData } from "~/component/statics";
import { createPdf } from "~/routes/dashboard.quotations.create.full";

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

export default function useSerialsColumn() {
    const fetcher = useCentralFetcher();
    const { addNotifications } = useNotification();

    async function handleChallanClick(no: string) {
        const response = await fetcher(`${challanReadAPIURL}&no=${no}&full=true`);
        if (response.status === 200) {
            const data = await response.json()
            if (data && data.length > 0) {
                console.log(data);
                createPdf(data[0], fetcher, false, false, challans);
            }
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
    }

    const column: ColumnDef<any, any>[] = [
        {
            accessorKey: "sno",
            header: ({ column }) => sortButton(column, "ID"),
            sortingFn: (row1, row2) => row1.original.no - row2.original.no,
            enableSorting: true
        },
        {
            accessorKey: "productid",
            header: "Product ID",
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: (user: any) => {
                return <><p>{user.row.original.status === "swop" ? "Sold without purchasing" : user.row.original.status}</p></>;
            },
        },
        {
            accessorKey: "purchaseInvoiceNo",
            header: "Purchase Invoice No",
            cell: (user: any) => {
                return <><p className="underline cursor-pointer">{13}</p></>;
            },
        },
        {
            accessorKey: "purchaseDate",
            header: "Purchase Date",
        },
        {
            accessorKey: "challanNo",
            header: "challan No",
            cell: (user: any) => {
                return <><p className="underline cursor-pointer" onClick={e => handleChallanClick("1757050585112")}>{1323}</p></>;
            },

        },
        {
            accessorKey: "challanDate",
            header: "Challan Date",
        },
    ];
    return column;
}