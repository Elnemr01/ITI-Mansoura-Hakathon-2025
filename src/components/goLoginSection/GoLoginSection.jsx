    import React, { useRef } from 'react'
    import { motion, useInView } from 'framer-motion'
    import "./goLogin.css"
    import { assets } from './../../assets/assets_frontend/assets'
    import { Link } from 'react-router'

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.35,
        when: "beforeChildren",
        }
    }
    }

    const textVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } }
    }

    const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.7 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
    }

    const imageVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
    }

    const GoLoginSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { threshold: 0.4, triggerOnce: false })

    return (
        <section ref={ref} className='goLogin'>
        <motion.div
            className="text"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.h2 variants={textVariants}>
            Book Appointment With 100+ Trusted Doctors
            </motion.h2>

            <motion.div variants={buttonVariants}>
            <Link to={'/login'}>create account</Link>
            </motion.div>
        </motion.div>

        <motion.div
            className="image"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <img src={assets.appointment_img} alt="check connection" loading="lazy" />
        </motion.div>
        </section>
    )
    }

    export default GoLoginSection