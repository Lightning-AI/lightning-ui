import React from "react";
import { Stack, Box } from "design-system/components";

import LightningLogo from "resources/images/lightning-logo-with-text.svg";

export default function Footer() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      left={20}
      bottom={20}
      position={"absolute"}>
      <Box component={"img"} src={LightningLogo} alt="Lightning.ai" />
    </Stack>
  );
}
