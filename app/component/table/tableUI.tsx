import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Select } from "@headlessui/react";
import { useNavigate } from "@remix-run/react";
import {
    Cell,
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    OnChangeFn,
    Row,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { AlignRight, ChevronDown, ChevronsUpDownIcon } from "lucide-react";
import { ChangeEvent, FC, memo, ReactElement, useMemo, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { createPdf, QuotationData } from "~/routes/dashboard.quote";

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
    search?: (search: string) => void;
    onClickRow?: (cell: Cell<any, unknown>, row: Row<any>) => void;
    searchLabel?: string;
    EmptyText?: string;
    children?: React.ReactNode | React.ReactElement
    handleRow?: () => void

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
    handleRow

}) => {
    const [paginationPage, setPaginationPage] = useState(1);

    const memoizedData = useMemo(() => data, [data]);
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoisedHeaderComponent = useMemo(
        () => headerComponent,
        [headerComponent]
    );
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

    const { getHeaderGroups, getRowModel, getAllColumns, getColumn } = useReactTable({
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

    function handleEdit(row: QuotationData) {
        setData(row);
        navigate("/dashboard/quote");
    }


    return (
        <div className="mx-10">
            <div className="flex space-x-4 items-center align-middle">
                <Listbox value={type} onChange={setType}>
                    <div className="relative">
                        <ListboxButton className="flex items-center hover:bg-buttonHover px-2 border border-border py-2">
                            <div className="text-textPrimary mr-2">{getType(type)}</div>
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
            </div>
            <div>

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
                                            onClick={(e) => { cell.column.id === "edit" ? handleEdit(row.original) : createPdf(row.original); }}
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
            {noDataFound && (
                <div className="my-2 text-center">
                    {EmptyText}
                </div>
            )}
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