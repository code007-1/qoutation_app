import { Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { PurchaseInvoiceItem, productsSearchAPIURL } from "../../statics";

export default function PurchaseInvoiceAutocompleteSearch({ index }: { index: number }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filtered, setFiltered] = useState<PurchaseInvoiceItem[]>([]);
    const [highlighted, setHighlighted] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const [hasFocus, setFocus] = useState(false);
    const [serialInput, setSerialInput] = useState("");

    const { purchaseInvoiceItems, setPurchaseInvoiceItems } = useGlobalContext();

    useEffect(() => {
        if (hasFocus) {
            if (purchaseInvoiceItems[index].name.trim() === "") {
                setFiltered([]);
                setShowSuggestions(false);
            } else if (showSuggestions || filtered.length != 1 || filtered[0].name.toLowerCase() != purchaseInvoiceItems[index].name.toLowerCase()) {
                fetch(productsSearchAPIURL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(purchaseInvoiceItems[index].name),
                })
                    .then(async (res) => {
                        const filteredList: PurchaseInvoiceItem[] = await res.json();
                        setFiltered(filteredList);
                        setShowSuggestions(filteredList.length > 0);
                        setHighlighted(-1);
                    })
                    .catch((err) => {
                        console.error("Error fetching suggestions:", err);
                    });
            }
        }
    }, [purchaseInvoiceItems[index].name]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setInput(e.target.value);
        setPurchaseInvoiceItems((pre) => {
            return pre.map((item, i) => i === index
                ? { ...purchaseInvoiceItems[index], name: e.target.value }
                : item)
        });
    };

    const handleSuggestionClick = (suggestion: PurchaseInvoiceItem) => {
        //setInput(suggestion.label);
        setPurchaseInvoiceItems(pre => {
            return pre.map((item, i) => i == index
                ? { no: suggestion.no, name: suggestion.name, quantity: 1, price: 0, discount: 0, sno: [] }
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
            setPurchaseInvoiceItems(pre => {
                return pre.map((item, i) => i === index
                    ? { no: filtered[highlighted].no, name: filtered[highlighted].name, quantity: 1, price: 0, discount: 0, sno: [] }
                    : item)
            });
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    const handleSerialKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && highlighted == -1) {
            setSerialInput("");
            setPurchaseInvoiceItems(pre => {
                return pre.map((item, i) => i === index
                    ? { ...item, sno: [...(item.sno ?? []), serialInput], quantity: Number(item.sno?.length || 0) + 1 }
                    : item)
            });
        }
    }

    return (
        <div className="grid grid-cols-12 relative w-full gap-x-2">
            <div className="col-span-4 flex gap-x-2">
                <div className="p-2 bg-headerBackground w-[100px] border-0 ">
                    {purchaseInvoiceItems[index].no}
                </div>
                <div className="w-full relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={purchaseInvoiceItems[index].name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        className="w-full inputHollow"
                        placeholder="Search Product..."
                        autoComplete="off"
                    />

                    {showSuggestions && (
                        <ul className="w-full z-10 absolute top-full -left-0 right-0 bg-buttonHover border border-border overflow-y-auto max-h-96">
                            {filtered.map((s, idx) => (
                                <li
                                    key={s.no}
                                    onMouseDown={() => handleSuggestionClick(s)}
                                    className={`${idx === highlighted ? "bg-buttonHover" : "bg-background"} p-2 cursor-pointer text-textSecondary`}
                                    onMouseEnter={() => setHighlighted(idx)}
                                >
                                    {`[${s.no}] ${s.name} - ${s.quantity}`}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="col-span-4 relative border border-border h-min">
                <div className=" flex flex-wrap w-full h-full p-0 justify-between">
                    <input
                        placeholder="Enter Serial Numbers"
                        className="p-2 border-none bg-background focus:outline-none flex-grow"
                        value={serialInput}
                        onKeyDown={handleSerialKeyDown}
                        onChange={(e) => { setSerialInput(e.target.value); }}
                    />
                    <div className="flex-wrap flex items-center gap-2">
                        {purchaseInvoiceItems[index]?.sno?.map(serial => {
                            return <div className="p-1 bg-headerBackground">{serial}<button className="ml-2 px-1 hover:bg-buttonHover"
                                onClick={() => {
                                    setPurchaseInvoiceItems(pre => {
                                        return pre.map((item, i) => i == index
                                            ? { ...item, sno: item.sno?.filter(s => s !== serial), quantity: Number(item.sno?.length || 2) - 1 }
                                            : item)
                                    })
                                }}>X</button></div>
                        })}
                    </div>
                </div>
            </div>
            <input
                type="number"
                placeholder="Quantity"
                className="inputHollow"
                value={purchaseInvoiceItems[index]?.quantity}
                onChange={(e) => {
                    setPurchaseInvoiceItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...purchaseInvoiceItems[index], quantity: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />

            <input
                type="number"
                placeholder="Price"
                className="inputHollow"
                value={purchaseInvoiceItems[index]?.price}
                onChange={(e) => {
                    setPurchaseInvoiceItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...purchaseInvoiceItems[index], price: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />
            <input
                type="number"
                placeholder="Discount"
                className="inputHollow"
                value={purchaseInvoiceItems[index]?.discount}
                onChange={(e) => {
                    setPurchaseInvoiceItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...purchaseInvoiceItems[index], discount: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />


            <button type="button" className="w-[40%] hover:bg-headerBackground bg-buttonHover p-2" onClick={(e) => {
                console.log("decreasing");
                e.preventDefault();
                setPurchaseInvoiceItems(pre =>
                    pre.filter((_, i) => i != index)
                );
            }}>
                <Minus className="w-full text-textSecondary" />
            </button>
        </div>
    );
}