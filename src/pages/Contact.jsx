import React from 'react';
import "./pageStyle/contactPage.css";
import CommonTitle from '../components/commonTitle/CommonTitle';
import { assets } from '../assets/assets_frontend/assets';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className='contact'>
            <CommonTitle word1={'contact'} word2={'us'} showP={false} />

            <div className="conLanding">
                <motion.div
                    className="image"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img src={assets.contact_image} alt="check connection" loading='lazy' />
                </motion.div>

                <motion.div
                    className="info"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h1>our store</h1>
                    <div className="site">
                        <p>54709 Willms Station</p>
                        <p>Suite 350, Washington, USA</p>
                    </div>
                    <div className="tele">
                        <p>Tel: (415) 555-0132</p>
                        <p>Email: elnemr@mans.com</p>
                    </div>
                    <h2>Careers at Forever</h2>
                    <p className="learnMore">Learn more about our teams and job openings.</p>
                    <button>explore jobs</button>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact;