import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

export type TypographyProps = MuiTypographyProps;

const Typography = (props: TypographyProps & {component: React.ElementType}) => (
  <MuiTypography color={(theme: any) => theme.palette.text.primary}  {...props} />
);

export default Typography;
