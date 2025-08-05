import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllDoctors from "./pages/AllDoctors";
import Login from "./pages/Login";
import Doctor from "./pages/Doctor";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Myappointments from "./pages/Myappointments.jsx";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/allDoctors" element={<AllDoctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctor/:id" element={<Doctor />} />
            <Route path="/my-appointments" element={<Myappointments />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
