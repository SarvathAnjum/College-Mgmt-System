import { API } from "../../Utility/API";
import { destinations } from "../../Utility/destinations";
import { doAjax } from "../../Utility/serviceRequest";
import { setLoggedInUserData } from "../reducers/appReducer";

const DESTINATION = destinations.DESTINATION;

export const getLoggedInUserDetails = () => {
  const sUrl = DESTINATION + API.getLoggedInUser;
  return (dispatch) => {
    doAjax(
      sUrl,
      "post",
      {
        username: "Sarvath",
      },
      function (response) {
        let resp = response.data;
        dispatch(setLoggedInUserData(resp));
      },
      () => {
        console.log("Error");
      }
    );
  };
};
