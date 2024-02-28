import { useMediaQuery } from "@mui/material";

export const useMobileDevice = () => {
  const isMobileDevice = useMediaQuery("(max-width: 600px)");

  return { isMobileDevice };
};
