import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/assets_frontend/header_img.png";
import groupProfiles from "../assets/assets_frontend/group_profiles.png";
import Gastroenterologist from "../assets/assets_frontend/Gastroenterologist.svg";
import GeneralPhysician from "../assets/assets_frontend/General_physician.svg";
import Neurologist from "../assets/assets_frontend/Neurologist.svg";
import appointmentImg from "../assets/assets_frontend/appointment_img.png";

import Pediatricians from "../assets/assets_frontend/Pediatricians.svg";
import Gynecologist from "../assets/assets_frontend/Gynecologist.svg";
import Dermatologist from "../assets/assets_frontend/Dermatologist.svg";
import doctors from "./pageStyle/doctorsData";


const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex justify-center px-6 md:px-20 py-16">
        <div className="bg-[#6C63FF] p-16 rounded-3xl text-white shadow-lg flex items-center gap-10 w-full max-w-full">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6 leading-snug">
              Book Appointment <br />
              With Trusted Doctors
            </h1>

            <div className="flex items-center gap-6 mb-6 max-w-lg">
              <img
                src={groupProfiles}
                alt="Group Profiles"
                className="w-24 h-auto rounded-full"
              />
              <p className="text-sm">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
            </div>

            <button className="bg-white text-[#6C63FF] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Book appointment →
            </button>
          </div>

          <div className="flex-shrink-0">
            <img
              src={heroImg}
              alt="Doctors Illustration"
              className="max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      <section className="text-center mt-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-4">Find by Speciality</h2>
        <p className="text-base max-w-xl mx-auto mb-8">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>

        <div className="flex justify-center gap-8 flex-wrap ">
          {[
            { img: Dermatologist, label: "Dermatologist" },
            { img: Gynecologist, label: "Gynecologist" },
            { img: Pediatricians, label: "Pediatricians" },
            { img: Neurologist, label: "Neurologist" },
            { img: GeneralPhysician, label: "General Physician" },
            { img: Gastroenterologist, label: "Gastroenterologist" },
          ].map(({ img, label }) => (
            <div key={label} className="text-center">
              <img
                src={img}
                alt={label}
                className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
              <span className="text-sm text-gray-600 block mt-2">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top Doctors to Book Section */}
      <section className="text-center mt-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-2">Top Doctors to Book</h2>
        <p className="text-sm text-gray-600 mb-8">
          Simply browse through our extensive list of trusted doctors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {doctors.slice(0, 10).map((doctor) => (
            <div
              key={doctor.id}
              className="bg-[#EAEFFF] shadow-md rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="mx-auto mb-4 w-30 h-30 rounded-full object-cover"
              />
              <div
                className={`mb-2 font-semibold ${
                  doctor.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {doctor.available ? "Available" : "Unavailable"}
              </div>
              <h3 className="font-bold text-lg">{doctor.name}</h3>
              <p className="text-gray-600 text-sm">{doctor.specialty}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/all-doctors"
            className="bg-[#EAEFFF] text-gray-800 font-semibold px-6 py-2 rounded-xl hover:bg-[#cfdfff] transition"
          >
            More
          </Link>
        </div>
      </section>

      <div className="mt-8 flex justify-center">
  
</div>

<section className="flex justify-center px-6 md:px-20 py-16 mt-12">
  <div className="bg-[#6C63FF] p-16 rounded-3xl text-white shadow-lg flex items-center gap-10 w-full max-w-full">
    <div className="flex-1">
      <h1 className="text-5xl font-bold mb-6 leading-snug">
        Book Appointment <br />
        With 100+ Trusted Doctors
      </h1>

      <div className="flex items-center gap-6 mb-6 max-w-lg">
        <img
          src={groupProfiles}  
          alt="Group Profiles"
          className="w-24 h-auto rounded-full"
        />
        <p className="text-sm">
          Simply browse through our extensive list of trusted doctors,
          schedule your appointment hassle-free.
        </p>
      </div>

      <button className="bg-white text-[#6C63FF] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
        Book appointment →
      </button>
    </div>

    <div className="flex-shrink-0">
      <img
        src={appointmentImg}
        alt="Doctors Illustration"
        className="max-w-md h-auto"
      />
    </div>
  </div>
</section>



    </div>
  );
};

export default Home;
