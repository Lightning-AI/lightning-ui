import React from "react";

// Required to get theme propagated in storybook see https://github.com/mui/material-ui/issues/24282#issuecomment-952211989
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { BrowserRouter } from "react-router-dom";

import SnackbarProvider from "../src/design-system/components/snackbar-provider";
import ThemeProvider, { darkTheme, theme as lightTheme } from "../src/design-system/theme";

// toggle here to switch between light and dark theme
const defaultTheme = "light";

export const decorators = [
  Story => (
    <ThemeProvider colorScheme={defaultTheme}>
      <EmotionThemeProvider theme={defaultTheme === "dark" ? darkTheme : lightTheme}>
        <BrowserRouter>
          <SnackbarProvider>{Story()}</SnackbarProvider>
        </BrowserRouter>
      </EmotionThemeProvider>
    </ThemeProvider>
  ),
];
