import React, { useState } from "react";
import doctors from "./pageStyle/doctorsData";

const AllDoctors = () => {
  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const filteredDoctors = selectedSpecialty
    ? doctors.filter(
        (doc) => doc.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
      )
    : doctors;

  const handleSelect = (spec) => {
    setSelectedSpecialty(spec);
    setShowFilter(false);
  };

  return (
    <div className="font-sans px-6 md:px-20 py-8 bg-white">
      <div className="md:hidden mb-2 text-xs text-gray-900">
        Browse through the doctors specialist.
      </div>

      <div className="md:hidden mb-4 flex justify-start">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="px-4 py-2 bg-[#6C63FF] text-white rounded-md shadow"
        >
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className={`md:col-span-1 ${showFilter ? "" : "hidden md:block"}`}>
          <div className="hidden md:block text-xs text-gray-900 mb-6">
            Browse through the doctors specialist.
          </div>
          <div className="flex flex-col gap-3">
            {specialties.map((spec) => (
              <div
                key={spec}
                onClick={() => handleSelect(spec)}
                className={`border rounded-lg px-3 py-1.5 text-gray-700 text-sm cursor-pointer transition ${
                  selectedSpecialty === spec
                    ? "bg-[#6C63FF] text-white border-[#6C63FF]"
                    : "border-gray-300 hover:bg-[#EAEFFF] hover:border-[#6C63FF]"
                }`}
              >
                {spec}
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor) => (
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
            {filteredDoctors.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No doctors found for this specialty.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
