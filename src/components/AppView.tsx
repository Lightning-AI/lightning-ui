import React from "react";

import { Box, Stack } from "design-system/components";
import { Link, Outlet } from "react-router-dom";

import ComponentTabs from "components/ComponentTabs";
import Footer from "components/Footer";
import useLightningState from "hooks/useLightningState";
import lightningLogo from "resources/images/lightning-logo-with-text.svg";
import { AppStage } from "types/lightning";

export default function AppView() {
  const lightningState = useLightningState();

  if (!lightningState.isLoading && lightningState.data?.app_state?.stage !== AppStage.running) {
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
      <Stack direction={"row"} marginX={2}>
        <Box flex={2}>
          <ComponentTabs />
        </Box>
      </Stack>
      <Box height={"100%"} marginX={0}>
        <Outlet />
      </Box>
      {!lightningState.data?.vars?.hide_footer && (
        <Footer hideFooterShadow={lightningState.data?.vars?.hide_footer_shadow} />
      )}
    </Stack>
  );
}
