import React from "react";
import { Chip, styled } from "@mui/material";

import AdminMenu from "./AdminMenu";
import useLightningState from "hooks/useLightningState";

import LightningLogo from "resources/images/lightning-logo-with-text.svg";
import AdminTabs from "./AdminTabs";

const Wrapper = styled("div")({
  margin: "0 auto",
  maxWidth: "1280px",
});

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
});

export default function AdminView() {
  const lightningState = useLightningState();

  if (lightningState.isLoading) {
    return <div>Loading...</div>;
  }

  if (lightningState.isError || !lightningState.data) {
    return <div>Error loading app details...</div>;
  }

  return (
    <Wrapper>
      <Header>
        <img src={LightningLogo} alt="Lightning Logo" />
        <Chip label="Local" color="error" />
      </Header>
      <AdminMenu />
      <AdminTabs />
    </Wrapper>
  );
}
