import { combineReducers } from "@reduxjs/toolkit";
import studentReducer from "./studentsReducer";
import appReducer from "./appReducer";
import departmentReducer from "./departmentReducer"

const reducers = combineReducers({
  studentReducer: studentReducer,
  appReducer: appReducer,
  departmentReducer: departmentReducer
});
export default reducers;
