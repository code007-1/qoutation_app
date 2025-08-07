import { Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { ChallanItems } from "~/routes/dashboard.challan.create";

//- done - advance show hide for better ui - optimized little bit, ok for now
//- done - welcome animation - partially done, would improve animation
//- as of now only online- offline online sync both mongob
//- done - user profile edit
// save type check while uploading to mongodb i.e., form data validation
//- done - notification system 
//- done - access token verify
// pwa or exe application form
// - done - partially done - login log system

export default function ChallanAutocompleteSearch({ index }: { index: number }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filtered, setFiltered] = useState<ChallanItems[]>([]);
    const [highlighted, setHighlighted] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const [hasFocus, setFocus] = useState(false);

    const { setChallanItems, challanItems } = useGlobalContext();

    useEffect(() => {
        if (hasFocus) {
            if (challanItems[index].name.trim() === "") {
                setFiltered([]);
                setShowSuggestions(false);
            } else if (showSuggestions || filtered.length != 1 || filtered[0].name.toLowerCase() != challanItems[index].name.toLowerCase()) {
                fetch(`/api/search`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(challanItems[index].name),
                })
                    .then(async (res) => {
                        const filteredList: ChallanItems[] = await res.json();
                        setFiltered(filteredList);
                        setShowSuggestions(filteredList.length > 0);
                        setHighlighted(-1);
                    })
                    .catch((err) => {
                        console.error("Error fetching suggestions:", err);
                    });
            }
        }
    }, [challanItems[index].name]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setInput(e.target.value);
        setChallanItems((pre) => {
            return pre.map((item, i) => i === index
                ? { ...challanItems[index], name: e.target.value }
                : item)
        });
    };

    const handleSuggestionClick = (suggestion: ChallanItems) => {
        //setInput(suggestion.label);
        setChallanItems(pre => {
            return pre.map((item, i) => i == index
                ? { id: suggestion.id, name: suggestion.name, quantity: 1, sno: [], unit: suggestion.unit || "pcs" }
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
            setChallanItems(pre => {
                return pre.map((item, i) => i === index
                    ? { id: filtered[highlighted].id, name: filtered[highlighted].name, quantity: 1, sno: [], unit: filtered[highlighted].unit || "pcs" }
                    : item)
            });
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    return (
        <div className="grid grid-cols-10 relative w-auto gap-x-4">
            <input
                ref={inputRef}
                type="text"
                value={challanItems[index].name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                className="col-span-3 p-2 border border-border bg-background text-textPrimary focus:outline-textPrimary"
                placeholder="Search Product..."
                autoComplete="off"
            />

            {showSuggestions && (
                <ul className="w-[29%] z-10 absolute top-full -left-0 right-0 bg-buttonHover border border-border overflow-y-auto max-h-96">
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
                placeholder="Serial Numbers separated by commas..."
                className="col-span-4 p-2 border border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={challanItems[index].sno}
                rows={1}
                onChange={(e) => {
                    setChallanItems(pre => {
                        const snos = e.target.value.replace(/[\s,]+/g, ",").trim().split(",");
                        return pre.map((item, i) => i === index
                            ? { ...challanItems[index], sno: snos, quantity: snos.length }
                            : item);
                    })
                }}
            />
            <input
                type="number"
                placeholder="Quantity"
                className="border p-2 border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={challanItems[index]?.quantity}
                onChange={(e) => {
                    setChallanItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...challanItems[index], quantity: Number(e.target.value || undefined) }
                            : item);
                    })
                }}
            />

            <input
                type="string"
                placeholder="Unit"
                className="border p-2 border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={challanItems[index]?.unit}
                onChange={(e) => {
                    setChallanItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...challanItems[index], unit: e.target.value }
                            : item);
                    })
                }}
            />

            <button className="w-[35%] hover:bg-headerBackground bg-buttonHover p-2" onClick={(e) => {
                setChallanItems(pre =>
                    pre.filter((_, i) => i != index)
                );
            }}>
                <Minus className="w-full text-textSecondary" />
            </button>
        </div>
    );
}