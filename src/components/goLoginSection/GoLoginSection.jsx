import React from 'react'
import "./goLogin.css"
import {assets} from './../../assets/assets_frontend/assets'
import { Link } from 'react-router'


const GoLoginSection = () => {
    return (
        <section className='goLogin'>
            <div className="text">
                <h2>Book Appointment With 100+ Trusted Doctors</h2>
                <Link to={'/login'}>create account</Link>
            </div>
            <div className="image">
                <img src={assets.appointment_img} alt="check connection" loading='lazy' />
            </div>
        </section>
    )
}

export default GoLoginSection
