// material-ui
import { ChipProps, Typography, useTheme } from "@mui/material";

// project imports
import { colors } from "../colors";
import { radius } from "../radius";
import { weight } from "../weight";
import { spacing } from "../spacing";

interface Props extends ChipProps {
  children: any;
  width?: string | number;
  height?: string | number;
  variant?: any;
}

export const UIChip = ({
  children,
  width,
  height,
  variant,
  size,
  style,
}: Props) => {
  const theme = useTheme();
  return (
    <div
      style={{
        height: height || "28px",
        width: width || "105px",
        border: `1px solid ${colors.brand200}`,
        backgroundColor: colors.brand50,
        borderRadius: radius.full,
        padding: size !== "small" ? `${spacing.xs} ${spacing.lg}` : "",
        ...style,
      }}
    >
      <Typography
        variant={variant || "h5"}
        color={theme.palette.primary.dark}
        fontWeight={weight.medium}
        align="center"
      >
        {children}
      </Typography>
    </div>
  );
};
