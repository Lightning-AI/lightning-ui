import React from "react";

import ThemeProvider from "design-system/theme";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "components/AppRoutes";
import useLightningWs from "hooks/useLightningWs";

function App() {
  useLightningWs();

  return (
    <ThemeProvider>
      <Router basename={window.app_prefix ?? ""}>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
