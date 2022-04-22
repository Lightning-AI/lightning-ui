import { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl";
import { Box } from "../";
import FormStatusText from "../form-status-text";
import FormControlContainer from "./FormControlContainer";

export type FormControlProps = {
  label?: string;
  helperText?: string;
  status?: "success" | "warning" | "error";
  statusText?: string;
  optional?: boolean;
} & Pick<MuiFormControlProps, "children" | "fullWidth">;

const FormControl = ({ label, helperText, statusText, children, status, fullWidth, optional }: FormControlProps) => (
  <FormControlContainer>
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        borderRadius: "6px",
        marginTop: "4px",
        backgroundColor: status && statusText ? (theme: any) => theme.palette[status]["20"] : "transparent",
      }}>
      {children}
      {statusText && <FormStatusText>{statusText}</FormStatusText>}
    </Box>
  </FormControlContainer>
);

export default FormControl;
