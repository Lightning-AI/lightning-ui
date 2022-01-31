import React from 'react';
import { styled } from '@mui/material';
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from 'components/AppRoutes';
import Tabs from "components/Tabs";
import Actions from 'components/Actions';
import Footer from 'components/Footer';

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "15px",
});

function App() {
  return (
    <Router>
      <Header>
        <Tabs />
        <Actions />
      </Header>
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
