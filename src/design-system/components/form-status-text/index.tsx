import { Typography } from "../";
import { ReactNode } from "react";

export type FormStatusTextProps = {
  children: ReactNode;
};

const FormStatusText = (props: FormStatusTextProps) => (
  <Typography
    {...props}
    variant={"helper"}
    sx={{
      minHeight: "16px",
      height: "auto",
      padding: "8px 12px",
    }}
  />
);

export default FormStatusText;
