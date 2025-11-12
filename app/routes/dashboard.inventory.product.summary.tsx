import { useLocation } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { productReadAPIURL, productReadSingleAPIURL, ProductsData, serialNumberSearchAPIURL } from "~/component/statics";
import { useGlobalContext } from "~/modules/gcontext";
import { SerialsData } from "~/component/statics";
export default function ProductSummary() {
    const { setHeaderText, setGroupsData } = useGlobalContext();
    const location = useLocation();
    const product = location.state?.product as ProductsData;
    const { productsData } = useGlobalContext();
    const fetcher = useCentralFetcher();

    const [productData, setProductData] = useState<ProductsData>();
    const [serialsData, setSerialsData] = useState<SerialsData[]>();

    async function fetchProductDetails(no: string) {
        const response1 = await fetcher(`${productReadSingleAPIURL}&no=${no}&full=true`);
        if (response1.status === 200) {
            const data = await response1.json();
            setProductData(data);
            console.log(data);
        }
        else {
            //addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
        const response2 = await fetcher(`${serialNumberSearchAPIURL}&productId=${no}&full=true`);
        if (response2.status === 200) {
            const data = await response2.json();
            setSerialsData(data);
            console.log(data);
        }
        else {
            //addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
    }

    useEffect(() => {
        setHeaderText("Product Summary");
        product && sessionStorage.setItem("productsummary", product.no.toString());
        const no = "1";//sessionStorage.getItem("productsummary");
        if (no) fetchProductDetails(no);
        console.log(productData, serialsData)
    }, []);

    const serialCard = () => <>
        <div className="bg-headerBackground">

        </div>
    </>;

    return (
        <>
            <div className="">
                <div className="mt-4 flex justify-between text-textPrimary">
                    <div>
                        <div>ID</div>
                        <div className="text-textSecondary">{product?.no}</div>
                    </div>
                    <div>
                        <div>Name</div>
                        <div className="text-textSecondary">{product?.name}</div>
                    </div>
                    <div>
                        <div>HSN</div>
                        <div className="text-textSecondary">{product?.hsn}</div>
                    </div>
                    <div>
                        <div>Group</div>
                        <div className="text-textSecondary">{product?.group}</div>
                    </div>
                    <div>
                        <div>Available</div>
                        <div className="text-textSecondary">{product?.availableQuantity}</div>
                    </div>

                    <div>
                        <div>Sold</div>
                        <div className="text-textSecondary">{product?.soldQuantity}</div>
                    </div>

                    <div>
                        <div>Price</div>
                        <div className="text-textSecondary">{product?.price}</div>
                    </div>
                </div>
                <div className="mt-4">
                    <div>Description</div>
                    <div className="text-textSecondary">{product?.description}</div>
                </div>
            </div>
        </>
    );
}