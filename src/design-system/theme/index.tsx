import { ReactNode, useEffect } from "react";
import { useState } from "react";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import addons from "@storybook/addons";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

import components from "./components";
import palette from "./palette";
import paletteDark from "./paletteDark";
import shadows from "./shadows";
import typography from "./typography";

const channel = addons.getChannel();
export const theme = createTheme({
  typography,
  palette,
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
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);
  useEffect(() => {
    theme.palette.mode = isDark ? "dark" : "light";
    colorScheme = isDark ? "dark" : "light";
    document.body?.style.setProperty(
      "background",
      isDark ? darkTheme.palette.background.default : theme.palette.background.default,
    );
  }, [isDark, colorScheme]);
  return <MuiThemeProvider theme={isDark ? darkTheme : theme} children={children} />;
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
