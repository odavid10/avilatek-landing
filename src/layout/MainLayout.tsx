import { Box } from "@mui/material";

// project imports
import { Navbar } from "../UI";

export const MainLayout = ({ children }: any) => {
  return (
    <Box flexGrow={1}>
      <Navbar />

      {children}
    </Box>
  );
};
