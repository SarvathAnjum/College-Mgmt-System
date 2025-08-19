//React Import
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

//MUI Import
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

import { appSelector } from "../redux/MemoizedSelectors";
import { AppHeaderContainer } from "../classes/AppHeaderStyles";
import { useTheme } from "@emotion/react";
import { handleLogout } from "../redux/actions";
import { NavLink } from "react-router-dom";

function AppHeader() {
  const { loggedInUserData } = useSelector(appSelector);
  const temp = useTheme();
  const dispatch = useDispatch();
  // console.log(temp);

  const [isUserDetailsPopupOpen, setIsUserDetailsPopupOpen] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const userInfo = loggedInUserData?.UserInfo;

  const onOpenUserPopup = useCallback((event) => {
    setIsUserDetailsPopupOpen(true);
    setAnchorEl(event.currentTarget);
  }, []);

  const onCloseUserPopup = useCallback(() => {
    setIsUserDetailsPopupOpen(false);
    setAnchorEl(null);
  }, []);

  const handleSignOut = () => {
    dispatch(handleLogout());
    <NavLink to="/" />;
    onCloseUserPopup()
  };
  return (
    <AppHeaderContainer>
      <Typography>Welcome {userInfo?.username}</Typography>
      <Typography>College Management System</Typography>
      <IconButton onClick={onOpenUserPopup}>
        <Avatar
          alt="User Profile"
          src={userInfo?.profilePic}
          sx={{ width: 24, height: 24 }}
        />
      </IconButton>
      <Popover
        open={isUserDetailsPopupOpen}
        onClose={onCloseUserPopup}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Stack alignItems="center">
          <Avatar
            alt="User Profile"
            src={userInfo?.profilePic}
            sx={{ width: 24, height: 24 }}
          />

          <Typography variant="button" color="#545454">
            {userInfo?.username} : {userInfo?.rolename}
          </Typography>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </Stack>
      </Popover>
    </AppHeaderContainer>
  );
}

export default AppHeader;
