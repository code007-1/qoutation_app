import { Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { QuoteItems } from "~/routes/dashboard.quote";

// advance show hide for better ui - optimized little bit, ok for now
// dashboad intial page to show qoutation and create qoutation
// welcome animation - partially done, would improve animation

const SUGGESTIONS: QuoteItems[] = [
    { id: 1, name: "Apple", price: 100, quantity: 1, description: "Fresh and juicy apples" },
    { id: 2, name: "Banana", price: 50, quantity: 1, description: "Sweet and ripe bananas" },
    { id: 3, name: "Cherry", price: 75, quantity: 1, description: "Delicious cherries" },
    { id: 4, name: "Date", price: 120, quantity: 1, description: "Sweet dates" },
    { id: 5, name: "Elderberry", price: 200, quantity: 1, description: "Nutritious elderberries" },
    { id: 6, name: "Fig", price: 90, quantity: 1, description: "Tasty figs" },
    { id: 7, name: "Grape", price: 60, quantity: 1, description: "Fresh grapes" },
    { id: 8, name: "Guava", price: 80, quantity: 1, description: "Sweet guavas" },
];
//{ deleteItem, updateItem, updatePrice, updateQuanity, index }: { deleteItem: (index: number) => void; updateItem: (index: number, id: number, label: string) => void; updatePrice: (index: number, price: number) => void; updateQuanity: (index: number, quantity: number) => void; index: string }
export default function AutocompleteSearch({ index }: { index: number }) {
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
                ? { id: suggestion.id, name: suggestion.name, price: suggestion.price, quantity: 1, description: suggestion.description || "", link: suggestion.link || "#" }
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
                    ? { id: filtered[highlighted].id, name: filtered[highlighted].name, price: filtered[highlighted].price, quantity: 1, description: filtered[highlighted].description || "", link: filtered[highlighted].link || "#" }
                    : item)
            }
            );
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    return (
        <div className="flex space-x-4 relative w-auto">
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
                <ul className="z-10 absolute top-full -left-4 right-0 bg-buttonHover border border-border overflow-y-auto w-[30%]">
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
            <input
                type="text"
                placeholder="Description...each line should be comma separated"
                className="border p-2 w-[40%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={items[index].description}
                onChange={(e) => {
                    setItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...items[index], description: e.target.value }
                            : item);
                    })
                }}
            />
            <input
                type="number"
                placeholder="Price"
                className="border p-2 w-[10%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={items[index]?.price}
                onChange={(e) => {
                    setItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...items[index], price: Number(e.target.value) }
                            : item);
                    })
                }}
            />
            <input
                type="number"
                placeholder="Quantity"
                className="border p-2 w-[10%] border-border bg-background text-textPrimary focus:outline-textPrimary"
                value={items[index]?.quantity}
                onChange={(e) => {
                    setItems(pre => {
                        return pre.map((item, i) => i === index
                            ? { ...items[index], quantity: Number(e.target.value) }
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