import React from "react";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import Tabs from "components/Tabs";
import Actions from "components/Actions";
import Footer from "components/Footer";

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "15px",
});

export default function AppView() {
  return (
    <>
      <Header>
        <Tabs />
        <Actions />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}
