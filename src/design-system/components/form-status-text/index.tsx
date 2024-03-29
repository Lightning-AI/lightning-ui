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
      color: (theme: any) => theme.palette.text.secondary,
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "16px",
    }}
  />
);

export default FormStatusText;
