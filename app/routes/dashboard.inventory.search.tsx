import { useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDown, Search, SeparatorVertical } from "lucide-react";
import { useCentralFetcher } from "~/component/centralFetcher";
import { serialNumberSearchAPIURL, serialSearchAPIURL } from "~/component/statics";
import { useNotification } from "~/modules/notificationContext";
import TableUI from "~/component/tableUI";
import useSerialsColumn from "~/component/inventory/serials/serialsColumns";

export default function SerialSearchPage() {
    const [query, setQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const fetcher = useCentralFetcher();
    const { addNotifications } = useNotification();
    const [serialData, setSerialData] = useState([]);
    const column = useSerialsColumn();

    async function getSerialNumbers() {
        setIsSearching(true);
        const response = await fetcher(`${serialNumberSearchAPIURL}`);
        if (response.status === 200) {
            const data = await response.json();
            setTimeout(() => setSerialData(data), 1000);
        }
        else {
            addNotifications({ title: "Failure...", message: "Fail to load data." });
        }
    }

    return (
        <>
            <div className="w-full h-[calc(100vh-150px)]">
                <div className={`w-full flex-col items-center relative transition-all duration-1000 ease-in-out ${isSearching ? "top-0" : "scale-100 top-1/3"}`}>
                    <div className={`transition-all duration-1000 ease-in-out ${isSearching ? "text-[0px] m-2" : "text-3xl m-4"} text-center font-semibold text-textPrimary`}>Didn't find what you were looking for?</div>
                    <div className={`flex items-center justify-center w-full transition-all duration-1000 ease-in-out ${isSearching ? "" : "shadow-xl shadow-buttonHover"}`}>
                        {/*<Listbox value={selectedType} onChange={e => { setSelectedType(e); }}>
                            <div className="relative flex justify-center">
                                <ListboxButton className="w-[100px] py-4 flex items-center justify-between hover:bg-buttonHover inputFilled">
                                    <div className="text-left text-textSecondary truncate text-nowrap overflow-hidden">{selectedType}</div>
                                    <ChevronDown className="text-textPrimary" />
                                </ListboxButton>

                                <ListboxOptions
                                    transition
                                    className="w-full absolute -right-34 top-10 z-10 mt-2 origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="p-1">
                                        {["Serials", "Product"].map((category) => (
                                            <ListboxOption
                                                key={category}
                                                value={category}
                                                className="block p-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                            >
                                                {category}
                                            </ListboxOption>
                                        ))}
                                    </div>
                                </ListboxOptions>
                            </div>
                        </Listbox>*/}

                        <input
                            className="w-full p-4 outline-none text-textSecondary font-semibold bg-headerBackground"
                            type="text"
                            id="search"
                            placeholder="Search serial no..."
                            value={query}
                            onChange={e => setQuery(e.target.value)} />
                        <button className="button p-4" onClick={getSerialNumbers}>
                            <Search size={20} className="" />
                        </button>
                    </div>
                </div>
                {serialData.length > 0 &&
                    <TableUI
                        data={serialData}
                        columns={column}
                        EmptyText="No Serials Data Found!"
                    />
                }
            </div>
        </>
    );
}
