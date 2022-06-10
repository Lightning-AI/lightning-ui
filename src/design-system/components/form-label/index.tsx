import { Stack, Typography } from "../";
import { ReactNode } from "react";

export type FormLabelProps = {
  optional?: boolean;
  children: ReactNode;
};

const FormLabel = ({ optional, children }: FormLabelProps) => (
  <Stack direction={"row"} alignItems={"center"} spacing={1}>
    <Typography variant="emphasized">{children}</Typography>
    {optional && (
      <Typography color="secondary" variant="helper">
        &bull; Optional
      </Typography>
    )}
  </Stack>
);

export default FormLabel;
