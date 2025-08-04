import { createSlice } from "@reduxjs/toolkit";


let appointmentSlice= createSlice({
    initialState : [],
    name: 'appointmentSlice',
    reducers : {
        addAppointment: (state,action)=> {

        },
    }

})

export let {addAppointment}=appointmentSlice.actions;
export default appointmentSlice.reducer;