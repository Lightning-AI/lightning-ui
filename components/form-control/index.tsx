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

const FormControl = (props: FormControlProps) => {
  const { statusText, children, status } = props;
  return (
    <FormControlContainer {...props}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          borderRadius: "6px",
          backgroundColor: status && statusText ? (theme: any) => theme.palette[status]["20"] : "transparent",
        }}>
        {children}
        {statusText && <FormStatusText>{statusText}</FormStatusText>}
      </Box>
    </FormControlContainer>
  );
};

export default FormControl;
