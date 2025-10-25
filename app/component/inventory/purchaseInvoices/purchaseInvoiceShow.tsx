import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { useCentralFetcher } from "~/component/centralFetcher";
import { useNotification } from "~/modules/notificationContext";
import { complaintReadAPIURL, purchaseInvoiceReadAPIURL } from "~/component/statics";
import TableUI from "~/component/tableUI";
import { usePurchaseInvoiceColumn } from "~/component/inventory/purchaseInvoices/purchaseInvoiceColumns";

export default function PurchaseInvoiceShow() {
    // Initiate your states
    const [loading, setLoading] = useState(false);
    const { addNotifications } = useNotification();
    const fetcher = useCentralFetcher();

    const { oldProductsData, productsDataCount, setProductsDataCount, setOldProductsData, oldPurchaseInvoiceData, setOldPurchaseInvoiceData } = useGlobalContext();

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
        //setHeaderText("Purchase Invoice");
        if (oldPurchaseInvoiceData.length === 0)
            getPurchaseInvoices();
    }, []);


    async function getPurchaseInvoices() {
        setLoading(true);
        const response = await fetcher(`${purchaseInvoiceReadAPIURL}`);
        if (response.status === 200) {
            const data = await response.json()
            console.log("jashdjkashd", data);
            setOldPurchaseInvoiceData(data);
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
        setLoading(false);
    }


    return (
        <>
            <div>
                <div>
                    <TableUI
                        data={oldPurchaseInvoiceData}
                        columns={usePurchaseInvoiceColumn()}
                        EmptyText="No Complaints Data Found!"
                        isFetching={loading}
                        refresh={getPurchaseInvoices}
                        filterTypes={{ "Invoice #": "no", "Vendor": "vendor", "Date": "date", "Quantity": "quantity" }}
                    />
                </div>
            </div>
        </>
    );
};