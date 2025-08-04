import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getLoggedInUserDetails } from "./redux/actions";
import { Box } from "@mui/material";
import AppHeader from "./Components/AppHeader";
import SideNavBar from "./Components/SideNavBar";
import RoutesModule from "./Components/RoutesModule";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInUserDetails());
  }, []);

  return (
    <Box>
      <AppHeader />
      <Box direction="row" className="cms_mainPageDynamicHeight">
        <SideNavBar />
        <RoutesModule />
      </Box>
    </Box>
  );
}

export default App;
