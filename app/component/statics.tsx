import { ObjectId } from "mongodb";

// types
export const quotations = "quotations";
export const shortQuotations = "shortquotations";
export const challans = "challans";
export const products = "products";
export const purchaseInvoice = "purchaseinvoices";
export const compalints = "complaints";
export const logs = "logs";
export const quotes = "quotes";
export const serials = "serials"

// api endpoints
export const shortQuotationCreateAPIURL = "/api/create/shortquotation";
export const fullQuotationReadAPIURL = `/api/read/search?type=${quotations}`;
export const shortQuotationReadAPIURL = `/api/read/search?type=${shortQuotations}`;
export const quotationAdvnanceReadAPIURL = `/api/read/searchadvance?type=${quotations}`;

export const challanReadAPIURL = `/api/read/search?type=${challans}`;
export const challanAdvnanceReadAPIURL = `/api/read/searchadvance?type=${challans}`;

export const complaintReadAPIURL = `/api/read/search?type=${compalints}`;
export const complaintAdvnanceReadAPIURL = `/api/read/searchadvance?type=${compalints}`;

export const productReadSingleAPIURL = `/api/read/search?type=${products}`;
export const productReadAPIURL = `/api/read/products`;
export const productCreateAPIURL = "/api/create/product";

export const purchaseInvoiceReadAPIURL = `/api/read/search?type=${purchaseInvoice}`;
export const purchaseInvoiceAdvanceReadAPIURL = `/api/read/searchadvance?type=${purchaseInvoice}`;
export const purchaseInvoiceCreateAPIURL = "/api/create/purchaseinvoice";

export const serialNumberSearchAPIURL = `/api/read/search?type=${serials}`;

export const serialSearchAPIURL = "/api/search/serials"; // searches serial number for autocompletion
export const productsSearchAPIURL = "/api/search/products"; // searches product name for autocompletion
export const saveAndCreatequotationAndChallanPDF = "/api/create/pdf";
export const documentsCountAPIURL = "/api/read/count";
export const documentDeleteAPIURL = `/api/delete`;

// types
export type QuotationItems = {
    id: number; // product id
    hsn: string;
    name: string;
    price: number;
    addon: number;
    discount: number;
    quantity: number;
    description?: string;
    link?: string;
    showLink?: boolean;
};

export type QuotationData = {
    _id?: ObjectId,
    no: string;
    date: string;
    items: QuotationItems[];
    intro: string;
    terms: string;
    additionalInfo: string;
    from: string;
    fromAddress: string;
    to: string;
    toAddress: string;
    tax: number;
    amount: number;
    madeby: string;
    email?: string;
    contact?: string;
    bankInfo?: string;
    website?: string;
    pdfColor?: string;
    showLinks?: boolean;
    todealer?: boolean
    madeByInfo?: string
    avgdiscount: number,
    avgaddon: number
};

export type ChallanItems = {
    no: number; // productid
    name: string;
    quantity: number;
    sno?: string[];
    unit?: string;
};

export type ChallanData = {
    _id?: ObjectId,
    no: string;
    date: string;
    items: ChallanItems[];
    type: string;
    category: string;
    from: string;
    fromAddress: string;
    to: string;
    toAddress: string;
    orderno?: string;
    billno?: string;
    modeofdispatch?: string;
    madeby: string;
    email?: string;
    contact?: string;
    website?: string;
    pdfColor?: string;
    remarks?: string
};

export type ProductsData = {
    _id?: ObjectId,
    no: number,
    name: string,
    description?: string,
    hsn?: string,
    link?: string,
    group?: string
    availableQuantity: number,
    soldQuantity: number,
    price: number,
    version?: number
}

export type ComplaintsData = {
    _id?: ObjectId,
    no: string;
    type: string;
    date: string;
    time: string;
    contactPerson: string;
    contactNumber: string;
    complaint: string;
    nameOrAddress: string;
    attendingEngineer: string;
    recordedby: string;
    remarks: string;
    status: string;
};

export type GroupsData = {
    _id?: ObjectId,
    name: string,
    parent?: string,
};

export type generalInfo = {
    contact?: string,
    email?: string,
    website?: string,
    company: string,
    address?: string,
    madeByInfo?: string;
    bankInfo?: string[];
}

export type quotationInfo = {
    pdfColor: string,
    showCustomerList?: boolean,
    terms?: string,
    additionalInfo?: string,
    intro?: string,
}

export type profile = {
    username?: string,
    password?: string,
    generalInfo: generalInfo[],
    quotationInfo: quotationInfo[],
}

export type PurchaseInvoiceItem = {
    no: number, // product id
    name: string, // product name
    quantity: number, // product name
    price: number, // purchase price
    discount: number, // is there any discount on purchase price
    sno: string[]
}
export type PurchaseInvoiceData = {
    _id?: ObjectId,
    no: string,
    vendor: string,
    date: string,
    items: PurchaseInvoiceItem[]
    amount: number,
    tax: number
};

// we find serial status by checking if purchaseinvoice no and challan invoice no are there
export type SerialsData = {
    _id?: ObjectId,
    no: string,
    productId: number,
    status: string, // "purchased = +1 stock or sold = this stock doesn't count for current quantity so 0, "soldwithoutpurchasing -1 stock
    purchaseInvoiceNo?: string, //
    challanNo?: string, // "" if unsold
    purchaseDate?: string // 
    challanDate?: string //"" not present if not sold
}