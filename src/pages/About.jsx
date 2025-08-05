import React from 'react'
import "./pageStyle/aboutPage.css"
import CommonTitle from '../components/commonTitle/CommonTitle'
import {assets} from "./../assets/assets_frontend/assets"

const About = () => {
    return (
        <div className='aboutPage'>
                    <CommonTitle word1={'about'} word2={'us'}/>
                    <div className="aboutLanding">
                        <div className="image">
                            <img src={assets.about_image} alt="chect Connection" loading='lazy'/>
                        </div>
                        <div className="text">
                            <p>Welcome  to Prescripto, your trusted partner in managing your
                                healthcare needs conveniently and efficiently. At Prescripto, we
                                understand the challenges individuals face when it comes to scheduling
                                doctor appointments and managing their health records.
                            </p>
                            <p>
                                Prescripto is committed to excellence in healthcare technology.
                                We continuously strive to enhance our platform, integrating the 
                                latest advancements to improve user experience and deliver superior
                                service. Whether you're booking your first appointment or managing ongoing
                                care, Prescripto is here to support you every step of the way.
                            </p>
                            <h1>our visson</h1>
                            <p>
                                Our vision at Prescripto is to create a seamless healthcare
                                experience for every user. We aim to bridge the gap between 
                                patients and healthcare providers, making it easier for you to access
                                the care you need, when you need it.
                            </p>
                        </div>
                    </div>
                    <CommonTitle word1={'why'} word2={'choose us'}/>
                    <div className="reasons">
                        <div className="reason">
                            <h2>efficiency:</h2>
                            <p>
                                Streamlined appointment scheduling that fits into your busy lifestyle.
                            </p>
                        </div>
    
                        <div className="reason">
                            <h2>Convenience:</h2>
                            <p>
                                Streamlined appointment scheduling that fits into your busy lifestyle.
                            </p>
                        </div>
        
                        <div className="reason">
                            <h2>personalization:</h2>
                            <p>
                                Tailored recommendations and reminders to help you stay on top of your
                                health.
                            </p>
                        </div>
                    </div>
                </div>
    )
}

export default About
