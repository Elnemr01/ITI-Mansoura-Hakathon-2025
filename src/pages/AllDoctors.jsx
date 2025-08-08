    import React, { useContext, useEffect, useState } from 'react';
    import './pageStyle/allDoctorStyle.css';
    import FilterBySpeciality from '../components/filterBySpeciality/FilterBySpeciality';
    import { doctors } from '../assets/assets_frontend/assets';
    import DoctorCard from '../components/Doctorcard/DoctorCard';
    import { OurContext } from '../contextAPI/FilterName';
    import { motion, useInView } from 'framer-motion';
    import { useRef } from 'react';


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

    const InViewCard = ({ doctor, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        >
        <DoctorCard doctor={doctor} />
        </motion.div>
    );
    };

    return (
        <section className="allDoctorsPage">
        <p className="action">Browse through the doctors specialist.</p>
        <div className="content">
            <FilterBySpeciality />
            <div className="allDoctors">
            {allDoc.map((e, index) => (
                <InViewCard key={e._id} doctor={e} index={index} />
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default AllDoctors;
