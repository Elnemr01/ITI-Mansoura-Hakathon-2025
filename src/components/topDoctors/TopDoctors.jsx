import React, { useEffect, useState } from 'react'
import './topDoctors.css'
import { doctors } from '../../assets/assets_frontend/assets';
import HomeTitle from '../homeTitle/HomeTitle';
import DoctorCard from '../doctorCard/DoctorCard';
import { Link } from 'react-router';

const TopDoctors = () => {
    const [topDoc,setTopDoc]=useState([]);

    useEffect(()=> {
        setTopDoc(doctors);
    })

    return (
        <section className='topDoctors'>
            <HomeTitle text1={'Top Doctors to Book'}
            text2={'Simply browse through our extensive list of trusted doctors.'}/>

            <div className="doctorCard">
                {topDoc.slice(0,10).map((e)=> <DoctorCard doctor={e} key={e._id}/>)}
            </div>
            <Link to={'/allDocutors'}>more</Link>
        </section>
    )
}

export default TopDoctors
