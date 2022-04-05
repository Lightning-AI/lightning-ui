import React from "react";
import { Box, Stack } from "design-system/components";
import { Link, Outlet } from "react-router-dom";

import ComponentTabs from "components/ComponentTabs";
import Actions from "components/Actions";
import Footer from "components/Footer";
import useLightningState from "hooks/useLightningState";
import { AppStage } from "types/lightning";
import lightningLogo from "resources/images/lightning-logo-with-text.svg";

export default function AppView() {
  const lightingState = useLightningState();

  if (!lightingState.isLoading && lightingState.data?.app_state?.stage !== AppStage.running) {
    return (
      <Stack alignItems={"center"} justifyContent={"center"} height={"100%"} width={"100%"}>
        <Box component={"img"} src={lightningLogo} alt="Lightning.ai Logo" />
        <Box component="span">App is not running</Box>
        <Link to="/admin">Go to admin</Link>
      </Stack>
    );
  }

  return (
    <Stack height={"100%"}>
      <Stack direction={"row"} marginTop={0.75} marginX={2}>
        <Box flex={2}>
          <ComponentTabs />
        </Box>
        <Actions />
      </Stack>
      <Box height={"100%"} marginX={2}>
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  );
}
