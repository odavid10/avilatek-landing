import { Typography, TypographyProps } from "@mui/material";

export const Text = ({
  children,
  fontSize,
  fontWeight,
  color,
  ...props
}: TypographyProps) => {
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
