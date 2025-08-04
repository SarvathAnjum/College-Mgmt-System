import { API } from "../../Utility/API";
import { destinations } from "../../Utility/destinations";
import { doAjax } from "../../Utility/serviceRequest";
import { setDeptCourses, setDepts } from "../reducers/departmentReducer";

const DESTINATION = destinations.DESTINATION;

export const getAllDepts = () => {
  const sUrl = DESTINATION + API.getAllDepts;
  return (dispatch) => {
    doAjax(
      sUrl,
      "get",
      {},
      function (response) {
        let resp = response.data;
        dispatch(setDepts(resp));
      },
      () => {
        console.log("Error");
      }
    );
  };
};

export const getCoursesByDepartment = (deptId) => {
  const sUrl = DESTINATION + API.getDeptCourses + `/${deptId}`;
  return (dispatch) => {
    doAjax(
      sUrl,
      "get",
      {},
      function (response) {
        let resp = response.data;
        dispatch(setDeptCourses(resp));
      },
      () => {
        console.log("Error");
      }
    );
  };
};
