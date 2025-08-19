import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getLoggedInUserDetails } from "./redux/actions";
import { Box } from "@mui/material";
import AppHeader from "./Components/AppHeader";
import SideNavBar from "./Components/SideNavBar";
import RoutesModule from "./Components/RoutesModule";
import { appSelector } from "./redux/MemoizedSelectors";
import Login from "./Components/Authentication-Authorization/Login";
import axios from "axios";
import { getGoggleAuthDetails } from "./redux/actions/appAction";
import { setLoggedInUserData } from "./redux/reducers/appReducer";

function App() {
  const dispatch = useDispatch();
  const { loggedInUserData } = useSelector(appSelector);

  useEffect(() => {
    // dispatch(getGoggleAuthDetails());
    // dispatch(getLoggedInUserDetails());
    axios
      .get("http://localhost:3500/googleAuth/user", {
        withCredentials: true,
      })
      .then((res) => dispatch(setLoggedInUserData(res.data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box>
      {loggedInUserData?.accessToken == "" ? (
        <Login />
      ) : (
        <>
          <AppHeader />
          <Box direction="row" className="cms_mainPageDynamicHeight">
            <SideNavBar />
            <RoutesModule />
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
