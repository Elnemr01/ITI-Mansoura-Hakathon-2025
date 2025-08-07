import React, { useRef } from "react";
import "./hero.css";
import { assets } from "../../assets/assets_frontend/assets";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false });

  const scrollToSpeciality = (e) => {
    e.preventDefault();
    const specialitySection = document.getElementById("speciality");
    if (specialitySection) {
      specialitySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const words =
    "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.".split(
      " "
    );

  return (
    <motion.div
      className="hero"
      ref={heroRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}>
      <motion.div className="text" variants={fadeInUp}>
        <motion.h2 variants={fadeInUp}>
          book appointment with trusted doctors
        </motion.h2>
        <motion.div className="info" variants={fadeInUp}>
          <div className="images">
            <img
              src={assets.group_profiles}
              alt="check connection"
              loading="lazy"
            />
          </div>
          <p>
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.25 }}
                style={{ marginRight: "6px", display: "inline-block" }}>
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
        <motion.a
          href="/#speciality"
          className="book-appointment"
          onClick={scrollToSpeciality}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          book appointment{" "}
          <img src={assets.arrow_icon} alt="check connection" loading="lazy" />
        </motion.a>
      </motion.div>
      <motion.div className="image" variants={fadeInUp}>
        <img src={assets.header_img} alt="check connection" loading="lazy" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
