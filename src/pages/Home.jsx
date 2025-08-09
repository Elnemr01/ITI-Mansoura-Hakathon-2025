import GoLoginSection from "../components/goLoginSection/GoLoginSection";
import HeroSection from "../components/Hero/HeroSection";
import Specialisty from "../components/specialistySection/Specialisty";
import TopDoctors from "../components/topDoctors/TopDoctors";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Specialisty />
      <TopDoctors />
      <GoLoginSection />
    </div>
  );
};

export default Home;
