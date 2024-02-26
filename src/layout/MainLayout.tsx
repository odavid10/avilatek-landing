import { Box } from "@mui/material";

// project imports
import { Footer, Navbar } from "../UI";

export const MainLayout = ({ children }: any) => {
  return (
    <Box flexGrow={1}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};
