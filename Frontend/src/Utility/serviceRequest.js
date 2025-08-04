import axios from "axios";
import { store } from "../redux/store";

// ------------------------------------ START- AJAX OPERATIONS ---------------------------------------------//

export const doAjax = async (sUrl, sMethod, oPayload, rSuccess, rError) => {
  const appReducer = store.getState().appReducer;

  const contentType = "application/json";
  const bearerToken = `Bearer ${appReducer.loggedInUserData.accessToken}`;
  switch (sMethod.toLowerCase()) {
    case "post":
      await axios
        .post(`${sUrl}`, oPayload, {
          headers: {
            "Content-Type": contentType,
            "Access-Control-Allow-Origin": "*",
            Authorization: bearerToken,
          },
        })
        .then((data) => rSuccess(data))
        .catch((error) => rError(error));
      break;
    case "postblobfile": //POST Method call for blob type file upload
      break;
    case "get":
      await axios
        .get(`${sUrl}`, {
          headers: {
            "Content-Type": contentType,
            "Access-Control-Allow-Origin": "*",
            Authorization: bearerToken,
          },
        })
        .then((data) => {
          rSuccess(data);
        })
        .catch((error) => {
          rError(error.message);
        });
      break;
    case "put":
      await axios
        .put(`${sUrl}`, oPayload, {
          headers: {
            "Content-Type": contentType,
            "Access-Control-Allow-Origin": "*",
            Authorization: bearerToken,
          },
        })
        .then((data) => rSuccess(data))
        .catch((error) => rError(error));
      break;
    case "getblobfile": //GET method for blob files - removed from this branch only
      break;

    case "delete":
      await axios
        .delete(`${sUrl}`, {
          headers: {
            "Content-Type": contentType,
            "Access-Control-Allow-Origin": "*",
            Authorization: bearerToken,
          },
          data: oPayload,
        })
        .then((data) => rSuccess(data))
        .catch((error) => rError(error));
      break;

    default:
      break;
  }
};

// ------------------------------------ START - UTILITY FUNCTIONS- this code is removed from this branch only--------------------------------------------//
