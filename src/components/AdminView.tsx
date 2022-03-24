import React from "react";

import AdminMenu from "./AdminMenu";
import useLightningState from "hooks/useLightningState";
import { Label, Box, Stack } from "design-system/components";

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
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} padding={"10px"}>
        <Box component={"img"} src={LightningLogo} alt="Lightning Logo" />
        <Label text="Local" color="error" />
      </Stack>
      <AdminMenu />
      <AdminTabs />
    </Box>
  );
}
