import { Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { ChallanItems } from "~/routes/dashboard.challan.create";
import { productsSearchAPIURL, serialSearchAPIURL } from "../statics";

export default function ChallanAutocompleteSearch({ index }: { index: number }) {
    const [showProductSuggestions, setShowProductSuggestions] = useState(false);
    const [showSerialSuggestions, setShowSerialSuggestions] = useState(false);

    const [prouctfilter, setProductFilter] = useState<ChallanItems[]>([]);
    const [serialfilter, setSerialFilter] = useState<string[]>([]);
    const [highlighted, setHighlighted] = useState<number>(-1);

    const productInputRef = useRef<HTMLInputElement>(null);
    const serialInputRef = useRef<HTMLTextAreaElement>(null);

    const [hasProductFocus, setProductFocus] = useState(false);
    const [hasSerialFocus, setSerialFocus] = useState(false);

    const { setChallanItems, challanItems } = useGlobalContext();
    const [serialInput, setSerialInput] = useState("");

    useEffect(() => {
        if (hasProductFocus) {
            if (challanItems[index].name.trim() === "") {
                setProductFilter([]);
                setShowProductSuggestions(false);
            } else if (showProductSuggestions || prouctfilter.length != 1 || prouctfilter[0].name.toLowerCase() != challanItems[index].name.toLowerCase()) {
                fetch(productsSearchAPIURL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(challanItems[index].name),
                })
                    .then(async (res) => {
                        const filteredList: ChallanItems[] = await res.json();
                        setProductFilter(filteredList);
                        setShowProductSuggestions(filteredList.length > 0);
                        setHighlighted(-1);
                    })
                    .catch((err) => {
                        console.error("Error fetching suggestions:", err);
                    });
            }
        }
    }, [challanItems[index].name]);


    useEffect(() => {
        if (hasSerialFocus) {
            if (serialInput === "") {
                setProductFilter([]);
                setShowSerialSuggestions(false);
            }

            else if (showSerialSuggestions || prouctfilter.length != 1 || serialfilter[0].toLowerCase() != serialInput.toLowerCase()) {
                fetch(serialSearchAPIURL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ "query": serialInput, no: challanItems[index].no })
                })
                    .then(async (res) => {
                        const filteredList: string[] = await res.json();
                        console.log("asdj", filteredList);
                        setSerialFilter(filteredList);
                        setShowSerialSuggestions(filteredList.length > 0);
                        setHighlighted(-1);
                    })
                    .catch((err) => {
                        console.error("Error fetching serial suggestions:", err);
                    });
            }
        }
    }, [serialInput]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setInput(e.target.value);
        setChallanItems((pre) => {
            return pre.map((item, i) => i === index
                ? { ...challanItems[index], name: e.target.value }
                : item)
        });
    };

    const handleProductSuggestionClick = (suggestion: ChallanItems) => {
        //setInput(suggestion.label);
        setChallanItems(pre => {
            return pre.map((item, i) => i == index
                ? { no: suggestion.no, name: suggestion.name, quantity: 1, sno: [], unit: suggestion.unit || "pcs" }
                : item)
        });
        setShowProductSuggestions(false);
    };

    const handleSerialSuggestionClick = (suggestion: string) => {
        //setInput(suggestion.label);
        setChallanItems(pre => {
            return pre.map((item, i) => i == index
                ? { ...item, sno: [suggestion] }
                : item)
        });
        setShowSerialSuggestions(false);
    };


    const handleProductBlur = () => {
        // Delay to allow click event to register
        setTimeout(() => setShowProductSuggestions(false), 100);
        setProductFocus(false);
    };

    const handleSerialBlur = () => {
        // Delay to allow click event to register
        setTimeout(() => setShowSerialSuggestions(false), 100);
        setSerialFocus(false);
    };

    const handleProductFocus = () => {
        if (prouctfilter.length > 0) setShowProductSuggestions(true);
        setProductFocus(true);
    };

    const handleSerialFocus = () => {
        if (prouctfilter.length > 0) setShowSerialSuggestions(true);
        setSerialFocus(true);
    };

    const handleProductKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!showProductSuggestions) return;
        if (e.key === "ArrowDown") {
            setHighlighted(prev =>
                prev < prouctfilter.length - 1 ? prev + 1 : 0
            );
        } else if (e.key === "ArrowUp") {
            setHighlighted(prev =>
                prev > 0 ? prev - 1 : prouctfilter.length - 1
            );
        } else if (e.key === "Enter" && highlighted >= 0) {
            //setInput(filtered[highlighted].label);
            setProductFilter([prouctfilter[highlighted]]);
            setShowProductSuggestions(false);
            setChallanItems(pre => {
                return pre.map((item, i) => i === index
                    ? { no: prouctfilter[highlighted].no, name: prouctfilter[highlighted].name, quantity: 1, sno: [], unit: prouctfilter[highlighted].unit || "pcs" }
                    : item)
            });
        } else if (e.key === "Escape") {
            setShowProductSuggestions(false);
        }
    };

    const handleSerialKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!showSerialSuggestions) return;
        if (e.key === "ArrowDown") {
            setHighlighted(prev =>
                prev < prouctfilter.length - 1 ? prev + 1 : 0
            );
        } else if (e.key === "ArrowUp") {
            setHighlighted(prev =>
                prev > 0 ? prev - 1 : prouctfilter.length - 1
            );
        } else if (e.key === "Enter" && highlighted >= 0) {
            //setInput(filtered[highlighted].label);
            setProductFilter([prouctfilter[highlighted]]);
            setShowSerialSuggestions(false);
            setChallanItems(pre => {
                return pre.map((item, i) => i === index
                    ? { ...item, sno: [serialfilter[highlighted]] }
                    : item)
            });
        } else if (e.key === "Escape") {
            setShowSerialSuggestions(false);
        }
    };


    return (
        <div className="grid grid-cols-10 w-auto relative gap-x-2">
            <div className="col-span-3 relative">
                <input
                    ref={productInputRef}
                    type="text"
                    value={challanItems[index].name}
                    onChange={handleInputChange}
                    onBlur={handleProductBlur}
                    onFocus={handleProductFocus}
                    onKeyDown={handleProductKeyDown}
                    className="w-full inputHollow"
                    placeholder="Search Product..."
                    autoComplete="off"
                />

                {showProductSuggestions && (
                    <ul className="w-full z-10 absolute top-full -left-0 right-0 bg-buttonHover border border-border overflow-y-auto max-h-96">
                        {prouctfilter.map((s, idx) => (
                            <li
                                key={s.no}
                                onMouseDown={() => handleProductSuggestionClick(s)}
                                className={`${idx === highlighted ? "bg-buttonHover" : "bg-background"} p-2 cursor-pointer text-textSecondary`}
                                onMouseEnter={() => setHighlighted(idx)}
                            >
                                {s.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-span-4 relative border border-border h-min">
                <div className=" flex flex-wrap w-full h-full p-0 justify-between">
                    <input
                        placeholder="Serial Numbers separated by commas..."
                        className="p-2 border-none bg-background focus:outline-none flex-grow"
                        value={serialInput/*challanItems[index].sno?.join(",")*/}
                        rows={1}
                        onFocus={handleSerialFocus}
                        onKeyDown={handleSerialKeyDown}
                        onChange={(e) => {
                            setSerialInput(e.target.value);
                            /*setChallanItems(pre => {
                                const snos = e.target.value.replace(/[\s,]+/g, ",").trim().split(",");
                                return pre.map((item, i) => i === index
                                    ? { ...challanItems[index], sno: snos, quantity: snos.length }
                                    : item);
                            })*/
                        }}
                    />
                    <div className="flex-wrap flex items-center gap-2">
                        {["123", "456", "789123"].map(e => { return <div className="p-1 bg-headerBackground">{e}<button className="ml-2 px-1 hover:bg-buttonHover">X</button></div> })}
                    </div>
                </div>
                {showSerialSuggestions && (
                    <ul className="w-full z-10 absolute top-full -left-0 right-0 bg-buttonHover border border-border overflow-y-auto max-h-96">
                        {serialfilter.map((s, idx) => (
                            <li
                                key={s}
                                onMouseDown={() => handleSerialSuggestionClick(s)}
                                className={`${idx === highlighted ? "bg-buttonHover" : "bg-background"} p-2 cursor-pointer text-textSecondary`}
                                onMouseEnter={() => setHighlighted(idx)}
                            >
                                {s}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Quantity"
                    className="inputHollow w-full"
                    value={challanItems[index]?.quantity}
                    onChange={(e) => {
                        setChallanItems(pre => {
                            return pre.map((item, i) => i === index
                                ? { ...challanItems[index], quantity: Number(e.target.value || undefined) }
                                : item);
                        })
                    }}
                />
            </div>
            <div>
                <input
                    type="string"
                    placeholder="Unit"
                    className="inputHollow w-full"
                    value={challanItems[index]?.unit}
                    onChange={(e) => {
                        setChallanItems(pre => {
                            return pre.map((item, i) => i === index
                                ? { ...challanItems[index], unit: e.target.value }
                                : item);
                        })
                    }}
                />
            </div>
            <div>
                <button className="hover:bg-headerBackground bg-buttonHover p-2" onClick={(e) => {
                    setChallanItems(pre =>
                        pre.filter((_, i) => i != index)
                    );
                }}>
                    <Minus className="w-full text-textSecondary" />
                </button>
            </div>
        </div>
    );
}