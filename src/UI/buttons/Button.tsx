import { Button, ButtonProps } from "@mui/material";

export const UIButton = (props: ButtonProps) => {
  return (
    <Button
      variant={props.variant || "text"}
      color={props.color || "primary"}
      aria-label={props["aria-label"]}
      {...props}
    >
      {props.children}
    </Button>
  );
};
