import '../styles/components/_navBar.css'
import icon from "../assets/main_logo.png"
import check_icon from "../assets/check.png"
import spelling_icon from "../assets/Spelling.png"
import mic_icon from "../assets/mic.png"
import text_icon from "../assets/text_icon.png"
import documentation_icon from "../assets/document_icon.png"
import profile_icon from "../assets/user_image.png"
import dots_icon from "../assets/dots.png"

export default function Siderbar() {


    return (
        <>
            <div className="nav_bar">
                <div className="logo_area">
                    <img src={icon} alt="logo" />
                    <p className="logo_text">Enagram</p>
                </div>

                <div className="nav_area">
                    <div className="nav_item">
                        <img src={check_icon} alt="check_icon" />
                        <p className="nav_item_text">მართლმწერი</p>
                    </div>
                    <div className="nav_item active">
                        <img src={spelling_icon} alt="spelling_icon" />
                        <p className="nav_item_text">ტექსტის შედარება</p>
                    </div>
                    <div className="nav_item ">
                        <img src={mic_icon} alt="mic_icon" />
                        <p className="nav_item_text">ხმა - ტექსტი</p>
                    </div>
                    <div className="nav_item">
                        <img src={text_icon} alt="text_icon" />
                        <p className="nav_item_text">ტექსტი - ხმა</p>
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