import React from "react";
import { Stack, Box } from "design-system/components";

import LightningLogo from "resources/images/lightning-logo-with-text.svg";

export default function Footer() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} padding={"10px"}>
      <Box component={"img"} src={LightningLogo} alt="Lightning.ai" />
    </Stack>
  );
}
