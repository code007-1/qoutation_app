import { Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { QuoteItems } from "~/routes/dashboard.quotations.create";

//- done - advance show hide for better ui - optimized little bit, ok for now
//- done - welcome animation - partially done, would improve animation
//- as of now only online- offline online sync both mongob
//- done - user profile edit
// save type check while uploading to mongodb i.e., form data validation
//- done - notification system 
//- done - access token verify
// pwa or exe application form
// - done - partially done - login log system

export default function QuotationAutocompleteSearch({ index }: { index: number }) {
    const [input, setInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filtered, setFiltered] = useState<QuoteItems[]>([]);
    const [highlighted, setHighlighted] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const [hasFocus, setFocus] = useState(false);

    const { setItems, items } = useGlobalContext();

    useEffect(() => {
        if (hasFocus) {
            if (items[index].name.trim() === "") {
                setFiltered([]);
                setShowSuggestions(false);
            } else if (showSuggestions || filtered.length != 1 || filtered[0].name.toLowerCase() != items[index].name.toLowerCase()) {
                fetch(`/api/search`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(items[index].name),
                })
                    .then(async (res) => {
                        const filteredList: QuoteItems[] = await res.json();
                        setFiltered(filteredList);
                        setShowSuggestions(filteredList.length > 0);
                        setHighlighted(-1);
                    })
                    .catch((err) => {
                        console.error("Error fetching suggestions:", err);
                    });
            }
        }
    }, [items[index].name]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setInput(e.target.value);
        setItems((pre) => {
            return pre.map((item, i) => i === index
                ? { ...items[index], name: e.target.value }
                : item)
        });
    };

    const handleSuggestionClick = (suggestion: QuoteItems) => {
        //setInput(suggestion.label);
        setItems(pre => {
            return pre.map((item, i) => i == index
                ? { id: suggestion.id, hsn: suggestion.hsn, name: suggestion.name, price: suggestion.price, quantity: 1, description: suggestion.description || "", link: suggestion.link }
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
            setItems(pre => {
                return pre.map((item, i) => i === index
                    ? { id: filtered[highlighted].id, hsn: filtered[highlighted].hsn, name: filtered[highlighted].name, price: filtered[highlighted].price, quantity: 1, description: filtered[highlighted].description || "", link: filtered[highlighted].link }
                    : item)
            }
            );
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    return (
        <div className="flex relative w-auto gap-x-4">
            <input
                ref={inputRef}
                type="text"
                value={items[index].name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                className="w-[30%] p-2 border border-border bg-background text-textPrimary focus:outline-textPrimary"
                placeholder="Search Product..."
                autoComplete="off"
            />
            {showSuggestions && (
                <ul className="z-10 absolute top-full -left-0 right-0 bg-buttonHover border border-border overflow-y-auto w-[27%] max-h-96">
                    {filtered.map((s, idx) => (
                        <li
                            key={s.id}
                            onMouseDown={() => handleSuggestionClick(s)}
                            className={`${idx === highlighted ? "bg-buttonHover" : "bg-background"} p-2 cursor-pointer text-textSecondary`}
                            onMouseEnter={() => setHighlighted(idx)}
                        >
                            {s.name}
                        </li>
                    ))}
                </ul>
            )}
            <textarea
                placeholder="Any prodcut description..."
                className="border w-[40%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={items[index].description}
                rows={1}
                onChange={(e) => {
                    setItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...items[index], description: e.target.value }
                            : item);
                    })
                }}
            />
            <input
                type="string"
                placeholder="HSN"
                className="border p-2 w-[10%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={items[index]?.hsn}
                onChange={(e) => {
                    setItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...items[index], hsn: e.target.value }
                            : item);
                    })
                }}
            />
            <input
                type="number"
                placeholder="Price"
                className="border p-2 w-[10%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={items[index]?.price}
                min={0}
                onChange={(e) => {
                    setItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...items[index], price: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />

            <input
                type="number"
                placeholder="Quantity"
                className="border p-2 w-[10%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={items[index]?.quantity}
                min={0}
                onChange={(e) => {
                    setItems(pre => {
                        const value = e.target.value;
                        return pre.map((item, i) => i === index
                            ? { ...items[index], quantity: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />
            <button className="hover:bg-headerBackground bg-buttonHover p-2" onClick={(e) => {
                //setInput(index);
                setItems(pre =>
                    pre.filter((_, i) => i != index)
                );
            }}>
                <Minus className="text-textSecondary" />
            </button>
        </div>
    );
}