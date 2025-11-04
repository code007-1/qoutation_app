import { useEffect, useState } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { AlignLeft } from "lucide-react";
import { MenuButton, MenuItem, MenuItems, Menu, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { Link } from "@remix-run/react";
import QuotationsShowFull from "../component/quotation/fullQuotationShow";
import QuotationsShowShort from "../component/quotation/shortQuotationShow";

const QuotationsShow = () => {
    // Initiate your states
    const [selectedTabIndex, setSelectedTabIndex] = useState(-1);

    const { setHeaderText } = useGlobalContext();

    const quotationsHeader = <>
        < Menu as="div" className="relative inline-block text-left text-sm text-textSecondary" >
            <div>
                <MenuButton className="flex mr-10 items-center hover:bg-buttonHover px-2 text-textPrimary">
                    <AlignLeft className="text-textPrimary mr-2" />
                    <div className="text-xl mr-2">Create Quotation</div>
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-10 z-10 mt-2 w-52 origin-top-right divide-y divide-border rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="p-1">
                    <MenuItem>
                        <Link
                            to="/dashboard/quotations/create/full"
                            className="flex px-4 py-2 data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                        >
                            Full Quotation
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            to="/dashboard/quotations/create/short"
                            className="flex px-4 py-2    data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                        >
                            Short Quotation
                        </Link>
                    </MenuItem>
                </div>
            </MenuItems >
        </Menu >
    </>;

    useEffect(() => {
        const selectedTab = sessionStorage.getItem("quotationShowSelectedTab");
        if (selectedTab) setSelectedTabIndex(parseInt(selectedTab));
        setHeaderText(quotationsHeader);
    }, []);

    useEffect(() => {
        if (selectedTabIndex !== -1) sessionStorage.setItem("quotationShowSelectedTab", selectedTabIndex.toString());
    }, [selectedTabIndex]);


    return (
        <>
            <section className="mt-5">
                <TabGroup className="" selectedIndex={selectedTabIndex} onChange={e => setSelectedTabIndex(e)}>
                    <TabList className="flex justify-center w-full">
                        <div className="flex w-[25%] justify-evenly" tabIndex={0}>
                            {["Full Quotations", "Short Quotations"].map((name: string, index) => (
                                <Tab
                                    key={name}
                                    className={`w-full py-2 px-4 font-semibold text-textSecondary focus:outline-none hover:bg-buttonHover
                                    ${index === selectedTabIndex ? "bg-header" : "bg-headerBackground"}`}
                                >
                                    {name}
                                </Tab>
                            ))}
                        </div>
                    </TabList>

                    <TabPanels className="mt-3">
                        <TabPanel key={"Groups"} className="">
                            <QuotationsShowFull />
                        </TabPanel>
                        <TabPanel key={"Invoices"} className="">
                            <QuotationsShowShort />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </section>
        </>
    );
};

export default QuotationsShow;