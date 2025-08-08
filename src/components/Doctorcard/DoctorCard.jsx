import React from 'react'
import './card.css'
import { Link } from 'react-router'

const DoctorCard = ({doctor}) => {

let goToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

    return (
        <Link className='docCard' to={`/doctor/${doctor._id}`} onClick={()=> goToTop()}>
            <div className="image">
                <img src={doctor.image} alt="check connection" loading='lazy'/>
            </div>
            
            <div className="available">
                <p></p>
                <p>availabe</p>
            </div>
            <p className="name">{doctor.name}</p>
            <div className="speciality">{doctor.speciality}</div>
        </Link>
    )
}

export default DoctorCard
