import down_icon from "../assets/down_icon.png"
import plus_icon from "../assets/plus_icon.png"
import { useState } from "react"
import nextTo_icon from "../assets/nextTo_icon.png"
import retry_icon from "../assets/retry_icon.png"
import * as Diff from "diff"
import Loader from "../components/Loader"
import spelling_icon from "../assets/Spelling.png"


type DiffViewProps = {
    text1: string;
    text2: string;
    side: "left" | "right";
}

export default function TextComparison() {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("ქართული");
    const [inputOne, setInputOne] = useState<string>("");
    const [inputTwo, setInputTwo] = useState<string>("");
    const [isDone, setisDone] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const bothEmpty = !inputOne || !inputTwo;
    const options = ["ქართული", "English"];


    function DiffView({ text1, text2, side }: DiffViewProps) {
        const diffs = Diff.diffChars(text1, text2);

        return (
            <div className="diff_result_box">
                {diffs.map((part, index) => {
                    if (!part.added && !part.removed) return <span key={index}>{part.value}</span>;
                    if (part.removed && side === "left") return <span key={index} className="diff_deleted">{part.value}</span>;
                    if (part.added && side === "right") return <span key={index} className="diff_inserted">{part.value}</span>;
                    return null;
                })}
            </div>
        );
    }

    const handleCompare = () => {
        if (bothEmpty) return;
        setIsLoading(true);

        const duration = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // 2–5 seconds
        setTimeout(() => {
            setIsLoading(false);
            setisDone(true);
        }, duration);
    };

    const handleReset = () => {
        setInputOne("");
        setInputTwo("");
        setisDone(false);
        setIsLoading(false);
    };

    return (
        <>
            <div className="text_comparison">
                <div className="selected_page">
                    <div className="selected_page_item">
                        <img src={spelling_icon} alt="spelling_icon" />
                        <p className="selected_page_item_text">ტექსტის შედარება</p>
                        <img src={down_icon} alt="down_icon" className="down_icon"/>
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
                                            <input
                                                type="radio"
                                                name="language"
                                                value={item}
                                                checked={selected === item}
                                                onChange={() => { setSelected(item); setOpen(false); }}
                                            />
                                            <span className="radio_text">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                            <input type="checkbox" className="check_box" />
                            <p className="check_box_text">ფორმატის შენარჩუნება</p>
                        </div>
                        <button className="new_add_button" onClick={handleReset}>
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
                            ) : !isDone ? (
                                <>
                                    <textarea placeholder="დაიწყე დაწერა..." value={inputOne} onChange={(e) => setInputOne(e.target.value)} />
                                    <img src={nextTo_icon} alt="nextTo_icon" style={{ width: "32px", height: "32px" }} />
                                    <textarea placeholder="დაიწყე დაწერა..." value={inputTwo} onChange={(e) => setInputTwo(e.target.value)} />
                                </>
                            ) : (
                                <>
                                    <DiffView text1={inputOne} text2={inputTwo} side="left" />
                                    <img src={nextTo_icon} alt="nextTo_icon" style={{ width: "32px", height: "32px" }} />
                                    <DiffView text1={inputOne} text2={inputTwo} side="right" />
                                </>
                            )}
                        </div>

                        {!isDone && !isLoading ? (
                            <button className="compare_btn" style={{ backgroundColor: bothEmpty ? "#888991" : "#4571E4" }} onClick={handleCompare} disabled={bothEmpty}>
                                შედარება
                            </button>
                        ) : isDone ? (
                            <button className="compare_btn retry_btn" onClick={handleReset}>
                                <img src={retry_icon} alt="retry_icon" />
                                თავიდან
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}