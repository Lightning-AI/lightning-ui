import React from "react";

import AdminMenu from "./AdminMenu";
import useLightningState from "hooks/useLightningState";
import { Box, Label, Stack } from "design-system/components";

import LightningLogo from "resources/images/lightning-logo-with-text.svg";
import AdminTabs from "./AdminTabs";

export default function AdminView() {
  const lightningState = useLightningState();

  if (lightningState.isLoading) {
    return <div>Loading...</div>;
  }

  if (lightningState.isError || !lightningState.data) {
    return <div>Error loading app details...</div>;
  }

  return (
    <Box margin={"0 auto"} maxWidth={"1280px"}>
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Box component={"img"} src={LightningLogo} alt="Lightning Logo" padding={1.25} />
        <Label text="Local" color="primary" />
      </Stack>
      <AdminMenu />
      <AdminTabs />
    </Box>
  );
}
