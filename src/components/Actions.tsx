import React from "react";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import useAdminUrl from "hooks/useAdminUrl";
import useRuntime, { Runtime } from "hooks/useRuntime";

const ActionsContainer = styled("div")({
  display: "flex",
  padding: "8px",
  alignItems: "center",
});

const ActionButton = styled(Button)({
  color: "black",
  fontSize: "15px",
  margin: "0 2px",
  textTransform: "none",
  background: "#E4E6EB",
});

export default function Actions() {
  const runtime = useRuntime();
  const adminUrl = useAdminUrl();

  const runningLabel = runtime === Runtime.cloud ? "Running on Cloud" : "Running Locally";

  return (
    <ActionsContainer>
      <Chip label={runningLabel} color="success" />
      <ActionButton onClick={() => window.open(adminUrl, "_blank")}>Admin</ActionButton>
      <ActionButton disabled>Share</ActionButton>
    </ActionsContainer>
  );
}
