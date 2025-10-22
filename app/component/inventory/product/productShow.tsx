import { useEffect, useState } from "react";
import { createInvetory, initialProductData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { complaintReadAPIURL, productReadAPIURL } from "~/component/statics";
import { useProductsColumn as useProductsColumn } from "~/component/inventory/product/productColumns";
import TableUI from "~/component/tableUI";

export default function ProductShow() {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { oldProductsData, setHeaderText, productsDataCount, setProductsDataCount, setOldProductsData, setProductsData } = useGlobalContext();

    async function getProducts() {
        setLoading(true);
        const response = await fetcher(`${productReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json()
            setOldProductsData(data);
            setProductsDataCount(data.length);
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
        setLoading(false);
    }

    async function handleAdvanceSearch(query?: { start: string, end: string, to: string }) {
        setLoading(true);
        let response;
        if (query) {
            response = await fetcher(`${complaintReadAPIURL}?start=${query.start}&end=${query.end}&to=${query.to}`);
            if (response.status === 200) {
                const data = await response.json();
                setOldProductsData(data);
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setProductsDataCount(0);
            setLoading(false);
        }
        else {
            setLoading(true);
            response = await fetcher(`${complaintReadAPIURL}?skip=${productsDataCount}`);
            if (response.status === 200) {
                const data = await response.json();
                if (productsDataCount == 0) {
                    setOldProductsData(data);
                    setProductsDataCount(data.length);
                }
                else {
                    setOldProductsData(pre => { return [...pre, ...data] });
                    setProductsDataCount(oldProductsData.length + data.length);
                }
            }
            else if (response.status != 200) {
                addNotifications({ title: "Failure...", message: "Fail to load data." });
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        setProductsData(initialProductData());
        setHeaderText(createInvetory);
        if (productsDataCount === 0)
            getProducts();
    }, []);


    return (
        <>
            <div>
                <TableUI
                    data={oldProductsData}
                    columns={useProductsColumn()}
                    EmptyText="No Complaints Data Found!"
                    isFetching={loading}
                    refresh={getProducts}
                    filterTypes={{ "ID": "productid", "Name": "name", "HSN Code": "hsn", "Description": "description", "Quantity": "quantity" }}
                />
            </div>
        </>
    );
};