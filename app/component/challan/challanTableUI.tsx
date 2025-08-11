import { useNavigate } from "@remix-run/react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { FC, memo, useMemo, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { createPdf } from "~/routes/dashboard.quotations.create";
import { useCentralFetcher } from "../centralFetcher";
import { Cell, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, Row, SortingState, useReactTable } from "@tanstack/react-table";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { ChallanData } from "~/routes/dashboard.challan.create";

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
const ChallanTableUI: FC<TableProps> = ({
    data,
    columns,
    isFetching,
    skeletonCount = 10,
    skeletonHeight = 28,
    headerComponent,
    pageCount,
    search,
    onClickRow,
    page,
    searchLabel = "Search",
    EmptyText,
    children,
    handleRow,
    refresh,
    deleteChallan
}) => {

    const memoizedData = useMemo(() => data, [data]);
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoisedHeaderComponent = useMemo(() => headerComponent, [headerComponent]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [filterType, setFilterType] = useState<string>("Challan #");

    const filterTypes = ["Challan #", "Made By", "Date", "To", "S.No."];

    const getType = (type: string) => {
        switch (type) {
            case "Challan #": return "no";
            case "Made By": return "madeby";
            case "Date": return "date";
            case "To": return "to";
            case "S.No.": return "sno";
            default: return "no";
        }
    };

    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

    const { getHeaderGroups, getRowModel, getAllColumns, getColumn, firstPage, getCanNextPage, getCanPreviousPage, getState, getPageCount, setPageIndex, setPageSize, lastPage, nextPage, previousPage, getRowCount } = useReactTable({
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
        state: {
            sorting, columnFilters, pagination
        },
        //pageCount,
    });

    const skeletons = Array.from({ length: skeletonCount }, (x, i) => i);

    const columnCount = getAllColumns().length;

    const noDataFound =
        !isFetching && (!memoizedData || memoizedData.length === 0);

    const navigate = useNavigate();
    const { setChallanData, setChallanItems, profile } = useGlobalContext();
    const fetcher = useCentralFetcher();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState({ sno: "" });

    function handleEdit(row: ChallanData) {
        setChallanData(row);
        setChallanItems(row.items);
        navigate("/dashboard/challan/create", { state: { editing: true } });
    }

    function handleCopy(row: ChallanData) {
        setChallanData(row);
        setChallanItems(row.items);
        navigate("/dashboard/challan/create");
    }

    return (
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
                                {filterTypes.map((filterType) => {
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
                    value={(getColumn(getType(filterType))?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        getColumn(getType(filterType))?.setFilterValue(event.target.value)
                    }
                    className="border p-2 w-[20%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                />
                <button
                    onClick={() => setOpen(true)}
                    className="bg-button text-buttonTextPrimary p-2"
                >
                    Advance Filter
                </button>
                <button
                    onClick={() => { search() }}
                    className="bg-button text-buttonTextPrimary p-2"
                >
                    Reset Advance Filter
                </button>
                <button
                    onClick={() => { refresh() }}
                    className="bg-button text-buttonTextPrimary p-2"
                >
                    Refresh Data
                </button>
                <div className="flex-1">
                    <div className="w-full flex justify-end">
                        <button
                            onClick={() => { search() }}
                            className=" bg-button text-buttonTextPrimary p-2"
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <Dialog open={open} onClose={setOpen} className="relative z-10">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                            >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            Advance Filter
                                        </DialogTitle>
                                    </div>
                                    <div className="mt-2 flex items-center">
                                        <div className="w-[15%]">S. No.</div>
                                        <input type="text" className="border border-border w-[85%] p-2" onChange={(e) => { setQuery(pre => { return { ...pre, sno: e.target.value } }) }} />
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={() => { search(query); setOpen(false); }}
                                        className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg"
                                    >
                                        Search
                                    </button>
                                    <button
                                        type="button"
                                        data-autofocus
                                        onClick={() => setOpen(false)}
                                        className="bg-button text-buttonTextPrimary px-4 py-1 mt-4 text-lg"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </div>
            <div className="p-4">
                {memoisedHeaderComponent && <div>{memoisedHeaderComponent}</div>}
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
                                            onClick={(e) => {
                                                if (cell.column.id === "edit") handleEdit(row.original)
                                                else if (cell.column.id === "copy") handleCopy(row.original)
                                                else if (cell.column.id === "delete") deleteChallan(row.original.no)
                                                else createPdf(row.original, fetcher, false, false, "challan");
                                            }}
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
                        {getState().pagination.pageIndex + 1} of{' '}
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
                {/*<div>
                    Showing {getRowModel().rows.length.toLocaleString()} of{' '}
                    {getRowCount().toLocaleString()} Rows
                </div>*/}
            </div>

            {
                noDataFound && (
                    <div className="my-2 text-center text-textSecondary">
                        {EmptyText}
                    </div>
                )
            }
        </div >
    );
};


export default memo(ChallanTableUI);