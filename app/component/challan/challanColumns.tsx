import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Pencil, Trash2 } from "lucide-react";
import { useGlobalContext } from "~/modules/gcontext";
import { ChallanItems } from "~/routes/dashboard.challan.create";

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

export function useChallanColumns() {
    const { permissions } = useGlobalContext();

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
                return <span>{user.row.original.items.map((item: ChallanItems) => { return item.sno?.join(", ") }).join(", ")}</span>
            },
            filterFn: (row, columnId, filterValue) => {
                return row.original["items"].filter((item: ChallanItems) => item.sno?.some(i => i.toLowerCase().includes(filterValue.toLowerCase()))).length > 0;
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
        // Conditionally add delete column
        ...(permissions.includes("delete") ? [{
            accessorKey: "delete",
            header: () => <div className="text-center">Delete</div>,
            cell: (user: any) => {
                return <center> <Trash2 /></center>
            },
        }] : []),
    ];
    return columns;
}