import { createSlice } from "@reduxjs/toolkit";

const studentsReducer = createSlice({
  name: "students",
  initialState: {
    studentsData: [],
  },
  reducers: {
    setStudents: (state, action) => {
      state.studentsData = action.payload;
    },
  },
});

export const { setStudents } = studentsReducer.actions;
export default studentsReducer.reducer;
