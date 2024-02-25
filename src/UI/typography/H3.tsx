import { Typography, TypographyProps, useTheme } from "@mui/material";

export const H3 = ({
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
      style={theme.typography.h3}
      {...props}
    >
      {children}
    </Typography>
  );
};
