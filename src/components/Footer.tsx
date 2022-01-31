import React from "react";
import { styled } from "@mui/material";

import LightningLogo from "resources/images/lightning-logo-with-text.svg";

const FooterContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
});

export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 Grid.ai. All rights reserved</span>
      <img src={LightningLogo} alt="Lightning.ai" />
    </FooterContainer>
  );
}
