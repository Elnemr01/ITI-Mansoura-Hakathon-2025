import React from 'react'
import "./pageStyle/aboutPage.css"
import CommonTitle from '../components/commonTitle/CommonTitle'
import { assets } from "./../assets/assets_frontend/assets"
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='aboutPage'>
            <CommonTitle word1={'about'} word2={'us'} />

            <div className="aboutLanding">
                <motion.div
                    className="image"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={assets.about_image} alt="check Connection" loading='lazy' />
                </motion.div>

                <motion.div
                    className="text"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                    <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                    <h1>our vision</h1>
                    <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </motion.div>
            </div>

            <CommonTitle word1={'why'} word2={'choose us'} />
            <div className="reasons">
                {[
                    {
                        title: "efficiency:",
                        text: "Streamlined appointment scheduling that fits into your busy lifestyle."
                    },
                    {
                        title: "Convenience:",
                        text: "Streamlined appointment scheduling that fits into your busy lifestyle."
                    },
                    {
                        title: "personalization:",
                        text: "Tailored recommendations and reminders to help you stay on top of your health."
                    }
                ]
                .map((item, index) => (
                    <motion.div
                        key={index}
                        className="reason"
                        initial={{ opacity: 0, y: "100px" }}  
                        whileInView={{ opacity: 1, y: 0 }}  
                        transition={{
                            x: { type: "spring", stiffness: 60, damping: 18 },
                            opacity: { duration: 1.3 },
                            delay: index * 0.3,
                        }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default About