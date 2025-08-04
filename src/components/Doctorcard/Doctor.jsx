import React from 'react';
import './Doctor.css';
import doc1Img from '../../assets/assets_frontend/doc1.png';
import doc2Img from '../../assets/assets_frontend/doc2.png';
import doc11Img from '../../assets/assets_frontend/doc11.png';
import doc4Img from '../../assets/assets_frontend/doc4.png';
import doc5Img from '../../assets/assets_frontend/doc5.png';
import doc6Img from '../../assets/assets_frontend/doc6.png';
import doc7Img from '../../assets/assets_frontend/doc7.png';
import doc8Img from '../../assets/assets_frontend/doc8.png';
import doc9Img from '../../assets/assets_frontend/doc9.png';
import doc10Img from '../../assets/assets_frontend/doc10.png';

const doctors = [
  { name: "Dr. Richard James", specialty: "Gastroenterologist", img: doc1Img },
  { name: "Dr. Emily Larson", specialty: "Gynecologist", img: doc2Img },
  { name: "Dr. Sarah Patel", specialty: "Dermatologist", img: doc11Img },
  { name: "Dr. Christopher Lee", specialty: "Pediatricians", img: doc4Img },
  { name: "Dr. Jennifer Garcia", specialty: "Neurologist", img: doc5Img },
  { name: "Dr. Andrew Williams", specialty: "Neurologist", img: doc6Img },
  { name: "Dr. Christopher Davis", specialty: "General physician", img: doc7Img },
  { name: "Dr. Timothy White", specialty: "Gynecologist", img: doc8Img },
  { name: "Dr. Ava Mitchell", specialty: "Dermatologist", img: doc9Img },
  { name: "Dr. Jeffrey King", specialty: "Pediatricians", img: doc10Img },
];

export default function Doctor() {
  return (
    <div className="doctors-section">
      <h2 className="section-title">Top Doctors to Book</h2>
      <p className="section-subtitle">Simply browse through our extensive list of trusted doctors.</p>
      
      <div className="doctor-list">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <div className="doctor-img-container">
              <img src={doc.img} alt={doc.name} className="doctor-img" />
            </div>
            <div className="doctor-status">
              <span className="status-dot"></span> Available
            </div>
            <h3 className="doctor-name">{doc.name}</h3>
            <p className="doctor-specialty">{doc.specialty}</p>
          </div>
        ))}
      </div>

      <div className="more-button-container">
        <button className="more-button">more</button>
      </div>
    </div>
  );
}