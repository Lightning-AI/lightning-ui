import { ReactNode } from "react";

import { InfoIconWithHelpTooltip, Stack, Typography } from "../";

export type FormLabelProps = {
  optional?: boolean;
  tooltip?: string;
  children: ReactNode;
};

const FormLabel = ({ optional, tooltip, children }: FormLabelProps) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={0.5}
    sx={{
      color: (theme: any) => theme.palette.text.primary,
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "20px",
    }}>
    {children}
    {optional && (
      <Typography
        sx={{
          paddingLeft: 0.5,
          color: "#65676B",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "12px",
          lineHeight: "16px",
        }}>
        &bull; Optional
      </Typography>
    )}
    {tooltip && <InfoIconWithHelpTooltip message={tooltip} size={"small"} />}
  </Stack>
);

export default FormLabel;
