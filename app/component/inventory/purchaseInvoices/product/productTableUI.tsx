import { useNavigate } from "@remix-run/react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { FC, memo, useEffect, useId, useMemo, useRef, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { Cell, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, Row, SortingState, useReactTable } from "@tanstack/react-table";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChallanData } from "~/routes/dashboard.challan.create";
import { Dialog } from "~/component/menu/about";

// Typescript interface
interface TableProps {
    data: any[];
    columns: ColumnDef<any>[];
    isFetching?: boolean;
    skeletonCount?: number;
    skeletonHeight?: number;
    headerComponent?: JSX.Element;
    pageCount?: number;
    page?: (page: number) => void;
    search: (query?: { sno: string }) => Promise<void>;
    onClickRow?: (cell: Cell<any, unknown>, row: Row<any>) => void;
    searchLabel?: string;
    EmptyText?: string;
    children?: React.ReactNode | React.ReactElement
    handleRow?: () => void,
    refresh: () => void,
    deleteChallan: (no: string) => void
}


// The main table 
const ProductTableUI: FC<TableProps> = ({
    data,
    columns,
    isFetching,
    skeletonCount = 10,
    skeletonHeight = 28,
    headerComponent,
    search,
    EmptyText,
    refresh,
    deleteChallan
}) => {

    const memoizedData = useMemo(() => data, [data]);
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoisedHeaderComponent = useMemo(() => headerComponent, [headerComponent]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);


    //const filterTypes = ["ID", "Name", "HSN Code", "Description", "Quantity"];
    const filterTypes = { "ID": "productid", "Name": "name", "HSN Code": "hsn", "Description": "description", "Quantity": "quantity" } as const;
    type FilterKey = keyof typeof filterTypes;
    const [filterType, setFilterType] = useState<FilterKey>(Object.keys(filterTypes)[0] as FilterKey);

    const getType = (type: FilterKey) => {
        switch (type) {
            case "ID": return "productid";
            case "Name": return "name";
            case "HSN Code": return "hsn";
            case "Description": return "description";
            case "Quantity": return "quantity";
            default: return "productid";
        }
    };

    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

    const { getHeaderGroups, getRowModel, getAllColumns, getColumn, getCanNextPage, getCanPreviousPage, getState, getPageCount, setPageSize, } = useReactTable({
        data: memoizedData,
        columns: memoizedColumns,
        getCoreRowModel: getCoreRowModel(),
        //manualPagination: true,
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        autoResetPageIndex: false,
        state: { sorting, columnFilters, pagination },
        meta: { handleEdit: handleEdit, handleCopy: handleCopy, deleteChallan: deleteChallan },
        //pageCount,
    });

    const skeletons = Array.from({ length: skeletonCount }, (x, i) => i);

    const columnCount = getAllColumns().length;

    const noDataFound =
        !isFetching && (!memoizedData || memoizedData.length === 0);

    const navigate = useNavigate();
    const { setChallanData, setChallanItems, profile } = useGlobalContext();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState({ sno: "" });

    // Function to initiate CSV download
    function downloadCSV(rows: Row<any>[]) {
        if (rows.length === 0) {
            alert('No data to export');
        } else {
            let csvData = "Challan No, Bill No, Order No, From, To, Date, Category, Type, Made By, Items and Serial Numbers\n";

            rows.map((item: any) => {
                csvData += item.original.no.toString() + "," + item.original.billno + ", " + item.original.orderno + "," + item.original.from +
                    "," + item.original.to + "," + item.original.date + "," + item.original.category + "," + item.original.type + "," + item.original.madeby + "," +
                    "\"" + item.original.items.map((singleItem: any) => { return singleItem.name + " - " + singleItem.sno?.join(" & ") }).join("\n") + "\"\n";
            })
            csvData.trimEnd();

            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', `challan-${new Date().toISOString().split("T")[0]}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    function handleEdit(row: ChallanData) {
        setChallanData(row);
        setChallanItems(row.items);
        navigate("/dashboard/challan/create", { state: { editing: true } });
    }

    function handleCopy(row: ChallanData) {
        setChallanData(row);
        setChallanItems(row.items);
        navigate("/dashboard/challan/create", { state: { editing: false } });
    }

    const _titleId = useId();
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    // Focus management: move focus to close button when opened
    useEffect(() => {
        if (open) {
            closeBtnRef.current?.focus();
        }
    }, [open]);

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} title="About imaGine">
                <div className="flex items-center justify-between p-4 bg-headerBackground">
                    <h2 id={_titleId} className="text-lg font-semibold text-textPrimary">
                        Advance Filter
                    </h2>
                    <button
                        ref={closeBtnRef}
                        onClick={() => { setOpen(false) }}
                        className="inline-flex h-9 w-9 items-center justify-center bg-button hover:bg-button/75"
                        aria-label="Close dialog"
                    >
                        <X className="h-6 w-6 text-buttonTextPrimary" />
                    </button>
                </div>
                <div className="mt-2 p-4 flex items-center text-textPrimary">
                    <div className="w-[15%] font-semibold">S. No.</div>
                    <input type="text" className="border border-border w-[85%] p-2 text-buttonTextPrimary" value={query.sno} onChange={(e) => { setQuery(pre => { return { ...pre, sno: e.target.value } }) }} />
                </div>
                <div className="flex justify-between gap-2 p-4">
                    <button
                        type="button"
                        onClick={() => { search(query); setOpen(false); }}
                        className="button px-4 py-1 mt-4 font-semibold"
                    >
                        Search
                    </button>
                    <button
                        onClick={() => { setOpen(false) }}
                        className="inline-flex font-semibold items-center gap-2 px-4 py-1 mt-4 text-buttonTextPrimary bg-button hover:bg-button/75"
                    >
                        {profile.username === "gunjan" ? "Okie" : "Close"}
                    </button>
                </div>
            </Dialog >
            <div className="">
                <div className="flex space-x-4 items-center align-middle">
                    <Listbox value={filterType} onChange={setFilterType}>
                        <div className="relative">
                            <ListboxButton className="flex items-center hover:bg-buttonHover px-2 border border-border py-2">
                                <div className="text-textSecondary mr-2">{filterType}</div>
                                <ChevronDown className="text-textPrimary" />
                            </ListboxButton>
                            <ListboxOptions
                                transition
                                className="absolute -right-34 z-10 mt-2 w-[136px] origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-1">
                                    {Object.keys(filterTypes).map((filterType) => {
                                        return (
                                            <ListboxOption
                                                key={filterType}
                                                value={filterType}
                                                className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                            >
                                                {filterType}
                                            </ListboxOption>
                                        );
                                    })}
                                </div>
                            </ListboxOptions>
                        </div>
                    </Listbox>
                    <input
                        placeholder="Filter....."
                        value={(getColumn(filterTypes[filterType])?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            getColumn(filterTypes[filterType])?.setFilterValue(event.target.value)
                        }
                        className="border p-2 w-[20%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                    />
                    <button
                        onClick={() => setOpen(true)}
                        className="button p-2"
                    >
                        Advance Filter
                    </button>
                    <button
                        onClick={() => { search() }}
                        className="button p-2"
                    >
                        Reset Advance Filter
                    </button>
                    <button
                        onClick={() => { refresh() }}
                        className="button p-2"
                    >
                        Refresh Data
                    </button>
                    <button
                        onClick={() => { downloadCSV(getRowModel().rows) }}
                        className="button p-2"
                    >
                        Export
                    </button>
                    <div className="flex-1">
                        <div className="w-full flex justify-end">
                            <button
                                onClick={() => { search() }}
                                className="button text-buttonTextPrimary p-2"
                            >
                                Load More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <table className="w-full">
                        <thead>
                            {/*!isFetching &&*/ getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id} className="bg-headerBackground">
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className="text-left text-textSecondary p-2" >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="p-2">
                            {!isFetching ? (
                                getRowModel()?.rows.map((row) => (
                                    <tr key={row.id} className="bg-header cursor-pointer hover:bg-buttonHover" tabIndex={0}>
                                        {row.getVisibleCells().map((cell) => (
                                            <td
                                                key={cell.id}
                                                className="text-textSecondary text-base text-left p-2"
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                )
                                )
                            ) : (
                                <>
                                    {skeletons.map((skeleton) => (
                                        <tr key={skeleton} className="">
                                            {Array.from({ length: columnCount }, (x, i) => i).map(
                                                (elm) => (
                                                    <td key={elm} className="">
                                                        <div className={`h-[${skeletonHeight}]`} />
                                                    </td>
                                                )
                                            )}
                                        </tr>
                                    ))}
                                </>
                            )}
                        </tbody>
                    </table>

                </div>
                <div className="flex items-center gap-2 text-textSecondary mt-4">
                    <button
                        className="border rounded p-1 border-border"
                        onClick={() => setPagination({ pageIndex: pagination.pageIndex - 1, pageSize: pagination.pageSize })}
                        disabled={!getCanPreviousPage()}
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        className="border rounded p-1 border-border"
                        onClick={(e) => setPagination({ pageIndex: pagination.pageIndex + 1, pageSize: pagination.pageSize })}
                        disabled={!getCanNextPage()}
                    >
                        <ChevronRight />
                    </button>
                    <span className="flex items-center gap-1">
                        <div>Page</div>
                        <strong>
                            {getState().pagination.pageIndex + 1} of{" "}
                            {getPageCount().toLocaleString()}
                        </strong>
                    </span>
                    <span className="flex items-center gap-1">
                        | Go to page:
                        <input
                            type="number"
                            min="1"
                            max={getPageCount()}
                            defaultValue={getState().pagination.pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                setPagination(pre => { return { ...pre, pageIndex: page } })
                            }}
                            className="border border-border bg-header p-1 w-16"
                        />
                    </span>
                    <select className="p-2 bg-header border border-border"
                        value={getState().pagination.pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                            setPagination({ pageIndex: pagination.pageIndex, pageSize: Number(e.target.value) });
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                {
                    noDataFound && (
                        <div className="my-2 text-center text-textSecondary">
                            {EmptyText}
                        </div>
                    )
                }
            </div >
        </>
    );
};


export default memo(ProductTableUI);