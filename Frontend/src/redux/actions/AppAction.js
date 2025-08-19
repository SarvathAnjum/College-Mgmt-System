import { API } from "../../Utility/API";
import { destinations } from "../../Utility/destinations";
import { doAjax } from "../../Utility/serviceRequest";
import { setLoggedInUserData } from "../reducers/appReducer";

const DESTINATION = destinations.DESTINATION;

export const getLoggedInUserDetails = (username, password, setErrorMsg) => {
  const sUrl = DESTINATION + API.getLoggedInUser;
  return (dispatch) => {
    doAjax(
      sUrl,
      "post",
      {
        username: username,
        password: password,
      },
      function (response) {
        let resp = response.data;
        dispatch(setLoggedInUserData(resp));
      },
      (err) => {
        if (err.response?.status === 401) {
          setErrorMsg("Invalid username or password.");
        } else {
          setErrorMsg("Login failed. Please try again.");
        }
      }
    );
  };
};

export const getGoggleAuthDetails = () => {
  const sUrl = "http://localhost:3500/googleAuth/user";
  return (dispatch) => {
    doAjax(
      sUrl,
      "get",
      {},
      function (response) {
        let resp = response.data;
        // dispatch(setStudents(resp));
        console.log(resp);
      },
      () => {
        console.log("Error");
      }
    );
  };
};

export const handleLogout = () => {
  const sUrl = DESTINATION + API.logout;
  return (dispatch) => {
    doAjax(
      sUrl,
      "get",
      {},
      function (response) {
        // window.location.reload();
        dispatch(setLoggedInUserData([]));
      },
      () => {
        console.log("Error");
      }
    );
  };
};
