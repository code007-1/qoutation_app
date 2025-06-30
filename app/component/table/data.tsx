// app/types/quotation.ts

import { QuotationData, QuoteItems } from "~/routes/dashboard.quote";

export const dummyQuotations: QuotationData[] = [
    {
        no: "QT2025-001",
        date: "2025-06-28",
        madeby: "Acme Corp",
        to: "Globex Ltd",
        amount: 15000,
        discount: 6,
        items: [],
        intro: "",
        terms: "",
        additionalInfo: "",
        from: "",
        fromAddress: "",
        toAddress: "",
        tax: 0
    },
    {
        no: "QT2025-002",
        date: "2025-06-28",
        madeby: "Lackme Corp",
        to: "Axe Ltd",
        amount: 15000,
        discount: 6,
        items: [],
        intro: "",
        terms: "",
        additionalInfo: "",
        from: "",
        fromAddress: "",
        toAddress: "",
        tax: 0
    },
    {
        no: "QT2025-003",
        date: "2025-06-28",
        madeby: "Tecme Corp",
        to: "bex Ltd",
        amount: 15000,
        discount: 6,
        items: [],
        intro: "",
        terms: "",
        additionalInfo: "",
        from: "",
        fromAddress: "",
        toAddress: "",
        tax: 0
    }
];
