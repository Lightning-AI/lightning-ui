import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useLightningWs from "hooks/useLightningWs";

import AppRoutes from "components/AppRoutes";
import ThemeProvider from "design-system/theme";

function App() {
  useLightningWs();

  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
