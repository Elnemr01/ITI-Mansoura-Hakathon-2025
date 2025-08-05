import React from 'react'
import './appointmentCard.css'
import { useDispatch } from 'react-redux'
import { cancelAppointment } from '../../reduxToolKit/AppointmentSlice'

const AppointmentCard = ({appointmentData}) => {    
    const dispatch=useDispatch();
    return (
        <div className="appointmentCard">
            <div className="firstPart">
                <div className="docImage">
                    <img src={appointmentData.image} alt="chect connection" loading='lazy'/>
                </div>
                <ul className="appointmentData">
                    <li className="name">{appointmentData.name}</li>
                    <li className="speciality">{appointmentData.speciality}</li>
                    <li className="address">address: </li>
                    <li className="address1">{appointmentData.address.line1 || ''}</li>
                    <li className="address2">{appointmentData.address.line2 || ''}</li>
                    <li className="dateAndTime"><span>date & time:</span> {appointmentData.date?.dayNum} {appointmentData.date?.day} {appointmentData.date?.year} | {appointmentData.time}</li>
                </ul>
            </div>
            <div className="buttons">
                <button>pay online</button>
                <button onClick={()=> dispatch(cancelAppointment(appointmentData.id))}>cancel appointment</button>
            </div>
        </div>
    )
}

export default AppointmentCard
