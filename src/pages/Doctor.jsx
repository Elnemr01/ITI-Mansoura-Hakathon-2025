import { useEffect, useState } from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import { useParams } from 'react-router'
import DoctorDetils from '../components/DoctorDetils/DoctorDetils'
import RelatedDoctor from '../components/RelatedDoctors/RelatedDoctors'
import DoctorTime from '../components/doctorTime/DoctorTime'

const Doctor = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState({})
    const [relatedDoctors, setRelatedDoctors] = useState([])

    useEffect(() => {
        const foundDoctor = doctors.find(doc => String(doc._id) === id);
        if (foundDoctor) {
            setDoctor(foundDoctor);
        }
    }, [id]);

    useEffect(() => {
        const sameSpecialityDoctors = doctors.filter(doc => doc.speciality === doctor.speciality);
        const otherDoctors = sameSpecialityDoctors.filter(doc => doc._id !== doctor._id);
        setRelatedDoctors(otherDoctors);
    }, [doctor]);
    return (
        <>
            <DoctorDetils doctors={doctor} />

            <DoctorTime doctors={doctor}/>

            <RelatedDoctor relatedDoctors={relatedDoctors}/>
        </>
    );
};

export default Doctor;
