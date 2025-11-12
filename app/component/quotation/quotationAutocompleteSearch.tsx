import { Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { QuotationItems } from "../statics";
import { productsSearchAPIURL } from "../statics";

//- done - advance show hide for better ui - optimized little bit, ok for now
//- done - welcome animation - partially done, would improve animation
//- as of now only online- offline online sync both mongob
//- done - user profile edit
// save type check while uploading to mongodb i.e., form data validation
//- done - notification system 
//- done - access token verify
// pwa or exe application form
// - done - partially done - login log system


//compliant number
//place
//date and time
//actual compliant
//complaint status
//done by
//person who complained
//phone number of person who complained

export default function QuotationAutocompleteSearch({ index }: { index: number }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filtered, setFiltered] = useState<QuotationItems[]>([]);
    const [highlighted, setHighlighted] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const [hasFocus, setFocus] = useState(false);

    const { setQuotationItems, quotationItems } = useGlobalContext();

    useEffect(() => {
        if (hasFocus) {
            if (quotationItems[index].name.trim() === "") {
                setFiltered([]);
                setShowSuggestions(false);
            } else if (showSuggestions || filtered.length != 1 || filtered[0].name.toLowerCase() != quotationItems[index].name.toLowerCase()) {
                fetch(`${productsSearchAPIURL}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(quotationItems[index].name),
                })
                    .then(async (res) => {
                        const filteredList: QuotationItems[] = await res.json();
                        setFiltered(filteredList);
                        setShowSuggestions(filteredList.length > 0);
                        setHighlighted(-1);
                    })
                    .catch((err) => {
                        console.error("Error fetching suggestions:", err);
                    });
            }
        }
    }, [quotationItems[index].name]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuotationItems((pre) => {
            return pre.map((item, i) => i === index
                ? { ...quotationItems[index], name: e.target.value }
                : item)
        });
    };

    const handleSuggestionClick = (suggestion: QuotationItems) => {
        setQuotationItems(pre => {
            return pre.map((item, i) => i == index
                ? { id: suggestion.id, hsn: suggestion.hsn, name: suggestion.name, price: suggestion.price, quantity: 1, description: suggestion.description || "", link: suggestion.link, addon: 0, discount: 0 }
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
            setQuotationItems(pre => {
                return pre.map((item, i) => i === index
                    ? { id: filtered[highlighted].id, hsn: filtered[highlighted].hsn, name: filtered[highlighted].name, price: filtered[highlighted].price, quantity: 1, description: filtered[highlighted].description || "", link: filtered[highlighted].link, addon: 0, discount: 0 }
                    : item)
            }
            );
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    return (
        <div className="flex relative w-auto gap-x-2">
            <div className="grid grid-cols-12 gap-x-2 w-[98%]">
                <div className="col-span-3 relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={quotationItems[index].name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        className="w-full h-full inputHollow"
                        placeholder="Search Product..."
                        autoComplete="off"
                    />
                    {showSuggestions && (
                        <ul className="w-full z-10 absolute top-full left-0 bg-buttonHover border border-border overflow-y-auto max-h-96">
                            {filtered.map((s, idx) => (
                                <li
                                    key={s.id}
                                    onMouseDown={() => handleSuggestionClick(s)}
                                    className={`${idx === highlighted ? "bg-buttonHover" : "bg-background"} p-2 cursor-pointer text-textSecondary`}
                                    onMouseEnter={() => setHighlighted(idx)}
                                >
                                    {`${s.name} - ${s.quantity}`}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <textarea
                    placeholder="Any prodcut description..."
                    className="inputHollow col-span-4"
                    value={quotationItems[index].description}
                    rows={1}
                    onChange={(e) => {
                        setQuotationItems(pre => {
                            return pre.map((item, i) => i === index
                                ? { ...quotationItems[index], description: e.target.value }
                                : item);
                        })
                    }}
                />
                <input
                    type="string"
                    placeholder="HSN"
                    className="inputHollow"
                    value={quotationItems[index]?.hsn}
                    onChange={(e) => {
                        setQuotationItems(pre => {
                            return pre.map((item, i) => i === index
                                ? { ...quotationItems[index], hsn: e.target.value }
                                : item);
                        })
                    }}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    className="inputHollow"
                    value={quotationItems[index]?.quantity}
                    min={0}
                    onChange={(e) => {
                        setQuotationItems(pre => {
                            return pre.map((item, i) => i === index
                                ? { ...quotationItems[index], quantity: Number(e.target.value || undefined) }
                                : item);
                        })
                    }}
                />

                <input
                    type="number"
                    placeholder="Price"
                    className="inputHollow"
                    value={quotationItems[index]?.price}
                    min={0}
                    onChange={(e) => {
                        setQuotationItems(pre => {
                            return pre.map((item, i) => i === index
                                ? { ...quotationItems[index], price: Number(e.target.value || undefined) }
                                : item);
                        })
                    }}
                />
                <input
                    type="number"
                    placeholder="Discount"
                    className="inputHollow"
                    value={quotationItems[index]?.discount}
                    min={0}
                    onChange={(e) => {
                        setQuotationItems(pre => {
                            return pre.map((item, i) => i === index
                                ? { ...quotationItems[index], discount: Number(e.target.value || undefined) }
                                : item);
                        })
                    }}
                />
                <input
                    type="number"
                    placeholder="Addon %"
                    className="inputHollow"
                    value={quotationItems[index]?.addon}
                    min={0}
                    onChange={(e) => {
                        setQuotationItems(pre => {
                            return pre.map((item, i) => i === index
                                ? { ...quotationItems[index], addon: Number(e.target.value || undefined) }
                                : item);
                        })
                    }}
                />
            </div>

            <button className="hover:bg-headerBackground bg-buttonHover p-2" onClick={(e) => {
                setQuotationItems(pre =>
                    pre.filter((_, i) => i != index)
                );
            }}>
                <Minus className="text-textSecondary" />
            </button>
        </div>
    );
}