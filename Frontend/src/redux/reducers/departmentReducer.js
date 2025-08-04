import { createSlice } from "@reduxjs/toolkit";

const departmentReducer = createSlice({
  name: "departments",
  initialState: {
    deptData: [],
    deptCoursesData: []
  },
  reducers: {
    setDepts: (state, action) => {
      state.deptData = action.payload;
    },
    setDeptCourses: (state, action) => {
      state.deptCoursesData = action.payload
    }
  },
});

export const { setDepts, setDeptCourses } = departmentReducer.actions;
export default departmentReducer.reducer;
