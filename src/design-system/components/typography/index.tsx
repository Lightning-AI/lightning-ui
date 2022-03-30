import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

export type TypographyProps = MuiTypographyProps;

const Typography = (props: TypographyProps) => <MuiTypography {...props} />;

export default Typography;
