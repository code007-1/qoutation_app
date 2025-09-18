import { useNavigate } from "@remix-run/react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { FC, memo, useEffect, useId, useMemo, useRef, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { createPdf, QuotationData } from "~/routes/dashboard.quotations.create";
import { useCentralFetcher } from "../centralFetcher";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { Dialog } from "../menu/about";

import { Cell, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, Row, SortingState, useReactTable } from "@tanstack/react-table";

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
    children?: React.ReactNode | React.ReactElement
    handleRow?: () => void,
    refresh: () => void,
    deleteQuotation: (no: string) => void
}


// The main table 
const QuotationsTableUI: FC<TableProps> = ({
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
    deleteQuotation
}) => {

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
        else type;
    }

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
    const { setQuotationData: setData, setQuotationItems: setItems, profile, selectedProfile } = useGlobalContext();
    const fetcher = useCentralFetcher();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState({ start: "", end: "", to: "" });

    function handleEdit(row: QuotationData) {
        setData(row);
        setItems(row.items);
        navigate("/dashboard/quotations/create", { state: { editing: true } });
    }

    function handleCopy(row: QuotationData) {
        setData(row);
        setItems(row.items);
        navigate("/dashboard/quotations/create", { state: { editing: false } });
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
                <div className="flex items-center space-x-2 p-4 w-full">
                    <div className="text-textPrimary font-semibold">Start Date</div>
                    <input type="date" className="p-2" onChange={(e) => { setQuery(pre => { return { ...pre, start: e.target.value } }) }} />
                    <div className="text-textPrimary font-semibold">End Date</div>
                    <input type="date" className="p-2" onChange={(e) => { setQuery(pre => { return { ...pre, end: e.target.value } }) }} />
                </div>

                <div className="flex justify-between gap-2 p-4">
                    <button
                        type="button"
                        onClick={() => { search(query); setOpen(false); }}
                        className="bg-button font-semibold text-buttonTextPrimary px-4 py-1 mt-4"
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

                    <Listbox value={type} onChange={setType}>
                        <div className="relative">
                            <ListboxButton className="flex items-center hover:bg-buttonHover px-2 border border-border py-2">
                                <div className="text-textSecondary mr-2">{getType(type)}</div>
                                <ChevronDown className="text-textPrimary" />
                            </ListboxButton>

                            <ListboxOptions
                                transition
                                className="absolute -right-34 z-10 mt-2 w-[136px] origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-1">
                                    {["no", "madeby", "date", "to"].map((item) => (
                                        <ListboxOption
                                            key={item}
                                            value={item}
                                            className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                        >
                                            {getType(item)}
                                        </ListboxOption>
                                    ))}
                                </div>
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
                    <div className="flex-1">
                        <div className="w-full flex justify-end">
                            <button
                                onClick={() => { search() }}
                                className="button p-2"
                            >
                                Load More
                            </button>
                        </div>
                    </div>
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
                                                    else if (cell.column.id === "delete") deleteQuotation(row.original.no)
                                                    else createPdf(row.original, fetcher, profile.quotationInfo[selectedProfile].showCustomerList, false);
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
                    {/*<div>
                    Showing {getRowModel().rows.length.toLocaleString()} of{" "}
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
        </>
    );
};


export default memo(QuotationsTableUI);