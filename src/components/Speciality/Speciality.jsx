import React, { useEffect, useState } from 'react';
import './Speciality.css';

import { assets, specialityData } from '../../assets/assets_frontend/assets';



export default function Speciality() {
    let [specialities,setSpecialities]=useState([]);


    useEffect(()=> {
        setSpecialities(specialityData);
    },[])
  return (
    <section className="speciality-section">
      <h2 className="speciality-title">Find by Speciality</h2>
      <p>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.</p>
      <div className="speciality-grid">
        {specialities.map((item, index) => (
          <div className="speciality-card" key={index}>
            <img src={item.image} alt={item.name} className="speciality-image" loading='lazy'/>
            <p className="speciality-name">{item.speciality}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
