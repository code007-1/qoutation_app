import { useLocation } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { productReadAPIURL, productReadSingleAPIURL, ProductsData, serialNumberSearchAPIURL } from "~/component/statics";
import { useGlobalContext } from "~/modules/gcontext";
import { SerialsData } from "~/component/statics";
import { FormatAmountToINR } from "~/component/quotation/fullQuotationColumns";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
export default function ProductSummary() {
    const { setHeaderText, setGroupsData } = useGlobalContext();
    const location = useLocation();
    const product = location.state?.product as ProductsData;
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

    const dummyData: SerialsData[] = [{ no: "123", productId: 1, status: "available", purchaseDate: "2025-11-12", purchaseInvoiceNo: "12324" }, { no: "541", productId: 1, status: "sold", purchaseDate: "2025-11-12", purchaseInvoiceNo: "12324", challanDate: "2025-12-11", challanNo: "1232141" }, { no: "296", productId: 1, status: "invalid", purchaseDate: "2025-11-12", purchaseInvoiceNo: "12324", challanDate: "2025-12-11", challanNo: "1232141" }, { no: "789", productId: 1, status: "available", purchaseDate: "2025-11-12", purchaseInvoiceNo: "12324" }, { no: "123", productId: 1, status: "sold", purchaseDate: "2025-11-12", purchaseInvoiceNo: "12324", challanDate: "2025-12-11", challanNo: "1232141" }, { no: "123", productId: 1, status: "invalid", purchaseDate: "2025-11-12", purchaseInvoiceNo: "12324", challanDate: "2025-12-11", challanNo: "1232141" }];

    const filterTypes = { "Status": "status", "Serial No": "no" } as const;
    type FilterType = keyof typeof filterTypes;
    const [filterType, setFilterType] = useState<FilterType>("Status");
    const [query, setQuery] = useState("");

    const serialCard = (serial: SerialsData) => (
        <div className="bg-headerBackground rounded-lg p-4 min-w-[260px] max-w-xs mb-6 flex flex-col gap-2 transition-transform hover:scale-105">
            <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                    Serial No
                </span>
                <span className="text-lg font-semibold text-textPrimary">{serial.no}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${serial.status === "available"
                    ? "bg-green-100 text-green-700"
                    : serial.status === "sold"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                    {serial.status === "available"
                        ? "Available"
                        : serial.status === "sold"
                            ? "Sold"
                            : "invalid"}
                </span>
            </div>
            <div className="text-sm text-textSecondary flex flex-col gap-1 mt-2">
                <div>
                    <span className="font-medium">Purchase Invoice No:</span>{" "}
                    <span className="italic">{serial.purchaseInvoiceNo || "-"}</span>
                </div>
                <div>
                    <span className="font-medium">Purchase Date:</span>{" "}
                    <span className="italic">{serial.purchaseDate || "-"}</span>
                </div>
                <div>
                    <span className="font-medium">Challan No:</span>{" "}
                    <span className="italic">{serial.challanNo || "-"}</span>
                </div>
                <div>
                    <span className="font-medium">Challan Date:</span>{" "}
                    <span className="italic">{serial.challanDate || "-"}</span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="bg-background mt-6">
                {/* Product Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col items-start">
                        <span className="text-xs text-textSecondary uppercase tracking-wide">ID</span>
                        <span className="text-lg font-semibold text-textPrimary">{product?.no}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs text-textSecondary uppercase tracking-wide">Name</span>
                        <span className="text-lg font-semibold text-textPrimary">{product?.name}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs text-textSecondary uppercase tracking-wide">HSN</span>
                        <span className="text-lg font-semibold text-textPrimary">{product?.hsn}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs text-textSecondary uppercase tracking-wide">Group</span>
                        <span className="text-lg font-semibold text-textPrimary">{product?.group}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs text-textSecondary uppercase tracking-wide">Available</span>
                        <span className="text-lg font-semibold text-green-700">{product?.available}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs text-textSecondary uppercase tracking-wide">Sold</span>
                        <span className="text-lg font-semibold text-red-700">{product?.sold}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs text-textSecondary uppercase tracking-wide">Price</span>
                        <span className="text-lg font-semibold text-textPrimary">
                            {product?.price ? `Rs.${FormatAmountToINR(product.price)}` : "-"}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                    <div className="text-xs text-textSecondary uppercase tracking-wide mb-1">Description</div>
                    <div className="text-base text-textPrimary font-medium italic bg-headerBackground rounded p-3">
                        {product?.description || <span className="text-gray-400">No description provided.</span>}
                    </div>
                </div>

                {/* Serials */}
                <div>
                    <div className="flex items-center mb-4">
                        <span className="text-lg font-bold text-textPrimary mr-2">Serial Numbers</span>
                        <span className="bg-headerBackground text-textPrimary font-semibold px-2 py-1 rounded-full mr-8">
                            {dummyData?.length}
                        </span>
                        <div className="mr-4">
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

                        </div>
                        <input
                            placeholder="Filter....."
                            value={query}
                            onChange={e => setQuery(e.target.value.toLocaleLowerCase())}
                            className="inputHollow w-[20%]"
                        />
                    </div>
                    <div className="flex flex-wrap gap-6">
                        {(query !== "" ? dummyData.filter((e: SerialsData) => String(e[filterTypes[filterType] as keyof SerialsData]).toLocaleLowerCase().includes(query)) : dummyData)?.map(element => serialCard(element))}
                    </div>
                </div>
            </div></>
    );
}