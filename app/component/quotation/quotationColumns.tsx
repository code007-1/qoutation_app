import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Pencil, Trash2 } from "lucide-react";

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

export const QuotationsColumns: ColumnDef<any, any>[] = [

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
            const avg = user.row.original.items.reduce((acc: number, item: { discount?: number }) => acc + (item.discount ?? 0), 0) / (user.row.original.items.length || 1);
            return <span>{avg.toFixed(2)} %</span>
        },
        filterFn: (row, columnId, filterValue) => {
            return row.original[columnId] == filterValue;
        },
    },
    {
        accessorKey: "addon",
        header: "Avg. Addon",
        cell: (user: any) => {
            const avg = user.row.original.items.reduce((acc: number, item: { addon?: number }) => acc + (item.addon ?? 0), 0) / (user.row.original.items.length || 1);
            return <span>{avg.toFixed(2)} %</span>
        },
        filterFn: (row, columnId, filterValue) => {
            return row.original[columnId] == filterValue;
        },
    },

    {
        accessorKey: "amount",
        header: "Amount",
        cell: (user: any) => {
            //console.log("asd", user.row.original.amount, user.row.original.to);
            if (!user.row.original.amount)
                return "";
            return <span>Rs.{user.row.original.amount.toLocaleString("en-US")}</span>
        },
    },
    {
        accessorKey: "edit",
        header: () => <div className="text-center">Edit</div>,
        cell: (user: any) => {
            return <center><Pencil /></center>
        },
    },
    {
        accessorKey: "copy",
        header: () => <div className="text-center">Copy</div>,
        cell: (user: any) => {
            return <center><Copy /></center>
        },
    },
    {
        accessorKey: "delete",
        header: () => <div className="text-center">Delete</div>,
        cell: (user: any) => {
            return <center> <Trash2 /></center>
        },
    },
];