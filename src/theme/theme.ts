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
      lineHeight: "90px",
      fontSize: "72px",
    },
    h2: {
      lineHeight: "44px",
      fontSize: "36px",
    },
    h3: {
      lineHeight: "30px",
      fontSize: "20px",
    },
    h4: {
      lineHeight: "24px",
      fontSize: "16px",
    },
  },
});
