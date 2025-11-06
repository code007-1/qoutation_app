import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { FC, memo, useMemo, useState } from "react";
import { Cell, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, Row, SortingState, useReactTable } from "@tanstack/react-table";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

// Typescript interface
interface TableProps {
    // table data and columns
    data: any[];
    columns: ColumnDef<any>[];

    // states
    isFetching?: boolean;
    skeletonCount?: number;
    skeletonHeight?: number;
    headerComponent?: JSX.Element;

    // pagination
    pageCount?: number;
    page?: (page: number) => void;

    // filters and search
    filterTypes: {}
    advanceSearch?: (query?: {}) => Promise<void>;
    advanceSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    refresh: () => void,

    EmptyText?: string;

    // custom actions
    handleRow?: () => void,
    exportCSV?: (rows: Row<any>[]) => void
    onClickRow?: (cell: Cell<any, unknown>, row: Row<any>) => void;
    deleteRowData?: (no: string) => void
}


// The main table 
const TableUI: FC<TableProps> = ({
    data,
    columns,
    isFetching,
    skeletonCount = 10,
    skeletonHeight = 28,
    headerComponent,
    advanceSearch,
    EmptyText,
    refresh,
    deleteRowData,
    filterTypes,
    exportCSV,
    advanceSearchOpen
}) => {

    const memoizedData = useMemo(() => data, [data]);
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoisedHeaderComponent = useMemo(() => headerComponent, [headerComponent]);

    // for sorting and column filtering - not bieng used currently
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    // for filtering and serching
    type FilterKey = keyof typeof filterTypes;
    const [filterType, setFilterType] = useState<FilterKey>(Object.keys(filterTypes)[0] as FilterKey);

    // for pagination
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
        autoResetPageIndex: true,
        state: { sorting, columnFilters, pagination },
        //meta: { handleEdit: handleEdit, handleCopy: handleCopy, deleteChallan: deleteRowData },
    });

    const skeletons = Array.from({ length: skeletonCount }, (x, i) => i);

    const columnCount = getAllColumns().length;

    const noDataFound =
        !isFetching && (!memoizedData || memoizedData.length === 0);

    return (
        <>
            <div className="">
                <div className="flex space-x-4 items-center align-middle">
                    <Listbox value={filterType} onChange={setFilterType}>
                        <div className="relative">
                            <ListboxButton className="flex items-center hover:bg-buttonHover inputHollow">
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
                        className="inputHollow w-[20%]"
                    />
                    {(advanceSearchOpen && advanceSearch) && <>
                        <button
                            onClick={() => advanceSearchOpen(true)}
                            className="button p-2"
                        >
                            Advance Filter
                        </button>
                        <button
                            onClick={() => { advanceSearch() }}
                            className="button p-2"
                        >
                            Reset Advance Filter
                        </button>
                    </>
                    }
                    <button
                        onClick={() => { refresh() }}
                        className="button p-2"
                    >
                        Refresh Data
                    </button>
                    {exportCSV && <button
                        onClick={() => { exportCSV(getRowModel().rows) }}
                        className="button p-2"
                    >
                        Export
                    </button>}
                    {advanceSearch && <div className="flex-1">
                        <div className="w-full flex justify-end">
                            <button
                                onClick={() => { advanceSearch() }}
                                className="button text-buttonTextPrimary p-2"
                            >
                                Load More
                            </button>
                        </div>
                    </div>}
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
                                    <tr key={row.id} className="bg-header hover:bg-buttonHover" tabIndex={0}>
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
                            min={1}
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


export default memo(TableUI);