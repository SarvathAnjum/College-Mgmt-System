import { createSelector } from "@reduxjs/toolkit";

//Basic Selectors
export const selectStudentReducer = (state) => state.studentReducer;
export const selectAppReducer = (state) => state.appReducer;
export const selectDepartmentReducer = (state) => state.departmentReducer;

//Memoized Selectors
export const studentSelector = createSelector(
  [selectStudentReducer],
  (studentReducer) => studentReducer
);
export const appSelector = createSelector(
  [selectAppReducer],
  (appReducer) => appReducer
);
export const deptSelector = createSelector(
  [selectDepartmentReducer],
  (departmentReducer) => departmentReducer
);
