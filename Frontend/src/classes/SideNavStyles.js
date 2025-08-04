import { makeStyles } from "@mui/styles";
import { customTheme } from "../Utility/theme";

const stylesConstants = {
  pt_1_5: "0.15rem !important",
};

const theme = customTheme;
export const SideNavStyles = makeStyles(() => ({
  cms_sideNavBarNavList: {
    color: "inherit",
    width: "3.5rem !important",
    position: "fixed !important",
    height: "100% !important",
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0px 0px 5px 1px ${theme.palette.grey[50]}`,
  },
  cms_activeIcon: {
    textDecoration: "inherit",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cms_passiveIconText: {
    fontSize: "0.7rem !important",
    paddingLeft: stylesConstants.pt_1_5,
    paddingRight: stylesConstants.pt_1_5,
    color: "#43425D !important",
    cursor: "pointer",
    textAlign: "center",
  },
}));

export default SideNavStyles;
