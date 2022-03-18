import { Typography } from "../";
import { ReactNode } from "react";

export type FormLabelProps = {
  children: ReactNode;
};

const FormLabel = (props: FormLabelProps) => (
  <Typography
    {...props}
    sx={{
      color: "rgba(28, 28, 28, 1)",
      fontFamily: "UCity",
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "20px",
    }}
  />
);

export default FormLabel;
