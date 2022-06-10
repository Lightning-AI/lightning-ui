import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type {
  FontStyle,
  FontStyleOptions,
  TypographyStyle,
  TypographyStyleOptions,
  TypographyUtils,
} from "@mui/material/styles/createTypography";
import { ReactNode } from "react";
import components from "./components";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

export const theme = createTheme({
  typography,
  palette,
  shadows,
  components,
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <MuiThemeProvider theme={theme} children={children} />;
};

export default ThemeProvider;

declare module "@mui/material" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    h7: true;
    subtitle1: true;
    subtitle2: true;
    largeEmphasized: true;
    emphasized: true;
    body: true;
    helper: true;

    body1: false;
    body2: false;
    caption: false;
    button: true;
    overline: false;
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    "10": string;
    "20": string;
    "40": string;
    "50": string;
    "70": string;
    "gradient": string;
  }

  type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "subtitle1"
    | "subtitle2"
    | "largeEmphasized"
    | "emphasized"
    | "body"
    | "helper";

  interface TypographyOptions extends Partial<Record<Variant, TypographyStyleOptions> & FontStyleOptions> {}
  interface TypographyVariantsOptions extends TypographyOptions {}

  interface Typography extends Record<Variant, TypographyStyle>, FontStyle, TypographyUtils {}
  interface TypographyVariants extends Typography {}
}
