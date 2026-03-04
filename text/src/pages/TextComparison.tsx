import down_icon from "../assets/down_icon.png"
import plus_icon from "../assets/plus_icon.png"
import { useState, useEffect } from "react"
import nextTo_icon from "../assets/nextTo_icon.png"
import * as Diff from "diff"
import Loader from "../components/Loader"
import spelling_icon from "../assets/Spelling.png"
import retry_icon from "../assets/retry_icon.png"

type DiffViewProps = {
    text1: string;
    text2: string;
    side: "left" | "right";
    onChange: (value: string) => void;
};

export default function TextComparison() {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("ქართული");
    const [inputOne, setInputOne] = useState<string>("");
    const [inputTwo, setInputTwo] = useState<string>("");
    const [isDone, setIsDone] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const bothEmpty = !inputOne || !inputTwo;
    const options = ["ქართული", "English"];

    function DiffView({ text1, text2, side, onChange }: DiffViewProps) {
        const diffs = Diff.diffChars(text1, text2);

        const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
            const newText = e.currentTarget.innerText;
            onChange(newText);
        };

        return (
            <div className="diff_result_box editable" contentEditable suppressContentEditableWarning onInput={handleInput}>
                {diffs.map((part, index) => {
                    if (!part.added && !part.removed)
                        return <span key={index}>{part.value}</span>;

                    if (part.removed && side === "left")
                        return (
                            <span key={index} className="diff_deleted">
                                {part.value}
                            </span>
                        );

                    if (part.added && side === "right")
                        return (
                            <span key={index} className="diff_inserted">
                                {part.value}
                            </span>
                        );

                    return null;
                })}
            </div>
        );
    }

    const handleCompare = () => {
        if (bothEmpty) return;
        setIsLoading(true);

        const duration =
            Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;

        setTimeout(() => {
            setIsLoading(false);
            setIsDone(true);
        }, duration);
    };

    const handleReset = () => {
        setInputOne("");
        setInputTwo("");
        setIsDone(false);
        setIsLoading(false);
    };

    useEffect(() => {
        if (isDone) {
            setIsDone(false);
        }
    }, [inputOne, inputTwo]);

    return (
        <div className="text_comparison">
            <div className="selected_page">
                <div className="selected_page_item">
                    <img src={spelling_icon} alt="spelling_icon" />
                    <p className="selected_page_item_text">
                        ტექსტის შედარება
                    </p>
                    <img src={down_icon} alt="down_icon" className="down_icon" />
                </div>
            </div>

            <div className="inside_area">
                <div className="top_area">
                    <div className="left_side">
                        <div className="select" onClick={() => setOpen(!open)}>
                            <p className="select_text">{selected}</p>
                            <img src={down_icon} alt="down_icon" className={open ? "rotate" : ""} />
                        </div>

                        {open && (
                            <div className="dropdown">
                                {options.map((item) => (
                                    <label key={item} className="option">
                                        <input type="radio" name="language" value={item} checked={selected === item} onChange={() => { setSelected(item); setOpen(false) }} />
                                        <span className="radio_text">
                                            {item}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}

                        <input type="checkbox" className="check_box" />
                        <p className="check_box_text">
                            ფორმატის შენარჩუნება
                        </p>
                    </div>

                    <button className="new_add_button" style={{backgroundColor: bothEmpty ? "#888991" : "#4571E4"}} onClick={handleReset}>
                        <img src={plus_icon} alt="plus_icon" />
                        ახალის გახსნა
                    </button>
                </div>

                <div className="logic_area">
                    <div className="input_area">
                        {isLoading ? (
                            <div className="loader_area">
                                <Loader />
                            </div>
                        ) : (
                            <>
                                {!isDone ? (
                                    <>
                                        <textarea placeholder="დაიწყე დაწერა..." value={inputOne} onChange={(e) => setInputOne(e.target.value)} />
                                        <img src={nextTo_icon} alt="nextTo_icon" style={{ width: "32px", height: "32px" }} />

                                        <textarea placeholder="დაიწყე დაწერა..." value={inputTwo} onChange={(e) => setInputTwo(e.target.value)} />
                                    </>
                                ) : (
                                    <>
                                        <DiffView text1={inputOne} text2={inputTwo} side="left" onChange={setInputOne} />
                                        <img src={nextTo_icon} alt="nextTo_icon" style={{ width: "32px", height: "32px", }} />
                                        <DiffView text1={inputOne} text2={inputTwo} side="right" onChange={setInputTwo} />
                                    </>
                                )}
                            </>
                        )}
                    </div>

                    {!isDone && !isLoading ? (
                            <button className="compare_btn" style={{ backgroundColor: bothEmpty ? "#888991" : "#4571E4" }} onClick={handleCompare} disabled={bothEmpty}>
                                შედარება
                            </button>
                        ) : isDone ? (
                            <button className="compare_btn retry_btn" onClick={handleCompare}>
                                <img src={retry_icon} alt="retry_icon" />
                                შედარება
                            </button>
                        ) : null}
                </div>
            </div>
        </div>
    );
}