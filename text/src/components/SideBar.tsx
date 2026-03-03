import left_icon from "../assets/left_icon.png"
import icon from "../assets/main_logo.png"
import check_icon from "../assets/check.png"
import spelling_icon from "../assets/Spelling.png"
import mic_icon from "../assets/mic.png"
import text_icon from "../assets/text_icon.png"
import documentation_icon from "../assets/document_icon.png"
import profile_icon from "../assets/user_image.png"
import dots_icon from "../assets/dots.png"
import arrow_right from "../assets/arrow_right.png"
import menu_icon from "../assets/menu_icon.png"

export default function Siderbar() {


    return (
        <>
            <div className="side_bar">
                <img src={left_icon} alt="left_icon" className="left_icon"/>
                <div className="logo_area">
                    <img src={icon} alt="logo" className="logo_icon"/>
                    <p className="logo_text">Enagram</p>
                </div>

                <div className="nav_area">
                    <div className="nav_item">
                        <img src={check_icon} alt="check_icon" />
                        <p className="nav_item_text">მართლმწერი</p>
                    </div>
                    <img src={menu_icon} alt="menu_icon" className="menu_icon"/>
                    <div className="nav_item active">
                        <img src={spelling_icon} alt="spelling_icon" />
                        <p className="nav_item_text">ტექსტის შედარება</p>
                    </div>
                    <div className="nav_item ">
                        <img src={mic_icon} alt="mic_icon" />
                        <p className="nav_item_text">ხმა <img src={arrow_right} alt="arrow_right" /> ტექსტი</p>
                    </div>
                    <div className="nav_item">
                        <img src={text_icon} alt="text_icon" />
                        <p className="nav_item_text">ტექსტი <img src={arrow_right} alt="arrow_right" /> ხმა</p>
                    </div>
                    <div className="nav_item">
                        <img src={documentation_icon} alt="documentation_icon" />
                        <p className="nav_item_text">PDF კონვერტაცია</p>
                    </div>
                </div>

                <div className="user_info_area">
                    <div className="user_details_area">
                        <div className="user_data">
                            <img src={profile_icon} alt="profile_icon" />
                            <p className="user_name">თამარ ონიანი</p>
                        </div>
                        <img src={dots_icon} alt="dots_icon" />
                    </div>
                </div>
            </div>
        </>
    )
}