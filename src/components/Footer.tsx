import React from "react";
import { Typography, Stack, Box, Paper } from "design-system/components";

import LightningLogo from "resources/images/lightning-logo-with-text.svg";

export default function Footer() {
  return (
    <Paper elevation={1} sx={{ position: "absolute", left: 0, right: 0, bottom: 0, paddingX: 2.5, paddingY: 1.5 }}>
      <Stack direction={"row"} justifyContent={{ xs: "center", md: "flex-end" }} alignItems={"center"}>
        <Typography>Running on</Typography>
        &nbsp;
        <Box component={"img"} src={LightningLogo} alt="Lightning.ai" />
      </Stack>
    </Paper>
  );
}
