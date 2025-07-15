import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Pencil } from "lucide-react";

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

export const Columns: ColumnDef<any, any>[] = [

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
            return <span>{user.row.original.to}</span>
        },
        filterFn: (row, columnId, filterValue) => {
            return row.original[columnId].toLowerCase().includes(filterValue);
        },
    },

    {
        accessorKey: "discount",
        header: "Discount",
        cell: (user: any) => {
            return <span>{user.row.original.discount} %</span>
        },
        filterFn: (row, columnId, filterValue) => {
            return row.original[columnId] == filterValue;
        },
    },

    {
        accessorKey: "amount",
        header: "Amount",
        cell: (user: any) => {
            return <span>Rs.{user.row.original.amount.toLocaleString('en-US')}</span>
        },
    },
    {
        accessorKey: "edit",
        header: "Edit",
        cell: (user: any) => {
            return <span><Pencil /></span>
        },
    },
    {
        accessorKey: "copy",
        header: "Copy",
        cell: (user: any) => {
            return <span><Copy /></span>
        },
    },
    // You can follow the structure to display other data such as country and status

];