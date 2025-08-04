import { API } from "../../Utility/API";
import { destinations } from "../../Utility/destinations";
import { doAjax } from "../../Utility/serviceRequest";
import {  setStudents } from "../reducers/studentsReducer";

const DESTINATION = destinations.DESTINATION;



export const getAllStudents = () => {
  const sUrl = DESTINATION + API.getAllStudents;
  return (dispatch) => {
    doAjax(
      sUrl,
      "get",
      {},
      function (response) {
        let resp = response.data;
        dispatch(setStudents(resp));
      },
      () => {
        console.log("Error");
      }
    );
  };
};

export const updateStudent = (updatedStudentData) => {
  const sUrl = DESTINATION + API.getAllStudents;
  return (dispatch) => {
    doAjax(
      sUrl,
      "put",
      updatedStudentData,
      function (response) {
        let resp = response.data;
        dispatch(getAllStudents());
      },
      () => {
        console.log("Error");
      }
    );
  };
};

export const deleteStudent = (studentId) => {
  const sUrl = DESTINATION + API.getAllStudents;
  return (dispatch) => {
    doAjax(
      sUrl,
      "delete",
      { studentId: studentId },
      function (response) {
        let resp = response.data;
        dispatch(getAllStudents());
      },
      () => {
        console.log("Error");
      }
    );
  };
};

export const createNewStudent = (newStudentData) => {
  const sUrl = DESTINATION + API.getAllStudents;
  return (dispatch) => {
    doAjax(
      sUrl,
      "post",
      newStudentData,
      function (response) {
        let resp = response.data;
        dispatch(getAllStudents());
      },
      () => {
        console.log("Error");
      }
    );
  };
};
