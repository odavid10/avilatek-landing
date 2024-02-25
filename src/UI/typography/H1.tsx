import { Typography, TypographyProps, useTheme } from "@mui/material";

export const H1 = ({
  children,
  fontWeight,
  color,
  ...props
}: TypographyProps) => {
  const theme = useTheme();

  return (
    <Typography
      color={color || "text.primary"}
      fontWeight={fontWeight}
      style={theme.typography.h1}
      {...props}
    >
      {children}
    </Typography>
  );
};
