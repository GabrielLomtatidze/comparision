import down_icon from "../assets/down_icon.png"
import plus_icon from "../assets/plus_icon.png"
import { useState } from "react";
import nextTo_icon from "../assets/nextTo_icon.png"

export default function TextComparison() {

    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("ქართული");
    const [inputOne, setInputOne] = useState<string>("");
    const [inputTwo, setInputTwo] = useState<string>("");

    const bothEmpty = !inputOne || !inputTwo;

    const options = ["ქართული", "English"];

    return (
        <>
            <div className="text_comparison">
                <div className="inside_area">
                    <div className="top_area">
                        <div className="left_side">
                            <div className="select" onClick={() => setOpen(!open)}>
                                <p className="select_text">{selected}</p>
                                <img
                                    src={down_icon}
                                    alt="down_icon"
                                    className={open ? "rotate" : ""}
                                />
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
                                                onChange={() => {
                                                    setSelected(item);
                                                    setOpen(false);
                                                }}
                                            />
                                            <span className="radio_text">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                            <input type="checkbox" className="check_box" />
                            <p className="check_box_text">ფორმატის შენარჩუნება</p>
                        </div>
                        <button className="new_add_button">
                            <img src={plus_icon} alt="plus_icon" />
                            ახალის გახსნა
                        </button>
                    </div>

                    <div className="logic_area">
                        <div className="input_area">
                            <textarea id="" placeholder="დაიწყე დაწერა..." value={inputOne} onChange={(e) => setInputOne(e.target.value)} />
                            <img src={nextTo_icon} alt="nextTo_icon" style={{width: "32px", height: "32px"}}/>
                            <textarea id="" placeholder="დაიწყე დაწერა..." value={inputTwo} onChange={(e) => setInputTwo(e.target.value)} />
                        </div>
                        <button style={{ backgroundColor: bothEmpty ? "#888991" : "#4571E4" }}>შედარება</button>
                    </div>

                </div>
            </div>
        </>
    )
}