import { ReactNode } from "react";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";

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

declare module "@mui/material/styles" {
  interface PaletteColor {
    "10": string;
    "20": string;
    "40": string;
    "50": string;
    "70": string;
    "gradient": string;
  }
}
