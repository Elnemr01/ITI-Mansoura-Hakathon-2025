import React, { useContext, useEffect, useState } from 'react'
import './pageStyle/allDoctorStyle.css'
import FilterBySpeciality from '../components/filterBySpeciality/FilterBySpeciality'
import { doctors } from '../assets/assets_frontend/assets';
import DoctorCard from '../components/doctorCard/DoctorCard';
import { OurContext } from '../contextAPI/FilterName';

const AllDoctors = () => {
    const [allDoc,setAllDoc]=useState([]);
    const {filterName}=useContext(OurContext);
    
    useEffect(()=> {
        if(filterName!=='') {
            setAllDoc(doctors.filter((e)=> e.speciality===filterName));
        }
        else {
            setAllDoc(doctors);
        }
    },[filterName]);

    return (
        <section className="allDoctorsPage">
            <p className="action">
                Browse through the doctors specialist.
            </p>
            <div className="content">
                <FilterBySpeciality/>
                <div className="allDoctors">
                    {
                        allDoc.map((e)=> <DoctorCard doctor={e} key={e._id}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default AllDoctors
