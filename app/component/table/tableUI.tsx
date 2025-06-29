import {
    Cell,
    ColumnDef,
    flexRender,
    getCoreRowModel,
    Row,
    useReactTable,
} from "@tanstack/react-table";
import { ChangeEvent, FC, memo, ReactElement, useMemo, useState } from "react";

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

    const { getHeaderGroups, getRowModel, getAllColumns } = useReactTable({
        data: memoizedData,
        columns: memoizedColumns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount,
    });

    const skeletons = Array.from({ length: skeletonCount }, (x, i) => i);

    const columnCount = getAllColumns().length;

    const noDataFound =
        !isFetching && (!memoizedData || memoizedData.length === 0);

    const handleSearchChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        search && search(e.target.value);
    };

    const handlePageChange = (
        event: ChangeEvent<unknown>,
        currentPage: number
    ) => {
        setPaginationPage(currentPage === 0 ? 1 : currentPage);
        page?.(currentPage === 0 ? 1 : currentPage);
    };


    return (
        <div className="mx-10">
            <div className="p-4">
                {memoisedHeaderComponent && <div>{memoisedHeaderComponent}</div>}
                {search && (
                    <input
                        onChange={handleSearchChange}
                        placeholder={searchLabel}

                    />
                )}
            </div>
            <div className="">
                <table className="w-full">
                    {!isFetching && getHeaderGroups().map((headerGroup) => (
                        <thead>
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
                        </thead>
                    )
                    )}
                    <tbody className="p-2">
                        {!isFetching ? (
                            getRowModel()?.rows.map((row) => (
                                <tr key={row.id} onClick={handleRow} className="bg-header cursor-pointer hover:bg-buttonHover">
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            onClick={() => onClickRow?.(cell, row)}
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