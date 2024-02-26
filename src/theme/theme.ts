import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#53389E",
      light: "#7F56D9",
      dark: "#6941C6",
    },
    secondary: {
      main: "#6941C6",
    },
    grey: {
      "100": "#F9FAFB",
    },
    text: {
      primary: "#101828",
      secondary: "#475467",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: "72px",
      lineHeight: "90px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "36px",
      lineHeight: "44px",
    },
    h3: {
      fontSize: "20px",
      lineHeight: "30px",
    },
    h4: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    h5: {
      fontSize: "14px",
      lineHeight: "20px",
    },
    h6: {
      fontSize: "12px",
      lineHeight: "18px",
    },
    subtitle1: {
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
});
