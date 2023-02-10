import { ReactNode } from "react";

import { Typography } from "../";

export type FormHelperTextProps = {
  children: ReactNode;
};

const FormHelperText = (props: FormHelperTextProps) => (
  <Typography
    {...props}
    sx={{
      color: "rgba(91, 94, 105, 1)",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "16px",
    }}
  />
);

export default FormHelperText;
