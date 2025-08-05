import { assets } from "../../assets/assets_frontend/assets"
import './doctorDetils.css'
const DoctorDetils = ({ doctors }) => {
    return (
        <>
            <div className="doctor">
                <div className="doctor-image">
                    <img src={doctors.image} alt="" />
                </div>

                <div className="doctor-info">
                    <div className="flex gap-2">
                        <h1 className="doctor-name">Dr. {doctors.name}</h1>
                        <img src={assets.verified_icon} alt="" />
                    </div>

                    <div className="doctor-degree">
                        <p>{doctors.degree} - {doctors.speciality}</p>
                        <button className="doctor-exp">{doctors.experience}</button>
                    </div>

                    <div>
                        <p className="about-title">
                            About <img className="w-3" src={assets.info_icon} alt="" />
                        </p>
                        <p className="about-text">{doctors.about}</p>
                        <p className="fee-text">Appointment fee: <span className="fee-amount">${doctors.fees}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DoctorDetils