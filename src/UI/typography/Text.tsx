import { Typography } from "@mui/material";

// project imports
import { TextProps } from "../../interfaces";

export const Text = ({
  children,
  fontSize,
  fontWeight,
  color,
  ...props
}: TextProps) => {
  return (
    <Typography
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      {...props}
    >
      {children}
    </Typography>
  );
};
