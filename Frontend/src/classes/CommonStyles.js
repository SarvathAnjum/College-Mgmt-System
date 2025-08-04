import makeStyles from "@mui/styles/makeStyles";
import { createTheme, styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { customTheme } from "../Utility/theme";

const theme = customTheme;
const CommonStyles = makeStyles(() => ({
  //Common Page Styles
  cms_pageContainer: {
    width: "96vw",
    borderRadius: "24px 0px 0px 0px",
    marginLeft: "4rem",
    paddingTop: "1rem",
    marginBottom: "auto",
  },
  cms_cardsStyle: {
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: "1rem",
    marginTop: "1rem",
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0px 0px 5px 1px ${theme.palette.grey[50]}`,
    cursor: "pointer",
    borderRadius: "1rem",
    
  },
  cms_cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "1rem",
    gap: "0.5% !important",
  },
}));

export const AppHeaderTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular, // Regular
  fontSize: theme.typography.fontSizeLg, // 18px
  color: theme.palette.text.primary,
}));

export const HeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium, // Medium
  fontSize: theme.typography.fontSizeLg,
  color: theme.palette.text.primary,
}));

export const Heading2Typography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium, // Medium
  fontSize: theme.typography.fontSizeBase, // 16px
  color: theme.palette.text.primary,
}));

export const LabelTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular, // Regular
  fontSize: theme.typography.fontSizeMd, // 14px
  color: theme.palette.text.primary,
}));

export const MediumBlackTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular, // Regular
  fontSize: theme.typography.fontSizeMd, // 14px
  color: theme.palette.text.primary,
}));

export const MediumBlackBoldTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium, // Medium
  fontSize: theme.typography.fontSizeMd, // 14px
  color: theme.palette.text.primary,
}));

export const SmallRegularTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular, // Regular
  fontSize: theme.typography.fontSizeSm, // 12px
  color: theme.palette.text.primary,
}));

export const SmallMediumTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium, // Medium
  fontSize: theme.typography.fontSizeSm, // 12px
  color: theme.palette.text.primary,
}));

export const SmallRobotoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular, // Regular
  fontSize: theme.typography.fontSizeXs, // 10px
  color: theme.palette.text.primary,
}));

export const SmallRobotoGreyTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular, // Regular
  fontSize: theme.typography.fontSizeXs, // 10px
  color: theme.palette.grey[700],
}));
export default CommonStyles;
