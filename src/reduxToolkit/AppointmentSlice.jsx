import { createSlice } from "@reduxjs/toolkit";

let appointmentSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("appointmentsList")) || [],
  name: "appointmentSlice",
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("appointmentsList", JSON.stringify(state));
      return state;
    },

    cancelAppointment: (state, action) => {
      state = state.filter((e) => e.id !== action.payload);
      localStorage.setItem("appointmentsList", JSON.stringify(state));
      return state;
    },
  },
});

export default appointmentSlice.reducer;
export let { addAppointment, cancelAppointment } = appointmentSlice.actions;
