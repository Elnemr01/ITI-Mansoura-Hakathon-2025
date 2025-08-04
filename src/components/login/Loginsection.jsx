import  './loginsec.css'
import img1 from '../../assets/assets_frontend/appointment_img.png'
import { Link } from 'react-router'

const Loginsec = () => {
    return (
        <div className='logingsec'>
            <div className='text'>
                <h2>Book Appointment With 100+<br/>Trusted Doctors</h2>
                <Link  to='/login' className='createacc'>Create account</Link>
            </div>
            <img src={img1}></img>
        </div>
    )
}

export default Loginsec
