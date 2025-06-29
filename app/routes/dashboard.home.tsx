import React, { useEffect, useState } from "react";

// Import these components correctly depending on your structure

import { Columns } from "~/component/table/columns";

import { dummyQuotations } from "~/component/table/data";
import TableUI from "~/component/table/tableUI";

const StaffTable = () => {

    // Initiate your states
    const [items, setItems] = useState(dummyQuotations);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(1);

    // For pagination, define maximum of data per page

    const ITEMS_PER_PAGE = 10;

    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };


    // handle the search here

    const handleSearch = (query: string) => {

        if (query.trim() === "") {
            // Restore the original data when the search query is empty
            setItems(items);
        } else {
            const filteredData = items.filter((item: any) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.age.includes(query) ||
                item.job.includes(query)
            );
            setItems(filteredData || []);
        }
    };


    const DataLength = items.length;



    return (
        <section className="mt-5">

            <h3 className="text-[18px] mb-2 md:text-[24px] text-black">

            </h3>
            <div>
                <TableUI
                    data={items}
                    columns={Columns}
                    searchLabel="Search by Name or job title"
                    EmptyText="No staff found!"
                    isFetching={loading}
                    pageCount={totalPageCount}
                    page={handlePageChange}
                    search={handleSearch}
                />
            </div>
        </section>
    );
};

export default StaffTable;