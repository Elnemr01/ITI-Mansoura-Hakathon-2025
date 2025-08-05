import { createSlice } from "@reduxjs/toolkit";

let appointmentSlice =createSlice({
    initialState : [],
    name :'appointmentSlice',
    reducers : {
        addAppointment : (state,action)=> {
            state.push(action.payload);
            return state;
        },

        cancelAppointment : (state,action)=> {
            state=state.filter((e)=> e.id!==action.payload);
            return state;
        },
    }
})



export default appointmentSlice.reducer;
export let {addAppointment,cancelAppointment}=appointmentSlice.actions;