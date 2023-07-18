import { ReactNode, useEffect } from "react";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";

import components from "./components";
import palette from "./palette";
import paletteDark from "./paletteDark";
import shadows from "./shadows";
import typography from "./typography";

export const theme = createTheme({
  typography,
  palette: paletteDark,
  shadows,
  components,
});

export const darkTheme = createTheme({
  typography,
  palette: paletteDark,
  shadows,
  components,
});

const ThemeProvider = ({ children, colorScheme }: { children: ReactNode; colorScheme?: "light" | "dark" }) => {
  useEffect(() => {
    document.body?.style.setProperty(
      "background",
      colorScheme === "dark" ? darkTheme.palette.background.default : theme.palette.background.default,
    );
  }, [colorScheme]);
  return <MuiThemeProvider theme={colorScheme === "dark" ? darkTheme : theme} children={children} />;
};

export default ThemeProvider;

declare module "@mui/material/styles" {
  interface PaletteColor {
    "5"?: string;
    "10": string;
    "20": string;
    "40": string;
    "50": string;
    "70": string;
    "gradient": string;
  }
}
