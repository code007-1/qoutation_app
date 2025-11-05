import { useEffect, useState } from "react";
import { initialProductData, useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { productReadAPIURL } from "~/component/statics";
import { useProductsColumn as useProductsColumn } from "~/component/inventory/product/productColumns";
import TableUI from "~/component/tableUI";

export default function ProductShow() {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { oldProductsData, productsDataCount, setProductsDataCount, setOldProductsData, setProductsData } = useGlobalContext();

    async function getProducts() {
        setLoading(true);
        const response = await fetcher(`${productReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json();
            setOldProductsData(data);
            setProductsDataCount(data.length);
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
        setLoading(false);
    }

    useEffect(() => {
        setProductsData(initialProductData());
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
                    filterTypes={{ "ID": "no", "Name": "name", "HSN Code": "hsn", "Description": "description", "Quantity": "quantity", "Price": "price" }}
                />
            </div>
        </>
    );
};