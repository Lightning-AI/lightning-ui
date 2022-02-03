import React from "react";
import { styled } from "@mui/material";
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

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
  return (
    <ActionsContainer>
      <Chip label="Running Locally" color="success" />
      <ActionButton onClick={() => window.open("/admin", "_blank")}>Admin</ActionButton>
      <ActionButton disabled>Share</ActionButton>
    </ActionsContainer>
  );
}
