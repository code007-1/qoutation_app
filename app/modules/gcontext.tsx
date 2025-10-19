import { Link } from "@remix-run/react";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { profile } from "~/routes/dashboard.settings.profile";
import { QuotationData, QuoteItems } from "~/routes/dashboard.quotations.create";
import packageJson from "../../package.json";
import { ChallanData, ChallanItems } from "~/routes/dashboard.challan.create";
import { ComplaintsData } from "~/routes/dashboard.complaints.create";
import { GroupsData, ProductsData } from "~/routes/dashboard.inventory.create";

interface AppContextType {
    // app related variables
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
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
    selectedProfile: number;
    setSelectedProfile: React.Dispatch<React.SetStateAction<number>>;
    permissions: string;
    setPermissions: React.Dispatch<React.SetStateAction<string>>;

    // quotation related variables
    oldQuotationData: QuotationData[];
    setOldQuotationData: React.Dispatch<React.SetStateAction<QuotationData[]>>;
    quotationDataCount: number;
    setQuotationDataCount: React.Dispatch<React.SetStateAction<number>>;
    quotationItems: QuoteItems[];
    setQuotationItems: React.Dispatch<React.SetStateAction<QuoteItems[]>>;
    quotationData: QuotationData;
    setQuotationData: React.Dispatch<React.SetStateAction<QuotationData>>;

    // challan related variables
    oldChallanData: ChallanData[];
    setOldChallanData: React.Dispatch<React.SetStateAction<ChallanData[]>>;
    challanDataCount: number;
    setChallanDataCount: React.Dispatch<React.SetStateAction<number>>;
    challanItems: ChallanItems[];
    setChallanItems: React.Dispatch<React.SetStateAction<ChallanItems[]>>;
    challanData: ChallanData;
    setChallanData: React.Dispatch<React.SetStateAction<ChallanData>>;

    //complaints related variables
    complaintsData: ComplaintsData;
    setComplaintsData: React.Dispatch<React.SetStateAction<ComplaintsData>>;
    complaintsDataCount: number;
    setComplaintsDataCount: React.Dispatch<React.SetStateAction<number>>;
    oldComplaintsData: ComplaintsData[];
    setOldComplaintsData: React.Dispatch<React.SetStateAction<ComplaintsData[]>>;

    //group related variables
    oldGroupsData: GroupsData[];
    setOldGroupsData: React.Dispatch<React.SetStateAction<GroupsData[]>>;
    groupsDataCount: number;
    setGroupsDataCount: React.Dispatch<React.SetStateAction<number>>;
    groupsData: GroupsData;
    setGroupsData: React.Dispatch<React.SetStateAction<GroupsData>>;
}

const appContext = createContext<AppContextType | null>(null);
export const createQuotation = <>< Link to={"/dashboard/quotations/create"} className="cursor-pointer hover:bg-buttonHover w-min text-nowrap p-1" >Create Quotation</Link ></>;
export const createChallan = <>< Link to={"/dashboard/challan/create"} className="cursor-pointer hover:bg-buttonHover w-min text-nowrap p-1" >Create Challan</Link ></>;
export const createComplaint = <>< Link to={"/dashboard/complaints/create"} className="cursor-pointer hover:bg-buttonHover w-min text-nowrap p-1" >Create Complaint</Link ></>;
export const createInvetory = <>< Link to={"/dashboard/inventory/create"} className="cursor-pointer hover:bg-buttonHover w-min text-nowrap p-1" >Create Inventory</Link ></>;

export const initialQuotationData = () => {
    return {
        no: new Date().getTime().toString(),
        date: new Date().toISOString().split("T")[0], // Default to today"s date
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
        avgdiscount: 0,
        avgaddon: 0,
        bankInfo: ""
    }
}

export const initialChallanData = () => {
    return {
        no: new Date().getTime().toString(),
        date: new Date().toISOString().split("T")[0], // Default to today"s date
        items: [],
        type: "Delivery Challan",
        category: "Dealer Sale",
        from: "Teen Telecommunication Pvt. Ltd.",
        fromAddress: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092",
        to: "",
        toAddress: "",
        madeby: "",
        modeofdispatch: "by hand"
    }
}

export const initialComplaintsData = () => {
    const dateTime = new Date().toISOString().split("T");
    return {
        no: `Govt-${1}`,
        date: dateTime[0], // Default to today"s date
        time: dateTime[1].split(".")[0],
        type: "Government",
        contactPerson: "",
        contactNumber: "",
        nameOrAddress: "",
        recordedby: "",
        complaint: "",
        address: "",
        attendingEngineer: "Not Assigned",
        remarks: "",
        status: "Pending"
    }
}

export const initialProductData = () => {
    return {
        id: "",
        name: "",
        description: "",
        hsn: "",
        price: 0,
        group: ""
    };
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
    const [profile, setProfile] = useState<profile>({ generalInfo: [{ contact: "+91 7065577059/60", address: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092", company: "Teen Telecommunication Pvt. Ltd.", website: "https://teentelecommunication.com", email: "sales@teentelecommunication.com" }], quotationInfo: [{ pdfColor: "222", showCustomerList: true }] });
    const [selectedProfile, setSelectedProfile] = useState(0);
    const [permissions, setPermissions] = useState<string>("");

    // quotation related variables
    const [oldQuotationData, setOldQuotationData] = useState<QuotationData[]>([]); // data loaded from db of old quotations
    const [quotationDataCount, setQuotationDataCount] = useState<number>(0); // count of data loaded from db
    const [quotationItems, setQuotationItems] = useState<QuoteItems[]>([]); // items added to the current quotation being created
    const [quotationData, setQuotationData] = useState<QuotationData>(initialQuotationData()); // data of the whole current quotation being created

    // challan related variables
    const [oldChallanData, setOldChallanData] = useState<ChallanData[]>([]); // data loaded from db of old quotations
    const [challanDataCount, setChallanDataCount] = useState<number>(0); // count of data loaded from db
    const [challanItems, setChallanItems] = useState<ChallanItems[]>([]); // items added to the current quotation being created
    const [challanData, setChallanData] = useState<ChallanData>(initialChallanData()); // data of the whole current quotation being created

    // complaint related variables
    const [oldComplaintsData, setOldComplaintsData] = useState<ComplaintsData[]>([]);
    const [complaintsDataCount, setComplaintsDataCount] = useState<number>(0);
    const [complaintsData, setComplaintsData] = useState<ComplaintsData>(initialComplaintsData());

    // product related variables
    const [oldProductsData, setOldProductsData] = useState<ProductsData[]>([]);
    const [productsDataCount, setProductsDataCount] = useState<number>(0);
    const [productsData, setProductsData] = useState<ProductsData>(initialProductData());

    // product related variables
    const [oldGroupsData, setOldGroupsData] = useState<GroupsData[]>([]);
    const [groupsDataCount, setGroupsDataCount] = useState<number>(0);
    const [groupsData, setGroupsData] = useState<GroupsData>(initialProductData());

    const toggleTheme = () => {
        const currentTheme = () => {
            switch (theme) {
                case "light":
                    return "dark";
                case "dark":
                    return "dark2";
                case "dark2":
                    return "solarwind";
                case "solarwind":
                    return "seagreen";
                case "seagreen":
                    return "sunsetBloom";
                case "sunsetBloom":
                    return "cyberpunkPulse";
                //case "cyberpunkPulse":
                //return "glass";
                default:
                    return "light"; // Fallback to light theme
            }
        };
        setTheme(currentTheme);
        localStorage.setItem("theme", currentTheme());
    };

    return (
        <appContext.Provider value={{ theme, setTheme, toggleTheme, accessToken, setAccessToken, quotationItems, setQuotationItems, quotationData, setQuotationData, headerText, setHeaderText, gQuote, setGQuote, profile, setProfile, selectedProfile, setSelectedProfile, quotationDataCount, setQuotationDataCount, oldQuotationData, setOldQuotationData, homeLink, setHomeLink, setAppName, appName, oldChallanData, setOldChallanData, challanDataCount, setChallanDataCount, challanItems, setChallanItems, challanData, setChallanData, complaintsData, setComplaintsData, permissions, setPermissions, oldComplaintsData, setOldComplaintsData, complaintsDataCount, setComplaintsDataCount, oldGroupsData, setOldGroupsData, groupsDataCount, setGroupsDataCount, groupsData, setGroupsData }}>
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