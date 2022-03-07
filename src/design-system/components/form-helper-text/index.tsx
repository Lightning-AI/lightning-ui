import { Typography } from "design-system/components";
import { ReactNode } from "react";

export type FormHelperTextProps = {
  children: ReactNode;
};

const FormHelperText = (props: FormHelperTextProps) => (
  <Typography
    {...props}
    sx={{
      color: "rgba(91, 94, 105, 1)",
      fontFamily: "Roboto",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "16px",
    }}
  />
);

export default FormHelperText;
