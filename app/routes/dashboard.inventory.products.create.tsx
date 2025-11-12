import { useLocation } from "@remix-run/react";
import { ObjectId } from "mongodb";
import { useEffect } from "react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { productCreateAPIURL, productReadSingleAPIURL, products } from "~/component/statics";
import { initialProductData, useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";


export default function CreateProduct() {
    const { productsData, setProductsData, setHeaderText } = useGlobalContext();
    const fetcher = useCentralFetcher();
    const { addNotifications } = useNotification();

    async function getProductsID() {
        const response = await fetcher(`${productReadSingleAPIURL}&limit=1&sortString=no`);
        if (response.status === 200) {
            const product = await response.json();
            //return Number(product[0]?.no || 0) + 1;
            setProductsData(pre => { return { ...pre, no: Number(product[0]?.no || 0) + 1 } });
        }
        else {
            return Date.now();
        }
    }
    const location = useLocation();
    const passedData = location.state;

    useEffect(() => {
        setHeaderText("Add Products");
        // copying existing product
        if (passedData && passedData?.editing === false) {
            getProductsID();
        }
        // editing existing product
        else if (passedData && passedData?.editing === true) {
            return;
        }
        // new product
        else {
            getProductsID();
            setProductsData(initialProductData());
        }
    }, []);

    async function save() {
        const payload = { ...productsData, group: productsData.group || "Default" };

        const response = await fetcher(`${productCreateAPIURL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        setProductsData(pre => { return { ...pre, group: pre.group || "Default" } });

        if (response.status === 200) addNotifications({ title: "Success...", message: "Product updated successfully" });
        else addNotifications({ title: "Failure....", message: "Fail to update profile...try gain later..." });
    }

    return (
        <>
            <div className="grid grid-cols-6 gap-4 text-textPrimary mt-4">
                <div>
                    Product ID <div className="inputFilled w-full">{productsData.no}</div>
                </div>
                <div>
                    Product HSN Code <input type="text" name="hsncode" placeholder="Enter HSN Code" className="inputHollow w-full" value={productsData.hsn} onChange={(e) => {
                        setProductsData(pre => { return { ...pre, hsn: e.target.value } });
                    }} />
                </div>

                <div className="col-span-4">
                    Product Name <input type="text" name="productname" placeholder="Enter Product Name" className="inputHollow w-full" value={productsData.name} onChange={(e) => {
                        setProductsData(pre => { return { ...pre, name: e.target.value } });
                    }} />
                </div>
                <div>
                    Product Quantity <div className="inputFilled w-full border-0 ">{productsData.availableQuantity}</div>
                </div>
                <div>
                    Product Price <input type="text" name="productprice" placeholder="Enter Product Price" className="inputHollow w-full" value={productsData.price} onChange={(e) => {
                        setProductsData(pre => { return { ...pre, price: Number(e.target.value) || 0 } });
                    }} />
                </div>
                <div>
                    Product Group <textarea readOnly rows={3} name="productgroup" placeholder="Product Group" className="inputHollow w-full" value={productsData.group} onChange={(e) => {
                        setProductsData(pre => { return { ...pre, group: e.target.value } });
                    }} />
                </div>
                <div className="col-span-3">
                    Product Description <textarea rows={3} name="productdescrition" placeholder="Enter Product Description" className="inputHollow w-full" value={productsData.description} onChange={(e) => {
                        setProductsData(pre => { return { ...pre, description: e.target.value } });
                    }} />
                </div>
            </div>
            <div className="flex justify-center ">
                <button className="button px-4 py-1 mt-4 text-lg" onClick={save}>
                    Save
                </button>
            </div>
        </>
    );
}