import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AppointmentCard from '../components/appointmentCard/AppointmentCard';
import { OurContext } from '../contextAPI/FilterName';
import {motion} from 'framer-motion'
const Myappointments = () => {
    let appointmentArr =useSelector(state => state.appContainer);
    let [appointments,setAppointments]=useState([]);
    let {login} =useContext(OurContext);

    useEffect(()=>{
        setAppointments(appointmentArr);
    },[appointmentArr]);


    if (!login) return null;
    
    return (

        <motion.section
        id='Myappointments'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        > 
        
        <section className="myAppointments">
            <h2 className="pageName">my appointments</h2>

            <div className="appointments">
                {
                    appointments.map((e , idx)=> (
                     <motion.div
                       key={e.id} 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -20 }}
                       transition={{ duration: 0.8, delay: idx * 0.5 }}
                        >
                       <AppointmentCard key={idx} appointmentData={e}/>
                     </motion.div>
                    ))
                }
            </div>
        </section>
        </motion.section> 
    )
}


export default Myappointments
