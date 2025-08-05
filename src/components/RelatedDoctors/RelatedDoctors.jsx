import DoctorCard from "../doctorCard/DoctorCard"

const RelatedDoctor = ({ relatedDoctors }) => {
    return (
        <>
            <div className="text-center mt-10">
                <h1 className='text-3xl font-medium text-gray-700 mb-5'>Related Doctors</h1>
                <p className='text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            </div>
            <div className='topDoctors mt-10'>
                <div className='doctorCard'>
                    {relatedDoctors.map((e) => (
                        <DoctorCard doctor={e} key={e._id} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default RelatedDoctor