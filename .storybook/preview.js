import React from "react";

// Required to get theme propagated in storybook see https://github.com/mui/material-ui/issues/24282#issuecomment-952211989
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { BrowserRouter } from "react-router-dom";

import SnackbarProvider from "../src/design-system/components/snackbar-provider";
import ThemeProvider, { theme } from "../src/design-system/theme";

export const decorators = [
  Story => (
    <ThemeProvider>
      <EmotionThemeProvider theme={theme}>
        <BrowserRouter>
          <SnackbarProvider>{Story()}</SnackbarProvider>
        </BrowserRouter>
      </EmotionThemeProvider>
    </ThemeProvider>
  ),
];
