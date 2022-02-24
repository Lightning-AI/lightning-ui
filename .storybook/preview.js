import React from 'react';
import ThemeProvider, { theme } from '../src/design-system/theme';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
// import '../src/design-system/style.css';

export const decorators = [
  (Story) => (
      <ThemeProvider>
          <EmotionThemeProvider theme={theme}>
              {Story()}
          </EmotionThemeProvider>
      </ThemeProvider>
  )
];
