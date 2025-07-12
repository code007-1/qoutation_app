import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import { Cell, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, OnChangeFn, Row, SortingState, useReactTable } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { ChangeEvent, FC, memo, useMemo, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { createPdf, QuotationData } from "~/routes/dashboard.quote";
import { useCentralFetcher } from "../centralFetcher";
import { useNotification } from "~/modules/notificationContext";

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
    search: (query?: { start: string, end: string, to: string }) => Promise<void>;
    onClickRow?: (cell: Cell<any, unknown>, row: Row<any>) => void;
    searchLabel?: string;
    EmptyText?: string;
    children?: React.ReactNode | React.ReactElement;
    handleRow?: () => void;

}


// The main table 

const TableUI: FC<TableProps> = ({
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

}) => {
    const [paginationPage, setPaginationPage] = useState(1);

    const memoizedData = useMemo(() => data, [data]);
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoisedHeaderComponent = useMemo(() => headerComponent, [headerComponent]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [type, setType] = useState<string>("no");
    function getType(type: string) {
        if (type === "no") return "Quotation #";
        else if (type === "madeby") return "Made By";
        else if (type === "date") return "Date";
        else if (type === "to") return "To";
        else if (type === "discount") return "Discount";
        else if (type === "amount") return "Amount";
        else type;
    }

    const { getHeaderGroups, getRowModel, getAllColumns, getColumn, firstPage, getCanPreviousPage, lastPage, previousPage, nextPage, getState, getPageCount, getCanNextPage, setPageIndex, setPageSize } = useReactTable({
        data: memoizedData,
        columns: memoizedColumns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: { sorting, columnFilters },
        pageCount,
    });

    const skeletons = Array.from({ length: skeletonCount }, (x, i) => i);

    const columnCount = getAllColumns().length;

    const noDataFound =
        !isFetching && (!memoizedData || memoizedData.length === 0);

    const handlePageChange = (
        event: ChangeEvent<unknown>,
        currentPage: number
    ) => {
        setPaginationPage(currentPage === 0 ? 1 : currentPage);
        page?.(currentPage === 0 ? 1 : currentPage);
    };

    const navigate = useNavigate();
    const { setData } = useGlobalContext();
    const fetcher = useCentralFetcher();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState({ start: "", end: "", to: "" });

    function handleEdit(row: QuotationData) {
        setData(row);
        navigate("/dashboard/quote");
    }


    return (
        <div className="">
            <div className="flex justify-between">
                <div className="flex space-x-4 items-center align-middle">
                    <Listbox value={type} onChange={setType}>
                        <div className="relative">
                            <ListboxButton className="flex items-center hover:bg-buttonHover px-2 border border-border py-2">
                                <div className="text-textSecondary mr-2">{getType(type)}</div>
                                <ChevronDown className="text-textPrimary" />
                            </ListboxButton>

                            <ListboxOptions
                                transition
                                className="absolute -right-34 z-10 mt-2 w-56 origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <ListboxOption
                                    key={"no"}
                                    value={"no"}
                                    className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                >
                                    Quotation #
                                </ListboxOption>
                                <ListboxOption
                                    key={"madeby"}
                                    value={"madeby"}
                                    className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                >
                                    Made By
                                </ListboxOption>
                                <ListboxOption
                                    key={"date"}
                                    value={"date"}
                                    className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                >
                                    Date
                                </ListboxOption>
                                <ListboxOption
                                    key={"to"}
                                    value={"to"}
                                    className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                >
                                    To
                                </ListboxOption>
                                <ListboxOption
                                    key={"discount"}
                                    value={"discount"}
                                    className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                >
                                    Discount
                                </ListboxOption>
                            </ListboxOptions>
                        </div>
                    </Listbox>
                    <input
                        placeholder="Filter....."
                        value={(getColumn(type)?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            getColumn(type)?.setFilterValue(event.target.value)
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
                        onClick={(e) => { search() }}
                        className="bg-button text-buttonTextPrimary p-2"
                    >
                        Reset Advance Filter
                    </button>
                </div>
                <div>
                    <button
                        onClick={(e) => { search() }}
                        className="bg-button text-buttonTextPrimary p-2"
                    >
                        Load More
                    </button>
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
                                    <div className="grid grid-cols-2">
                                        <div>Start Date</div>
                                        <input type="date" onChange={(e) => setQuery(pre => { return { ...pre, start: e.target.value } })} />
                                        <div >End Date</div>
                                        <input type="date" onChange={(e) => setQuery(pre => { return { ...pre, end: e.target.value } })} />
                                        <div>To</div>
                                        <input type="text" onChange={(e) => setQuery(pre => { return { ...pre, to: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpen(false);
                                            search(query);
                                        }}
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Search
                                    </button>
                                    <button
                                        type="button"
                                        data-autofocus
                                        onClick={() => setOpen(false)}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
                        {!isFetching && getHeaderGroups().map((headerGroup) => (
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
                                <tr key={row.id} className="bg-header cursor-pointer hover:bg-buttonHover">
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            onClick={(e) => { cell.column.id === "edit" ? handleEdit(row.original) : createPdf(row.original, fetcher); }}
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
                            ))
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
            {noDataFound && (
                <div className="my-2 text-center text-textSecondary">
                    {EmptyText}
                </div>
            )}
            <div className="h-2" />
            <div className="flex items-center gap-2">
                <button
                    className="border rounded p-1"
                    onClick={() => firstPage()}
                    disabled={!getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => previousPage()}
                    disabled={!getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => nextPage()}
                    disabled={!getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => lastPage()}
                    disabled={!getCanNextPage()}
                >
                    {'>>'}
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
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            setPageIndex(page)
                        }}
                        className="border p-1 rounded w-16"
                    />
                </span>
                <select
                    value={getState().pagination.pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[2, 4, 6, 8, 10].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            {/*pageCount && page && (
                <div
                    count={pageCount}
                    page={paginationPage}
                    onChange={handlePageChange}
                    color="primary"
                    showFirstButton
                    showLastButton
                />
            )*/}
        </div>
    );
};


export default memo(TableUI);