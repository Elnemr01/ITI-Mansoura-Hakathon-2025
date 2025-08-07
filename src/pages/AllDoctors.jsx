import React, { useContext, useEffect, useState } from 'react';
import './pageStyle/allDoctorStyle.css';
import FilterBySpeciality from '../components/filterBySpeciality/FilterBySpeciality';
import { doctors } from '../assets/assets_frontend/assets';
import DoctorCard from '../components/Doctorcard/DoctorCard';
import { OurContext } from '../contextAPI/FilterName';
import { motion } from 'framer-motion'; // ✅ إضافة framer-motion

const AllDoctors = () => {
    const [allDoc, setAllDoc] = useState([]);
    const { filterName } = useContext(OurContext);

    useEffect(() => {
        if (filterName !== '') {
            setAllDoc(doctors.filter((e) => e.speciality === filterName));
        } else {
    const [allDoc, setAllDoc] = useState([]);
    const { filterName } = useContext(OurContext);

    useEffect(() => {
        if (filterName !== '') {
            setAllDoc(doctors.filter((e) => e.speciality === filterName));
        } else {
            setAllDoc(doctors);
        }    }, [filterName]);

    return (
        <section className="allDoctorsPage">
            {/* ✅ أنيميشن للعنوان */}
            <motion.p
                className="action"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Browse through the doctors specialist.
            </motion.p>

            <div className="content">
                {/* ✅ أنيميشن للفلتر */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <FilterBySpeciality />
                </motion.div>

                {/* ✅ أنيميشن للكروت */}
                <motion.div
                    className="allDoctors"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {
                        allDoc.map((e, index) =>
                            <motion.div
                                key={e._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <DoctorCard doctor={e} />
                            </motion.div>
                        )
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default AllDoctors;
