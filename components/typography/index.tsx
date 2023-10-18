import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";
import { ElementType } from "react";

export type TypographyProps = MuiTypographyProps;

const Typography = (props: TypographyProps & { component?: ElementType }) => (
  <MuiTypography color={(theme: any) => theme.palette.text.primary} {...props} />
);

export default Typography;
