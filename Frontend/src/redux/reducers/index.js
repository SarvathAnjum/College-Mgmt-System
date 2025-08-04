import { combineReducers } from "@reduxjs/toolkit";
import studentReducer from "./studentsReducer";
import appReducer from "./appReducer";

const reducers = combineReducers({
  studentReducer: studentReducer,
  appReducer: appReducer,
});
export default reducers;
