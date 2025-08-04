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

function AppHeader() {
  const { loggedInUserData } = useSelector(appSelector);
  const temp = useTheme();
  console.log(temp);

  return (
    <AppHeaderContainer>
      <Typography>Welcome {loggedInUserData?.UserInfo?.username}</Typography>
      <Typography>College Management System</Typography>
      <IconButton>
        <Avatar
          sx={{ width: 24, height: 24 }}
          // className={classes.cms_avatarSize}
        />
      </IconButton>
    </AppHeaderContainer>
  );
}

export default AppHeader;
