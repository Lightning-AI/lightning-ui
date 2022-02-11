import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useLightningWs from "hooks/useLightningWs";

import AppRoutes from "components/AppRoutes";

function App() {
  useLightningWs();

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
