import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

type TypographyProps = Pick<
  MuiTypographyProps,
  "variant" | "children" | "noWrap" | "align" | "sx" | "paragraph" | "color"
>;

const Typography = (props: TypographyProps) => <MuiTypography {...props} />;

export default Typography;
