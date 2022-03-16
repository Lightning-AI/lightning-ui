import { Typography } from "design-system/components";
import { ReactNode } from "react";

export type FormStatusTextProps = {
  children: ReactNode;
};

const FormStatusText = (props: FormStatusTextProps) => (
  <Typography
    {...props}
    sx={{
      height: "16px",
      padding: "8px 12px",
      color: "rgba(28, 28, 28, 1)",
      fontFamily: "Roboto",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "16px",
    }}
  />
);

export default FormStatusText;
