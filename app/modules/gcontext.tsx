// app/context/ThemeContext.jsx
import React, { createContext, useState, useContext } from "react";
import { QuotationData, QuoteItems } from "./../routes/quote";

interface AppContextType {
    theme: string;
    toggleTheme: () => void;
    accessToken: string | undefined;
    setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>;
    items: Record<string, QuoteItems>;
    setItems: React.Dispatch<React.SetStateAction<Record<string, QuoteItems>>>;
    data: QuotationData;
    setData: React.Dispatch<React.SetStateAction<QuotationData>>;
}

const appContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("light"); // Default theme
    const [accessToken, setAccessToken] = useState<string | undefined>();
    const [items, setItems] = useState<Record<string, QuoteItems>>({});
    const [data, setData] = useState<QuotationData>({
        no: "1",
        date: new Date().toISOString().split("T")[0], // Default to today's date
        items: items,
        intro: "This is about our earlier discussions with you regarding your requirement for the Matrix Digital IP-PBXS System. Please find below our best offer for the same.",
        terms: "1. Payment Terms: 100% advance.\n2. Delivery Schedule: Within 1-2 days after receiving the PO along with the Advance.\n3. 12 Months off-site warranty from the OEM, as per their terms.\n4. Validity: This offer is valid for 30 days.",
        additionalInfo: "Online UPS supply and Network Rack with Accessories like Fan, AC Socket, and networking etc. requirements would be fulfilled by customer.",
        from: "Teen Telecommunication Pvt. Ltd.",
        fromAddress: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092",
        to: "",
        toAddress: "",
        tax: 18,
        discount: 5
    });


    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <appContext.Provider value={{ theme, toggleTheme, accessToken, setAccessToken, items, setItems, data, setData }}>
            {children}
        </appContext.Provider>
    );
};

// custom global context hook
export const useGlobalContext = () => {
    const context = useContext(appContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
}