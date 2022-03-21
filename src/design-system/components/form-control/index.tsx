import { Box } from "../";
import MuiFormControl, { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl";
import FormLabel from "../form-label";
import FormStatusText from "../form-status-text";
import FormHelperText from "../form-helper-text";

export type FormControlProps = {
  label?: string;
  helperText?: string;
  status?: "success" | "warning" | "error";
  statusText?: string;
} & Pick<MuiFormControlProps, "children" | "fullWidth">;

const FormControl = ({ label, helperText, statusText, children, status, fullWidth }: FormControlProps) => (
  <MuiFormControl fullWidth={fullWidth}>
    <FormLabel>{label}</FormLabel>
    <FormHelperText>{helperText}</FormHelperText>
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        borderRadius: "6px",
        marginTop: "4px",
        backgroundColor: status && statusText ? (theme: any) => theme.palette[status]["20"] : "transparent",
      }}>
      {children}
      <FormStatusText>{statusText}</FormStatusText>
    </Box>
  </MuiFormControl>
);

export default FormControl;
