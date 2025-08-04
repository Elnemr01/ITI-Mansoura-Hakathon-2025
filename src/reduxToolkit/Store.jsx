import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from './AppointmentSlice'


export let store = configureStore({
    reducer : {
        appContainer : appointmentSlice,
    }
})