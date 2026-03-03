import loader_icon from "../assets/loader_icon.png"
import { useState, useEffect } from "react"

export default function Loader() {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 95) {
                    clearInterval(interval);
                    return 95;
                }
                return prev + Math.floor(Math.random() * 8) + 3;
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="loader">
                <img src={loader_icon} alt="loader_icon" />
                <div className="loader_right_side">
                    <p>Converting...Thank you For your Patience</p>
                    <div className="loader_fill_area">
                        <p className="fill_info">{Math.min(progress, 95)}%</p>
                        <div style={{ width: "100%", height: "8px", borderRadius: "64px", backgroundColor: "#E1E1E1", marginLeft: "10px", overflow: "hidden" }}>
                            <div className="loader_fill" style={{ width: `${Math.min(progress, 95)}%`, borderRadius: "64px", backgroundColor: "#4571E4", transition: "width 0.3s ease", marginLeft: 0, }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}