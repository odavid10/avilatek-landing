import { TextField, TextFieldProps } from "@mui/material";

// project imports
import { radius } from "../radius";

export const UITextfield = (props: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      id="email"
      placeholder="Enter your email"
      sx={{
        backgroundColor: "#FFF",
        borderRadius: radius.md,
        marginBottom: "6px",
        "& .MuiInputBase-input": {
          height: "18px",
        },
      }}
      {...props}
    />
  );
};
