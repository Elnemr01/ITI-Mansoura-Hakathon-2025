import React, { useContext, useEffect, useState } from "react";
import "./specialisty.css";
import HomeTitle from "../homeTitle/HomeTitle";
import { specialityData } from "../../assets/assets_frontend/assets";
import { Link } from "react-router";
import { OurContext } from "../../contextAPI/FilterName";
import { motion } from "framer-motion";

const Specialisty = () => {
  const [specialistyArr, setSpecialisty] = useState([]);
  const { setFilter } = useContext(OurContext);

  useEffect(() => {
    setSpecialisty(specialityData);
  }, []);

  return (
    <motion.section
      id="speciality"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}>
        <HomeTitle
          text1={"Find by Speciality"}
          text2={
            "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
          }
        />
      </motion.div>

      <div className="specialistyData">
        {specialistyArr.map((e, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}>
            <Link to="/allDocutors" onClick={() => setFilter(e.speciality)}>
              <img src={e.image} alt="check connection" loading="lazy" />
              <p className="specialistyName">{e.speciality}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Specialisty;
