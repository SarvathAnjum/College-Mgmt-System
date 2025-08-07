//React Import
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

//MUI Import
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

//File Import
import { SideNavStyles } from "../Classes/SideNavStyles";
import "../App.css";
import { appSelector } from "../redux/MemoizedSelectors";

export default function SideNavBar() {
  const classes = SideNavStyles();
  const { loggedInUserData, navItems } = useSelector(appSelector);

  const role = loggedInUserData?.UserInfo?.rolename;
  const currentLocation = useLocation();
  let pathname = currentLocation?.pathname;
console.log(pathname?.includes("Departments"))
  if(pathname?.includes("Departments"))
  {
    pathname = "/Departments"
  }
  let roleBasedNavItems = []; // Initialize an empty array
  if (role == "Admin") {
    roleBasedNavItems.push(navItems[0]);
    roleBasedNavItems.push(navItems[1]);
    roleBasedNavItems.push(navItems[2]);
    roleBasedNavItems.push(navItems[3]);
  } else {
    // roleBasedNavItems.push(navItems[0]);
  }

  return (
    <Stack className={classes.cms_sideNavBarNavList}>
      {roleBasedNavItems.map((NavItem) => {
        return (
          <Grid
            paddingBottom="0rem"
            paddingTop="0.8rem"
            alignItems="center"
            key={NavItem?.item}
          >
            <nav>
              <NavLink to={NavItem?.path} className={classes.cms_activeIcon}>
                {pathname === NavItem?.path ? (
                  <NavItem.activeIcon />
                ) : (
                  <NavItem.icon />
                )}
                <Typography className={classes.cms_passiveIconText}>
                  {NavItem?.item}
                </Typography>
              </NavLink>
            </nav>
          </Grid>
        );
      })}
    </Stack>
  );
}
