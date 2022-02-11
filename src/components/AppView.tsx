import React from "react";
import { styled } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import Tabs from "components/Tabs";
import Actions from "components/Actions";
import Footer from "components/Footer";
import useLightningState from "hooks/useLightningState";
import { AppStage } from "types/lightning";
import lightningLogo from "resources/images/lightning-logo-with-text.svg";

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "15px",
});

const NotRunningMessage = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
});

export default function AppView() {
  const lightingState = useLightningState();

  if (!lightingState.isLoading && lightingState.data?.app_state.stage !== AppStage.running) {
    return (
      <NotRunningMessage>
        <img src={lightningLogo} alt="Lightning.ai Logo" />
        <span>App is not running</span>
        <Link to="/admin">Go to admin</Link>
      </NotRunningMessage>
    );
  }

  return (
    <>
      <Header>
        <Tabs />
        <Actions />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}
