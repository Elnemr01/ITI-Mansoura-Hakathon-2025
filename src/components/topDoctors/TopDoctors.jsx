import React, { useEffect, useRef } from 'react';
import './topDoctors.css';
import { doctors } from '../../assets/assets_frontend/assets';
import HomeTitle from '../homeTitle/HomeTitle';
import DoctorCard from '../Doctorcard/DoctorCard';
import { Link } from 'react-router-dom';

const TopDoctors = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('visible');
          } else {
            el.classList.remove('visible'); // علشان الإعادة
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements = containerRef.current.querySelectorAll('.animated');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="topDoctors" ref={containerRef}>
      <HomeTitle
        text1="Top Doctors to Book"
        text2="Simply browse through our extensive list of trusted doctors."
      />

      <div className="doctorCard">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            key={doctor._id}
            className="animated"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>

      <Link to="/allDocutors">more</Link>
    </section>
  );
};

export default TopDoctors;
