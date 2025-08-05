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

export const ChallanColumn: ColumnDef<any, any>[] = [
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
        accessorKey: "sno",
        header: "S. No.",
        cell: (user: any) => {
            return <span>{user.row.original.to}</span>
        },
        filterFn: (row, columnId, filterValue) => {
            return row.original[columnId].toLowerCase().includes(filterValue);
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