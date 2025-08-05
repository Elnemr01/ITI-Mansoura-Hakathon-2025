import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AppointmentCard from '../components/appointmentCard/AppointmentCard';
import { OurContext } from '../contextAPI/FilterName';

const Myappointments = () => {
    let appointmentArr =useSelector(state => state.appContainer);
    let [appointments,setAppointments]=useState([]);
    let {login} =useContext(OurContext);

    useEffect(()=>{
        setAppointments(appointmentArr);
    },[appointmentArr]);


    if (!login) return null;
    
    return (
        <section className="myAppointments">
            <h2 className="pageName">my appointments</h2>
            <div className="appointments">
                {
                    appointments.map((e , idx)=> <AppointmentCard key={idx} appointmentData={e}/>)
                }
            </div>
        </section>
    )
}


export default Myappointments
