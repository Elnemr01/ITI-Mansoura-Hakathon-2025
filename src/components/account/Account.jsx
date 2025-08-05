import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets_frontend/assets";
import './account.css';
import { OurContext } from "../../contextAPI/FilterName";
import { Link } from "react-router";

const Account = () => {
    const [profileLink, setProfileLink] = useState(false);
    const { setLogin, profileImage } = useContext(OurContext);

    return (
        <div className="account-container">
            <div className="profile-trigger">
                <img src={profileImage || assets.upload_area} className="profile-img" alt="check connection" loading="lazy"/>
                <img
                    src={assets.dropdown_icon}
                    className="w-3"
                    alt=""
                    onMouseEnter={() => setProfileLink(true)}
                />
            </div>

            <div className={`dropdown-container ${profileLink ? 'block' : 'hidden'}`}>
                <div
                    className="dropdown-box"
                    onMouseLeave={() => setProfileLink(false)}
                >
                    <Link to={'/my-profile'}>
                        <p className="dropdown-item">My Profile</p>
                    </Link>
                    <Link to={'/my-appointments'}>
                        <p className="dropdown-item">My Appointments</p>
                    </Link>
                    <p className="dropdown-item" onClick={() => {
                        setLogin(false);
                        window.location.reload()
                    }}>Logout</p>
                </div>
            </div>
        </div>
    );
};

export default Account;
