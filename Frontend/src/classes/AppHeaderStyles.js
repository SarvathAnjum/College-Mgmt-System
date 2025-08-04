import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

export const AppHeaderContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1rem",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  flexDirection: "row",
  boxShadow: `0px 0px 5px 1px ${theme.palette.grey[50]}`,
}));
