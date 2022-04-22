import MuiFormControl, { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl";
import FormHelperText from "../form-helper-text";
import FormLabel from "../form-label";

export type FormControlProps = {
  label?: string;
  helperText?: string;
  status?: "success" | "warning" | "error";
  statusText?: string;
  optional?: boolean;
} & Pick<MuiFormControlProps, "children" | "fullWidth">;

const FormControl = ({ label, helperText, statusText, children, status, fullWidth, optional }: FormControlProps) => (
  <MuiFormControl fullWidth={fullWidth}>
    <FormLabel optional={optional}>{label}</FormLabel>
    <FormHelperText>{helperText}</FormHelperText>
    {children}
  </MuiFormControl>
);

export default FormControl;
