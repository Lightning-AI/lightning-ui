import { ReactNode } from "react";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";
import shadows from "./shadows";

export const theme = createTheme({
  typography,
  palette,
  shadows,
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <MuiThemeProvider theme={theme} children={children} />;
};

export default ThemeProvider;
