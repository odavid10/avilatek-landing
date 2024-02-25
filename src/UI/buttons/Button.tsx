import { Button, ButtonProps } from "@mui/material";

// project imports
import { radius } from "../radius";

export const UIButton = (props: ButtonProps) => {
  return (
    <Button
      variant={props.variant || "text"}
      color={props.color || "primary"}
      aria-label={props["aria-label"]}
      sx={{
        borderRadius: radius.md,
        height: "48px",
        maxWidth: "129px",
        textTransform: "none",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
