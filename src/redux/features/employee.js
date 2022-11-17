import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  attendances: [],
  open: false,
  message: "Something went wrong",
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeData: (state, action) => {
      state.currentUser = action?.payload?.data.employee;
    },
    setOpen: (state, action) => {
      state.open = action?.payload?.data;
    },
    setMessage: (state, action) => {
      state.message = action?.payload?.data;
    },
  },
});

export const { setEmployeeData, setMessage, setOpen } = employeeSlice.actions;

export default employeeSlice.reducer;
