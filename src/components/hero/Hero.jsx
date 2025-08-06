import React from 'react'
import "./hero.css"
import { assets } from '../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
import { delay, motion } from 'framer-motion'

const Hero = () => {
    const scrollToSpeciality = (e) => {
        e.preventDefault();
        const specialitySection = document.getElementById('speciality');
        if (specialitySection) {
            specialitySection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    

    return (
        <motion.div className="hero">
            <motion.div className="text">
                <motion.h2>book appointment with trusted doctors</motion.h2>
                <motion.div className="info">
                    <div className="images">
                        <img src={assets.group_profiles} alt="check connection" loading='lazy' />
                    </div>
                    <p>
                        Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.
                    </p>
                </motion.div>
                <motion.a href="/#speciality" className="book-appointment" onClick={scrollToSpeciality}>book appointment <img src={assets.arrow_icon} alt="check connection" loading='lazy'/></motion.a>
            </motion.div>
            <div className="image">
                <img src={assets.header_img} alt="check connection" loading='lazy' />
            </div>
        </motion.div>
    )
}

export default Hero

