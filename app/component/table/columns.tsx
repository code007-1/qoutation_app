import { ColumnDef } from "@tanstack/react-table";

export const Columns: ColumnDef<any, any>[] = [

    {
        accessorKey: "no",
        header: "Qoutation #",
        cell: (user: any) => {
            return <span>{user.row.original.no}</span>
        },
    },

    {
        accessorKey: "madeby",
        header: "Made By",
        cell: (user: any) => {
            return <span>{user.row.original.madeby}</span>
        },
    },

    {
        accessorKey: "date",
        header: "Date",
        cell: (user: any) => {
            return <span>{user.row.original.date}</span>
        },
    },

    {
        accessorKey: "to",
        header: "To",
        cell: (user: any) => {
            return <span>{user.row.original.to}</span>
        },
    },

    {
        accessorKey: "discount",
        header: "Discount",
        cell: (user: any) => {
            return <span>{user.row.original.discount} %</span>
        },
    },

    {
        accessorKey: "amount",
        header: "Amount",
        cell: (user: any) => {
            return <span>Rs.{user.row.original.amount}</span>
        },
    },
    // You can follow the structure to display other data such as country and status


];