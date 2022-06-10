import { Typography } from "../";
import { ReactNode } from "react";

export type FormHelperTextProps = {
  children: ReactNode;
};

const FormHelperText = (props: FormHelperTextProps) => (
  <Typography {...props} color={"secondary"} variant={"helper"} />
);

export default FormHelperText;
