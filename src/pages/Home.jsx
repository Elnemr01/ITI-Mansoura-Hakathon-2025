

import GoLoginSection from '../components/goLoginSection/GoLoginSection'
import Hero from '../components/hero/Hero'
import Specialisty from '../components/specialistySection/Specialisty'
import TopDoctors from '../components/topDoctors/TopDoctors'


const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <Specialisty/>
            <TopDoctors/>
            <GoLoginSection/>
        </div>
    )
}

export default Home
