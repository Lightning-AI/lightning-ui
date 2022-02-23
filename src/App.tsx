import { Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";

// import AppRoutes from "components/AppRoutes";

function App() {
  return (
    <>
      <AcUnitIcon />
      <Typography fontFamily={"UCity"} fontWeight={300}>UCity Font Family 300</Typography>
      <Typography fontFamily={"UCity"} fontWeight={400}>UCity Font Family 400</Typography>
      <Typography fontFamily={"UCity"} fontWeight={600}>UCity Font Family 600</Typography>
      <Typography fontFamily={"Roboto"} fontWeight={400}>Roboto Font Family 400</Typography>
    </>
  );
}

export default App;
