import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

// project imports
import { theme } from "./theme";
import { AppThemeHOCProps } from "../intefaces";

export const AppTheme = ({ children }: AppThemeHOCProps) => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
