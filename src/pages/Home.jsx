import GoLoginSection from "../components/goLoginSection/GoLoginSection";
import Specialisty from "../components/specialistySection/Specialisty";
import TopDoctors from "../components/topDoctors/TopDoctors";

const Home = () => {
    return (
        <div className="home">
        <Specialisty />
        <TopDoctors />
        <GoLoginSection />
        </div>
    );
};

export default Home;
