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

export const complaintColumn: ColumnDef<any, any>[] = [
    {
        accessorKey: "no",
        header: "Complaint #",
        cell: (user: any) => {
            return <span>{user.row.original.no}</span>
        },
        filterFn: (row, columnId, filterValue) => {
            return row.original[columnId].toLowerCase().includes(filterValue);
        },
    },
    {
        accessorKey: "recordedby",
        header: "Recorded By",
        cell: (user: any) => {
            return <span>{user.row.original.recordedby}</span>
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
        accessorKey: "type",
        header: "Type",
        cell: (user: any) => {
            return <span>{user.row.original.type}</span>
        },
        filterFn: (row, columnId, filterValue) => {
            return row.original[columnId].toLowerCase().includes(filterValue);
        },
    },
    {
        accessorKey: "complaint",
        header: "Complaint",
        cell: (user: any) => {
            return <span>{user.row.original.complaint}</span>
        },
        filterFn: (row, columnId, filterValue) => {
            return row.original[columnId].toLowerCase().includes(filterValue);
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (user: any) => {
            return <span>{user.row.original.status}</span>
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