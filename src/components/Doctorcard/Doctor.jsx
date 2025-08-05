import React from 'react';
import './Doctor.css';
import { doctors } from '../../assets/assets_frontend/assets'; 

export default function Doctor() {
  return (
    <div className="doctors-section">
      <h2 className="section-title">Top Doctors to Book</h2>
      <p className="section-subtitle">Simply browse through our extensive list of trusted doctors.</p>

      <div className="doctor-list">
        {doctors.map((doc) => (
          <div className="doctor-card" key={doc._id}>
            <div className="doctor-img-container">
              <img src={doc.image} alt={doc.name} className="doctor-img" /> 
import React from 'react'
import './card.css'
import { Link } from 'react-router'

const DoctorCard = ({doctor}) => {
    return (
        <Link className='docCard' to={`/doctor/${doctor._id}`}>
            <div className="image">
                <img src={doctor.image} alt="check connection" loading='lazy'/>
            </div>
            <div className="available">
                <p></p>
                <p>availabe</p>
            </div>
            <h3 className="doctor-name">{doc.name}</h3>
            <p className="doctor-specialty">{doc.speciality}</p> 
          </div>
        ))}
      </div>

      <div className="more-button-container">
        <button className="more-button">more</button>
      </div>
    </div>
  );
}
            <p className="name">{doctor.name}</p>
            <div className="speciality">{doctor.speciality}</div>
        </Link>
    )
}

export default DoctorCard
