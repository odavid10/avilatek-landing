import { Typography, TypographyProps, useTheme } from "@mui/material";

export const H4 = ({
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
      style={theme.typography.h4}
      {...props}
    >
      {children}
    </Typography>
  );
};
