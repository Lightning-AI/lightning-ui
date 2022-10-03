import { ReactNode } from "react";

import { Stack, Typography } from "../";

export type FormLabelProps = {
  optional?: boolean;
  children: ReactNode;
};

const FormLabel = ({ optional, children }: FormLabelProps) => (
  <Stack direction={"row"} alignItems={"center"} spacing={1}>
    <Typography
      sx={{
        color: "rgba(28, 28, 28, 1)",
        fontFamily: "UCity",
        fontWeight: 600,
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "20px",
      }}>
      {children}
    </Typography>
    {optional && (
      <Typography
        sx={{
          color: "#65676B",
          fontFamily: "Roboto",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "12px",
          lineHeight: "16px",
        }}>
        &bull; Optional
      </Typography>
    )}
  </Stack>
);

export default FormLabel;
