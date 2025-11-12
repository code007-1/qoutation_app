import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import QuotationAutocompleteSearch from "~/component/quotation/quotationAutocompleteSearch";
import { useCentralFetcher } from "~/component/centralFetcher";
import { ChevronDown, Minus } from "lucide-react";
import { useNotification } from "~/modules/notificationContext";
import { QuotationData, QuotationItems } from "~/component/statics";
import { shortQuotationCreateAPIURL } from "~/component/statics";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Switch } from "@headlessui/react";
import { FormatAmountToINR } from "~/component/quotation/fullQuotationColumns";

export async function SaveQuotation(quotationData: QuotationData, quotationItems: QuotationItems[], addNotifications: any, fetcher: any, navigate: any, save: boolean = false) {
    let filteredItems;
    filteredItems = quotationItems.filter((item: any) => {
        if (!isFinite(item.price) || !isFinite(item.quantity)) return false;
        else return true;
    })

    let quotationText = "";
    quotationText += `From : ${quotationData.from}\n`;
    quotationText += `To : ${quotationData.to}\n`;
    quotationText += `Date : ${quotationData.date}\n\n`;
    quotationText += "Particulars\n";

    let totalAmount = 0;
    filteredItems.forEach((element, index) => {
        const amount = ((element.addon * 0.01) + 1) * (1 - (element.discount * 0.01)) * element.price * element.quantity;
        totalAmount += amount;

        quotationText += `${index + 1}. ${element.name} => Rs.${FormatAmountToINR(element.price * (1 + (element.addon * 0.01)) * (1 - (element.discount * 0.01)))} ${element.discount > 0 ? "(" + element.discount + " % Discount on " + "Rs." + FormatAmountToINR(element.price) + ")" : ""} * ${element.quantity} unit = Rs.${FormatAmountToINR(amount)}\n`
        if (element?.hsn != "")
            quotationText += "HSN Code: " + element.hsn + "\n";
        if (element?.description != "")
            quotationText += element.description + "\n";
        quotationText += "\n";
    }, []);

    quotationText += `\nAmount => Rs.${FormatAmountToINR(totalAmount)}\n`
    quotationText += `Tax @ ${quotationData.tax} % => Rs.${FormatAmountToINR((quotationData.tax * 0.01 * totalAmount))}\n`
    quotationText += `Total Amount => Rs.${FormatAmountToINR(((quotationData.tax * 0.01) + 1) * totalAmount)}`

    navigator.clipboard.writeText(quotationText).then(() => {
        addNotifications({
            title: "Quotation Copied...",
            message: `Quotation Copied to Clipboard`,
        })
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });

    if (save) {
        const response = await fetcher(`${shortQuotationCreateAPIURL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...quotationData, items: filteredItems })
        });

        if (response.status !== 200) {
            addNotifications({ title: "Error", message: "Some error occured while saving quotation" });
        }
        else {
            navigate("/dashboard/quotations/show");
        }
    }
}

export default function ShortQuotationsCreate() {
    const location = useLocation();
    const passedData = location.state;

    const { quotationItems, setQuotationItems, quotationData, setQuotationData, profile, selectedProfile, setSelectedProfile } = useGlobalContext();
    const fetcher = useCentralFetcher();

    const navigate = useNavigate();
    const { addNotifications } = useNotification();
    const names = profile?.generalInfo.map((p) => p.company) || [];


    function addItem() {
        //const newKey = new Date().getTime() + 1;
        setQuotationItems(pre => {
            return [
                ...pre,
                { id: 0, hsn: "", name: "", description: "", price: 0, quantity: 0, link: "#", addon: 0, discount: 0 }
            ]
        });
    }

    useEffect(() => {
        const amount = Object.entries(quotationItems).reduce((acc, [_, item]) => acc + (item.price * item.quantity * (1 + 0.01 * item.addon) * (1 - item.discount * 0.01)), 0);
        const avgdiscount = Object.entries(quotationItems).reduce((acc, [_, item]) => acc + (item.discount ?? 0), 0) / (quotationItems.length || 1);
        const avgaddon = Object.entries(quotationItems).reduce((acc, [_, item]) => acc + (item.addon ?? 0), 0) / (quotationItems.length || 1);
        setQuotationData(pre => { return { ...pre, amount: amount, avgdiscount: Number(avgdiscount.toFixed(2)), avgaddon: Number(avgaddon.toFixed(2)) } });
    }, [quotationItems]);

    useEffect(() => {
        // copying existing quotation
        if (passedData && passedData?.editing === false) {
            const d = new Date();
            const no = d.getTime().toString();
            const date = d.toISOString().split("T")[0];

            setQuotationData((pre) => { return { ...pre, no: no, date: date } });
        }

        // editing existing quotation
        else if (passedData && passedData?.editing === true) {
            return;
        }

        // new quotation
        else {
            const d = new Date();
            let no = d.getTime().toString();

            setQuotationData((pre) => {
                return {
                    ...pre, no: no,
                    from: profile.generalInfo[selectedProfile].company,
                    madeby: profile.username ?? "",
                    date: d.toISOString().split("T")[0],
                    avgdiscount: 0,
                    avgaddon: 0,
                }
            });
        }
    }, [])
    function updateData(index: number) {
        if (profile) {
            let from = profile.generalInfo[index].company;
            setQuotationData(pre => { return { ...pre, from: from } });
        }
    }


    return (<>
        <div className="text-textSecondary">
            <div className="mt-4 flex space-x-4 items-center align-middle">
                <div className="flex items-center w-3/4 space-x-8">
                    <div>
                        <div className="text-sm font-semibold">Quotation No.</div>
                        <div className="inputFilled">{quotationData.no}</div>
                    </div>
                    <div>
                        <div className="text-sm font-semibold">Date</div>
                        <input type="date" color="white" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="Date" className="w-32 inputFilled" value={quotationData.date} onChange={e => setQuotationData(pre => { return { ...pre, date: e.target.value } })} />
                    </div>
                    <div className="w-[50%]">
                        <div className="text-sm font-semibold">Party Name</div>
                        <input id="partyName" key={"second"} type="text" placeholder="Enter Party Name" className="inputHollow w-full" value={quotationData.to} onChange={e => setQuotationData(pre => { return { ...pre, to: e.target.value } })} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Profile</p>
                        <Listbox value={profile.generalInfo[selectedProfile].company} onChange={e => {
                            const index = names.indexOf(e);
                            setSelectedProfile(index);
                            updateData(index);
                        }}>
                            <div className="relative flex justify-center">
                                <ListboxButton className="w-full flex items-center justify-between hover:bg-buttonHover inputFilled">
                                    <div className="text-left text-textSecondary truncate text-nowrap overflow-hidden w-48">{profile.generalInfo[selectedProfile].company}</div>
                                    <ChevronDown className="text-textPrimary" />
                                </ListboxButton>

                                <ListboxOptions
                                    transition
                                    className="w-full absolute -right-34 top-10 z-10 mt-2 origin-top-right rounded-sm bg-background shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="p-1">
                                        {names.map((category) => (
                                            <ListboxOption
                                                key={category}
                                                value={category}
                                                className="block px-4 py-2 text-sm text-textSecondary data-[focus]:bg-buttonHover data-[focus]:text-textSecondary data-[focus]:outline-none"
                                            >
                                                {category}
                                            </ListboxOption>
                                        ))}
                                    </div>
                                </ListboxOptions>
                            </div>
                        </Listbox>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-nowrap">To Dealer</p>
                        <Switch
                            checked={quotationData.todealer}
                            onChange={(e) => { setQuotationData(pre => { return { ...pre, todealer: e } }) }}
                            className={` ${quotationData.todealer ? "bg-button/75" : "bg-buttonHover"}
                                                          relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                        >
                            <span
                                aria-hidden="true"
                                className={`${quotationData.todealer ? "translate-x-4" : "translate-x-0"}
                                                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-buttonTextPrimary shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
                <div className="w-1/4 flex justify-end">
                    <button onClick={addItem} className="button px-4 py-1 text-lg">
                        Add Item
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="mt-4 space-y-2 overflow-y-auto h-[calc(100vh-220px)] w-full">
                    <div className="flex relative w-auto gap-x-2">
                        <div className="grid grid-cols-12 gap-x-2 w-[98%]">
                            <div className="col-span-3 p-2">Name</div>
                            <div className="col-span-4 p-2">Description</div>
                            <div className="col-span-1 p-2">HSN</div>
                            <div className="col-span-1 p-2">Quantity</div>
                            <div className="col-span-1 p-2">Price</div>
                            <div className="col-span-1 p-2">Discount</div>
                            <div className="col-span-1 p-2">Addon</div>
                        </div>
                        <button className="invisible p-2"><Minus className="text-textSecondary" /></button>
                    </div>
                    {
                        quotationItems.map((_, index) => {
                            return <>
                                <QuotationAutocompleteSearch key={index} index={index} />
                            </>;
                        })}
                </div>
                <div className="flex justify-between w-full">
                    <div className="flex items-center">
                        <div className="text-sm font-semibold mr-4">Taxable Value:</div>
                        <div className="">Rs.{quotationData.amount.toLocaleString("en-IN")}</div>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="tax" className="text-sm font-semibold mr-4">Tax (%)</label>
                        <input id="tax" type="number" placeholder="Enter Tax Percentage" className="inputHollow w-25" value={quotationData.tax} onChange={e => setQuotationData(pre => { return { ...pre, tax: parseFloat(e.target.value) } })} />
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm font-semibold mr-4">Total:</div>
                        <div className="">Rs.{Number((quotationData.amount * (1 + quotationData.tax * 0.01)).toFixed(2)).toLocaleString("en-IN")}</div>
                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    <form onSubmit={(e) => { e.preventDefault(); SaveQuotation(quotationData, quotationItems, addNotifications, fetcher, navigate, true); }}>
                        <button className="button px-4 py-1 mt-4 text-lg" type="submit">Save Quotation</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}