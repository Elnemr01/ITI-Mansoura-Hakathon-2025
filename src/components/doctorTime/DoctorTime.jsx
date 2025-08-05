import { useContext, useEffect, useState } from "react";
import './doctorTime.css'
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addAppointment } from "../../reduxToolKit/AppointmentSlice";
import { OurContext } from "../../contextAPI/FilterName";
import { v4 as idv4 } from "uuid";



const DoctorTime = ({ doctors }) => {
    const [doctorTime, setDoctorTime] = useState([]);
    const [slotDate, setSlotDate] = useState(null)
    const [slotTime, setSlotTime] = useState(null)

    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
    const { login } = useContext(OurContext);
    const dispatch = useDispatch();
    useEffect(() => {
        const today = new Date();
        const now = new Date();
        const allDays = [];

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            currentDate.setHours(10, 0, 0, 0);

            let endTime = new Date(today);
            endTime.setDate(today.getDate() + i);
            endTime.setHours(20, 30, 0, 0);

            const time = [];

            while (currentDate <= endTime) {
                if (i === 0 && currentDate <= now) {
                    currentDate.setMinutes(currentDate.getMinutes() + 30);
                    continue;
                }

                const formattedTime = currentDate.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                });

                time.push({
                    datetime: new Date(currentDate),
                    time: formattedTime.toLocaleLowerCase()
                });

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            allDays.push(time);
        }

        setDoctorTime(allDays);
    }, []);

    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const getDateInfo = (offset) => {
        const date = new Date();
        date.setDate(date.getDate() + offset);
        const day = days[date.getDay()];
        const dayNum = date.getDate();
        return { day, dayNum };
    };

    const massage = () => {
        if (!login) {
            toast.error('Please login first');
            return;
        }
        if (selectedDayIndex === null && selectedTimeIndex === null) {
            toast.error('Please select time and day')
            return;
        }
        if (selectedTimeIndex === null) {
            toast.error('Please select a time');
            return;
        }
        if (selectedDayIndex !== null && selectedTimeIndex !== null) {
            toast.success('Appointment Booked');
            dispatch(addAppointment({
                id: idv4(),
                image: doctors.image,
                name: doctors.name,
                speciality: doctors.speciality,
                address: doctors.address,
                date: slotDate,
                time: slotTime
            }))

            return;
        }
    }
    return (
        <>
            {/* المواعيد */}
            <div className="cont">
                <p className="ml-6">Booking slots</p>
                <div className="days_container">
                    {Array.from({ length: 7 }).map((_, i) => {
                        const { day, dayNum } = getDateInfo(i);
                        return (
                            <div
                                key={i}
                                onClick={() => {
                                    setSelectedDayIndex(i)
                                    setSlotDate({ dayNum, day, year: new Date().getFullYear() })
                                }}
                                className={`day-item ${selectedDayIndex === i ? 'day-item-active' : ''}`}
                            >
                                <p>{day}</p>
                                <p>{dayNum}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="time_container">
                    {doctorTime[selectedDayIndex]?.length > 0 ? (
                        doctorTime[selectedDayIndex].map((slot, index) => (
                            <p
                                key={index}
                                onClick={() => {
                                    setSelectedTimeIndex(index)
                                    setSlotTime(slot.time)
                                }}
                                className={`slot-item ${selectedTimeIndex === index ? 'slot-item-active' : ''}`}
                            >
                                {slot.time}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm">No available slots for this day</p>
                    )}
                </div>

                <button className="book-button" onClick={massage}>
                    Book an appointment
                </button>
                <ToastContainer />
            </div>
        </>
    )
}
export default DoctorTime