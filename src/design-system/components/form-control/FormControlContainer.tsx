import { ReactNode } from "react";

import MuiFormControl, { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl";

import { Box } from "../";
import FormHelperText from "../form-helper-text";
import FormLabel from "../form-label";

export type FormControlContainerProps = {
  label?: string;
  helperText?: string | ReactNode;
  optional?: boolean;
} & Pick<MuiFormControlProps, "children" | "fullWidth">;

const FormControlContainer = ({ label, helperText, children, fullWidth, optional }: FormControlContainerProps) => (
  <MuiFormControl fullWidth={fullWidth}>
    <FormLabel optional={optional}>{label}</FormLabel>
    <FormHelperText>{helperText}</FormHelperText>
    <Box marginTop={0.5}>{children}</Box>
  </MuiFormControl>
);

export default FormControlContainer;
