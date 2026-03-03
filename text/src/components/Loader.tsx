import loader_icon from "../assets/loader_icon.png"


export default function Loader() {

    return (
        <>
            <div className="loader">
                <img src={loader_icon} alt="loader_icon" />
                <div className="loader_right_side">
                    <p>Converting...Thank you For your Patience</p>
                    <div className="loader_fill_area">
                        <p className="fill_info">30%</p>
                        <div className="loader_fill" />
                    </div>
                </div>
            </div>
        </>
    )
}