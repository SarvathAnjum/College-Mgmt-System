import { createTheme } from "@mui/material";
const pt_5 = 0.5;

export const customTheme = createTheme({
  spacing: (factor) => `${pt_5 * factor}rem`,
  palette: {
    type: "light",
    background: {
      default: "#FAFAFF", // Background-Grey-10
      paper: "#FFFFFF", // White
    },
    primary: {
      main: "#05784E", // Illustration-Green-90
      900: "#039276", // Primary-Green-80
      800: "#6ADABD", // Bar Graph-Green-40
      700: "#A4DDDC", // Chart-Stroke-Teal-30
      600: "#BBEEED", // Chart-Background-Teal-20
      500: "#F3FFFF", // Empty State Background Green-10
    },
    secondary: {
      main: "#697BE9", // Chart-Stroke-Blue-30
      900: "#95A1FC", // Chart-Background-Blue-20
      800: "#978FED", // Chart-Stroke-Purple-30
      700: "#B6B0FB", // Chart-Background-Purple-20
      600: "#A8C3EC", // Chart-Background-Blue-10
    },
    grey: {
      50: "#f0efed",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E6E6E6",
      400: "#BDBDBD",
      500: "#757575",
      600: "#6B6B6B",
      700: "#424242",
    },
    text: {
      primary: "#1D1D11", // black - text
      secondary: "#898989", // grey - text
      tertiary: "#757575", // light grey - text
    },
  },

  shape: {
    borderRadius: 4,
  },
  typography: {
    fontSizeXs: "0.625rem", //10px
    fontSizeSm: "0.75rem", //12px
    fontSizeMd: "0.875rem", //14px
    fontSizeBase: "1rem", //16px
    fontSizeLg: "1.125rem", //18px
    fontSizeXl: "1.25rem", //20px
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 900,
      sm: 1280,
      md: 1440,
      lg: 1920,
      xl: 2536,
    },
  },
});
