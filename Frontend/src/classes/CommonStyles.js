import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const CommonStyles = makeStyles((theme) => ({
  //Common Page Styles
  cms_pageContainer: {
    width: "auto",
    borderRadius: "24px 0px 0px 0px",
    marginLeft: "4rem",
    paddingTop: "1rem",
    marginBottom: "auto",
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
