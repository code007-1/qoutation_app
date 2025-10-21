import { Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { quotationAndChallanDataSearch } from "../../statics";
import { InvoiceItem } from "./purchaseInvoices";

export default function PurchaseInvoiceAutocompleteSearch({ index }: { index: number }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filtered, setFiltered] = useState<InvoiceItem[]>([]);
    const [highlighted, setHighlighted] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const [hasFocus, setFocus] = useState(false);

    const { invoiceItems, setInvoiceItems } = useGlobalContext();

    useEffect(() => {
        if (hasFocus) {
            if (invoiceItems[index].name.trim() === "") {
                setFiltered([]);
                setShowSuggestions(false);
            } else if (showSuggestions || filtered.length != 1 || filtered[0].name.toLowerCase() != invoiceItems[index].name.toLowerCase()) {
                fetch(quotationAndChallanDataSearch, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(invoiceItems[index].name),
                })
                    .then(async (res) => {
                        const filteredList: InvoiceItem[] = await res.json();
                        setFiltered(filteredList);
                        setShowSuggestions(filteredList.length > 0);
                        setHighlighted(-1);
                    })
                    .catch((err) => {
                        console.error("Error fetching suggestions:", err);
                    });
            }
        }
    }, [invoiceItems[index].name]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setInput(e.target.value);
        setInvoiceItems((pre) => {
            return pre.map((item, i) => i === index
                ? { ...invoiceItems[index], name: e.target.value }
                : item)
        });
    };

    const handleSuggestionClick = (suggestion: InvoiceItem) => {
        //setInput(suggestion.label);
        setInvoiceItems(pre => {
            return pre.map((item, i) => i == index
                ? { productid: suggestion.productid, name: suggestion.name, quantity: 1, price: 0, discount: 0, sno: [] }
                : item)
        });
        setShowSuggestions(false);
    };

    const handleBlur = () => {
        // Delay to allow click event to register
        setTimeout(() => setShowSuggestions(false), 100);
        setFocus(false);
    };

    const handleFocus = () => {
        if (filtered.length > 0) setShowSuggestions(true);
        setFocus(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!showSuggestions) return;
        if (e.key === "ArrowDown") {
            setHighlighted(prev =>
                prev < filtered.length - 1 ? prev + 1 : 0
            );
        } else if (e.key === "ArrowUp") {
            setHighlighted(prev =>
                prev > 0 ? prev - 1 : filtered.length - 1
            );
        } else if (e.key === "Enter" && highlighted >= 0) {
            //setInput(filtered[highlighted].label);
            setFiltered([filtered[highlighted]]);
            setShowSuggestions(false);
            setInvoiceItems(pre => {
                return pre.map((item, i) => i === index
                    ? { productid: filtered[highlighted].productid, name: filtered[highlighted].name, quantity: 1, price: 0, discount: 0, sno: [] }
                    : item)
            });
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    return (
        <div className="grid grid-cols-12 relative w-full gap-x-2">
            <div className="col-span-4 flex gap-x-2">
                <div className="p-2 bg-headerBackground w-[100px] border-0 ">
                    {invoiceItems[index].productid}
                </div>
                <div className="w-full relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={invoiceItems[index].name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 border border-border bg-background text-textPrimary focus:outline-textPrimary"
                        placeholder="Search Product..."
                        autoComplete="off"
                    />

                    {showSuggestions && (
                        <ul className="w-full z-10 absolute top-full -left-0 right-0 bg-buttonHover border border-border overflow-y-auto max-h-96">
                            {filtered.map((s, idx) => (
                                <li
                                    key={s.productid}
                                    onMouseDown={() => handleSuggestionClick(s)}
                                    className={`${idx === highlighted ? "bg-buttonHover" : "bg-background"} p-2 cursor-pointer text-textSecondary`}
                                    onMouseEnter={() => setHighlighted(idx)}
                                >
                                    {s.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <textarea
                placeholder="Serial Numbers separated by commas..."
                className="col-span-4 p-2 border border-border bg-background text-textPrimary focus:outline-textPrimary"

                rows={1}
                onChange={(e) => {
                    setInvoiceItems(pre => {
                        const snos = e.target.value.replace(/[\s,]+/g, ",").trim().split(",");
                        return pre.map((item, i) => i === index
                            ? { ...invoiceItems[index], sno: snos, quantity: snos.length }
                            : item);
                    })
                }}
            />
            <input
                type="number"
                placeholder="Quantity"
                className="border p-2 border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={invoiceItems[index]?.quantity}
                onChange={(e) => {
                    setInvoiceItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...invoiceItems[index], quantity: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />

            <input
                type="number"
                placeholder="Price"
                className="border p-2 border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={invoiceItems[index]?.price}
                onChange={(e) => {
                    setInvoiceItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...invoiceItems[index], price: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />
            <input
                type="number"
                placeholder="Discount"
                className="border p-2 border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={invoiceItems[index]?.discount}
                onChange={(e) => {
                    setInvoiceItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...invoiceItems[index], discount: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />


            <button type="button" className="w-[35%] hover:bg-headerBackground bg-buttonHover p-2" onClick={(e) => {
                console.log("decreasing");
                e.preventDefault();
                setInvoiceItems(pre =>
                    pre.filter((_, i) => i != index)
                );
            }}>
                <Minus className="w-full text-textSecondary" />
            </button>
        </div>
    );
}