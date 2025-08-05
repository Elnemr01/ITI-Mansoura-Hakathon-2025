import React from "react";
import Speciality from "../components/Speciality/Speciality";
import Hero from "../components/Hero/Hero";
// import TopDoctors from '../components/topDoctors/TopDoctors';
// import GoLoginSection from '../components/goLoginSection/GoLoginSection';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Speciality />
      {/* <TopDoctors /> */}
      {/* <GoLoginSection /> */}
    </div>
  );
};

export default Home;
