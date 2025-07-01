// app/context/ThemeContext.jsx

import { Link } from "@remix-run/react";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { user } from "~/routes/dashboard.profile";
//import { QuotationData, QuoteItems } from "~/component/quote";
import { QuotationData, QuoteItems } from "~/routes/dashboard.quote";

interface AppContextType {
    theme: string;
    toggleTheme: () => void;
    accessToken: string | undefined;
    setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>;
    items: QuoteItems[];
    setItems: React.Dispatch<React.SetStateAction<QuoteItems[]>>;
    data: QuotationData;
    setData: React.Dispatch<React.SetStateAction<QuotationData>>;
    userName: string | undefined,
    setUserName: React.Dispatch<React.SetStateAction<string | undefined>>;
    headerText: string | ReactNode
    setHeaderText: React.Dispatch<React.SetStateAction<string | ReactNode>>;
    quote: string | undefined;
    setQuote: React.Dispatch<React.SetStateAction<string | undefined>>;
    profile: user,
    setProfile: React.Dispatch<React.SetStateAction<user>>;
}

const appContext = createContext<AppContextType | null>(null);
export const createQuotation = <>< Link to={"/dashboard/quote"} className="cursor-pointer hover:bg-buttonHover w-min text-nowrap p-1" >Create Quotation</Link ></>;

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("light"); // Default theme
    const [accessToken, setAccessToken] = useState<string | undefined>();
    const [userName, setUserName] = useState<string | undefined>();
    const [headerText, setHeaderText] = useState<string | ReactNode>(createQuotation);
    const [items, setItems] = useState<QuoteItems[]>([]);
    const [quote, setQuote] = useState<string | undefined>();
    const [profile, setProfile] = useState<user>({ contact: "+91 7065577059/60", address: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092", company: "Teen Telecommunication Pvt. Ltd.", email: "sales@teentelecommunication.com", pdfColor: 222, website: "https://teentelecommunication.com" });

    //const date = new Date().getTime().toString();

    const [data, setData] = useState<QuotationData>({
        no: new Date().getTime().toString(),
        date: new Date().toISOString().split("T")[0], // Default to today's date
        items: items,
        intro: "This is about our earlier discussions with you regarding your requirement for the Matrix Digital IP-PBXS System. Please find below our best offer for the same.",
        terms: "1. Payment Terms: 100% advance.\n2. Delivery Schedule: Within 1-2 days after receiving the PO along with the Advance.\n3. 12 Months off-site warranty from the OEM, as per their terms.\n4. Validity: This offer is valid for 30 days.",
        additionalInfo: "Online UPS supply and Network Rack with accessories, such as fans, AC Sockets, and networking requirements, will be fulfilled by the customer.",
        from: "Teen Telecommunication Pvt. Ltd.",
        fromAddress: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092",
        to: "",
        toAddress: "",
        tax: 18,
        discount: 5,
        amount: 100000,
        madeby: userName ? userName : "",
    });


    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <appContext.Provider value={{ theme, toggleTheme, accessToken, setAccessToken, items, setItems, data, setData, userName, setUserName, headerText, setHeaderText, quote, setQuote, profile, setProfile }}>
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