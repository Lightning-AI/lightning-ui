import { ReactNode } from "react";

import { Typography } from "../";

export type FormStatusTextProps = {
  children: ReactNode;
};

const FormStatusText = (props: FormStatusTextProps) => (
  <Typography
    {...props}
    sx={{
      minHeight: "16px",
      height: "auto",
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
