import React from "react";
import ThemeProvider, { theme } from "../src/design-system/theme";
// Required to get theme propagated in storybook see https://github.com/mui/material-ui/issues/24282#issuecomment-952211989
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

export const decorators = [
  Story => (
    <ThemeProvider>
      <EmotionThemeProvider theme={theme}>{Story()}</EmotionThemeProvider>
    </ThemeProvider>
  ),
];
