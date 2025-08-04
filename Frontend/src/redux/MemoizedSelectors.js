import { createSelector } from "@reduxjs/toolkit";

//Basic Selectors
export const selectStudentReducer = (state) => state.studentReducer;
export const selectAppReducer = (state) => state.appReducer;

//Memoized Selectors
export const studentSelector = createSelector(
  [selectStudentReducer],
  (studentReducer) => studentReducer
);
export const appSelector = createSelector(
  [selectAppReducer],
  (appReducer) => appReducer
);
