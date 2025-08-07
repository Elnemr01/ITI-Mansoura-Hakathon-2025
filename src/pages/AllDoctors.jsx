import React, { useContext, useEffect, useState, useRef } from 'react';
import './pageStyle/allDoctorStyle.css';
import FilterBySpeciality from '../components/filterBySpeciality/FilterBySpeciality';
import { doctors } from '../assets/assets_frontend/assets';
import DoctorCard from '../components/Doctorcard/DoctorCard';
import { OurContext } from '../contextAPI/FilterName';
import { motion, useInView } from 'framer-motion';

const CardWrapper = ({ children, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="card"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const AllDoctors = () => {
  const [allDoc, setAllDoc] = useState([]);
  const { filterName } = useContext(OurContext);

  useEffect(() => {
    if (filterName !== '') {
      setAllDoc(doctors.filter((e) => e.speciality === filterName));
    } else {
      setAllDoc(doctors);
    }
  }, [filterName]);

  return (
    <section className="allDoctorsPage">
      <div className="content">
        {/* الجزء الشمال */}
        <div className="filter-section">
          <p className="action">Browse through the doctors specialist.</p>
          <FilterBySpeciality />
        </div>

        {/* الكروت */}
        <div className="allDoctors">
          {allDoc.map((e, index) => (
            <CardWrapper key={e._id} index={index}>
              <DoctorCard doctor={e} />
            </CardWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllDoctors;
