import { ReactNode } from "react";

import { Box } from "../";
import FormStatusText from "../form-status-text";
import FormControlContainer, { FormControlContainerProps } from "./FormControlContainer";

export type FormControlProps = {
  status?: "success" | "warning" | "error" | "info";
  statusText?: ReactNode;
} & FormControlContainerProps;

const FormControl = (props: FormControlProps) => {
  const { statusText, children, status } = props;
  return (
    <FormControlContainer {...props}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          borderRadius: "8px",
          backgroundColor: status && statusText ? (theme: any) => theme.palette[status]["20"] : "transparent",
        }}>
        {children}
        {statusText && <FormStatusText>{statusText}</FormStatusText>}
      </Box>
    </FormControlContainer>
  );
};

export default FormControl;
