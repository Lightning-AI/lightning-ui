import React from "react";

import { Box, Paper, Stack, Typography } from "design-system/components";

import LightningLogo from "resources/images/lightning-logo-with-text.svg";

export default function Footer(props: { hideFooterShadow?: boolean }) {
  return (
    <>
      {!props.hideFooterShadow && (
        <Paper
          elevation={1}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingX: 2.5,
            paddingY: 1.5,
            borderRadius: 0,
            backgroundColor: "#fff",
            height: 28,
          }}
        />
      )}

      <Stack
        alignItems={"center"}
        direction={"row"}
        padding={1.5}
        left={{ xs: 0, md: "unset" }}
        justifyContent={{ xs: "center", md: "flex-end" }}
        sx={{ backgroundColor: "#fff", position: "fixed", bottom: 0, right: 0 }}>
        <Typography>Running on</Typography>
        &nbsp;
        <Box component={"img"} src={LightningLogo} alt="Lightning.ai" />
      </Stack>
    </>
  );
}
