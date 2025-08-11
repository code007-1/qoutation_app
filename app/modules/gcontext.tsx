import { Link } from "@remix-run/react";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { profile } from "~/routes/dashboard.settings.profile";
import { QuotationData, QuoteItems } from "~/routes/dashboard.quotations.create";
import packageJson from '../../package.json';
import { ChallanData, ChallanItems } from "~/routes/dashboard.challan.create";

interface AppContextType {
    // app related variables
    theme: string;
    toggleTheme: () => void;
    accessToken: string | undefined;
    setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>;
    homeLink: string;
    setHomeLink: React.Dispatch<React.SetStateAction<string>>;
    appName: string;
    setAppName: React.Dispatch<React.SetStateAction<string>>;
    headerText: string | ReactNode;
    setHeaderText: React.Dispatch<React.SetStateAction<string | ReactNode>>;

    // user related variables
    gQuote: string | undefined;
    setGQuote: React.Dispatch<React.SetStateAction<string | undefined>>;
    profile: profile,
    setProfile: React.Dispatch<React.SetStateAction<profile>>;

    // quotation related variables
    quoteData: QuotationData[];
    setQuoteData: React.Dispatch<React.SetStateAction<QuotationData[]>>;
    dataCount: number;
    setDataCount: React.Dispatch<React.SetStateAction<number>>;
    items: QuoteItems[];
    setItems: React.Dispatch<React.SetStateAction<QuoteItems[]>>;
    data: QuotationData;
    setData: React.Dispatch<React.SetStateAction<QuotationData>>;

    // challan related variables
    oldChallanData: ChallanData[];
    setOldChallanData: React.Dispatch<React.SetStateAction<ChallanData[]>>;
    challanDataCount: number;
    setChallanDataCount: React.Dispatch<React.SetStateAction<number>>;
    challanItems: ChallanItems[];
    setChallanItems: React.Dispatch<React.SetStateAction<ChallanItems[]>>;
    challanData: ChallanData;
    setChallanData: React.Dispatch<React.SetStateAction<ChallanData>>;
}

const appContext = createContext<AppContextType | null>(null);
export const createQuotation = <>< Link to={"/dashboard/quotations/create"} className="cursor-pointer hover:bg-buttonHover w-min text-nowrap p-1" >Create Quotation</Link ></>;
export const createChallan = <>< Link to={"/dashboard/challan/create"} className="cursor-pointer hover:bg-buttonHover w-min text-nowrap p-1" >Create Challan</Link ></>;
export const initialQuotationData = () => {
    return {
        no: new Date().getTime().toString(),
        date: new Date().toISOString().split("T")[0], // Default to today's date
        items: [],
        intro: "This is about our earlier discussions with you regarding your requirement for the Matrix Digital IP-PBXS System. Please find below our best offer for the same.",
        terms: "1. Payment Terms: 100% advance.\n2. Delivery Schedule: Within 1-2 days after receiving the PO along with the Advance.\n3. 12 Months off-site warranty from the OEM, as per their terms.\n4. Validity: This offer is valid for 30 days.",
        additionalInfo: "Online UPS supply and Network Rack with accessories, such as fans, AC Sockets, and networking requirements, will be fulfilled by the customer.",
        from: "Teen Telecommunication Pvt. Ltd.",
        fromAddress: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092",
        to: "",
        toAddress: "",
        tax: 18,
        discount: 0,
        amount: 0,
        madeby: "",
    }
}

export const initialChallanData = () => {
    return {
        no: new Date().getTime().toString(),
        date: new Date().toISOString().split("T")[0], // Default to today's date
        items: [],
        type: "Delivery Challan",
        category: "Delivery Challan",
        from: "Teen Telecommunication Pvt. Ltd.",
        fromAddress: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092",
        to: "",
        toAddress: "",
        madeby: "",
        modeofdispatch: "by hand"
    }
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    // app related variaibles
    const [theme, setTheme] = useState("light"); // Default theme
    const [accessToken, setAccessToken] = useState<string | undefined>();
    const [homeLink, setHomeLink] = useState<string>("/home");
    const [appName, setAppName] = useState<string>(packageJson.name.slice(0, 3) + packageJson.name[3].toUpperCase() + packageJson.name.slice(4));
    const [headerText, setHeaderText] = useState<string | ReactNode>(createQuotation);

    // user related variables
    const [gQuote, setGQuote] = useState<string | undefined>();
    const [profile, setProfile] = useState<profile>({ contact: "+91 7065577059/60", address: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092", company: "Teen Telecommunication Pvt. Ltd.", email: "sales@teentelecommunication.com", pdfColor: "222", website: "https://teentelecommunication.com", showCustomerList: true });

    // quotation related variables
    const [quoteData, setQuoteData] = useState<QuotationData[]>([]); // data loaded from db of old quotations
    const [dataCount, setDataCount] = useState<number>(0); // count of data loaded from db
    const [items, setItems] = useState<QuoteItems[]>([]); // items added to the current quotation being created
    const [data, setData] = useState<QuotationData>(initialQuotationData()); // data of the whole current quotation being created

    // challan related variables
    const [oldChallanData, setOldChallanData] = useState<ChallanData[]>([]); // data loaded from db of old quotations
    const [challanDataCount, setChallanDataCount] = useState<number>(0); // count of data loaded from db
    const [challanItems, setChallanItems] = useState<ChallanItems[]>([]); // items added to the current quotation being created
    const [challanData, setChallanData] = useState<ChallanData>(initialChallanData()); // data of the whole current quotation being created


    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    };

    return (
        <appContext.Provider value={{ theme, toggleTheme, accessToken, setAccessToken, items, setItems, data, setData, headerText, setHeaderText, gQuote, setGQuote, profile, setProfile, dataCount, setDataCount, quoteData, setQuoteData, homeLink, setHomeLink, setAppName, appName, oldChallanData, setOldChallanData, challanDataCount, setChallanDataCount, challanItems, setChallanItems, challanData, setChallanData }}>
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