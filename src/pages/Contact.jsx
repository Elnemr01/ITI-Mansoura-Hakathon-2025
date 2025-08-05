import React from 'react'
import "./pageStyle/contactPage.css"
import CommonTitle from '../components/commonTitle/CommonTitle'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
    return (
        <div className='contact'>
            <CommonTitle word1={'contact'} word2={'us'} showP={false}/>
            <div className="conLanding">
                <div className="image">
                    <img src={assets.contact_image} alt="check connection" loading='lazy'/>
                </div>
                <div className="info">
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
                </div>
            </div>
        </div>
    )
}

export default Contact
