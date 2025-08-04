import React from 'react';
import Speciality from '../components/Speciality/Speciality';
import Hero from 'src/components/Hero/Hero.jsx';
// import TopDoctors from '../components/topDoctors/TopDoctors';
// import GoLoginSection from '../components/goLoginSection/GoLoginSection';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Speciality />
      {/* <TopDoctors /> */}
      {/* <GoLoginSection /> */}
    </div>
  );
};

export default Home;
