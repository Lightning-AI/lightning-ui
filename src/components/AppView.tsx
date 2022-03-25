import React from "react";
import { Box, Stack } from "design-system/components";
import { Link, Outlet } from "react-router-dom";

import Tabs from "components/Tabs";
import Actions from "components/Actions";
import Footer from "components/Footer";
import useLightningState from "hooks/useLightningState";
import lightningLogo from "resources/images/lightning-logo-with-text.svg";
import { AppStage } from "openapi/client";

export default function AppView() {
  const lightingState = useLightningState();

  if (!lightingState.isLoading && lightingState.data?.app_state?.stage !== AppStage.RUNNING) {
    return (
      <Stack alignItems={"center"} justifyContent={"center"} height={"100%"} width={"100%"}>
        <Box component={"img"} src={lightningLogo} alt="Lightning.ai Logo" />
        <Box component="span">App is not running</Box>
        <Link to="/admin">Go to admin</Link>
      </Stack>
    );
  }

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          marginLeft: "15px",
          marginRight: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Tabs />
        <Actions />
      </Box>
      <Outlet />
      <Footer />
    </>
  );
}
