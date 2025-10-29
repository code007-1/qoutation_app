// type
export const quotations = "quotations";
export const challans = "challans";
export const products = "products";
export const purchaseInvoice = "purchaseinvoices";
export const compalints = "complaints";
export const logs = "logs";
export const quotes = "quotes";

export const quotationReadAPIURL = `/api/read/search?type=${quotations}`;
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
export const purchaseInvoiceCreateAPIURL = "/api/create/purchaseinvoice"

export const quotationAndChallanDataSearch = "/api/search";
export const saveAndCreatequotationAndChallanPDF = "/api/create/pdf";
export const documentsCountAPIURL = "/api/read/count";
export const documentDeleteAPIURL = `/api/delete`;