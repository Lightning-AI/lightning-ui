import React, { useState } from "react";
import { styled } from "@mui/material";
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import Chip from '@mui/material/Chip';

import { menuBackground } from "lightning-colors";
import useLightingState from "hooks/useLightningState";
import useStartApp from "hooks/useStartApp";
import useStopApp from "hooks/useStopApp";
import { AppStage } from "types/lightning";

const Wrapper = styled("div")({
  alignItems: "center",
  background: menuBackground,
  display: "flex",
  height: "56px",
  justifyContent: "space-between",
  padding: "0 20px",
});

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

function StartAction() {
  const [desiredRunning, setDesiredRunning] = useState(false);

  const startApp = useStartApp();

  const onStart = () => {
    setDesiredRunning(true);
    startApp.mutate();
  };

  return (
    <ActionButton 
      onClick={onStart}
      disabled={desiredRunning}
    >
      <PlayCircleOutlineIcon />
      Run
    </ActionButton>
  );
}
function StopAction() {
  const [desiredStopped, setDesiredStoped] = useState(false);

  const stopApp = useStopApp();

  const onStop = () => {
    setDesiredStoped(true);
    stopApp.mutate();
  };

  return (
    <ActionButton 
      onClick={onStop}
      disabled={desiredStopped}
    >
      <StopCircleIcon />
      Stop
    </ActionButton>
  );
}

function Actions() {
  const lightningState = useLightingState();

  const stage = lightningState.data?.app_state.stage;
  const runningLabel = stage === AppStage.running ? "Running Locally" : "Paused Locally";
  const runningColor = stage === AppStage.running ? "success" : undefined;

  return (
    <ActionsContainer>
      <Chip label={runningLabel} color={runningColor} />
      {stage === AppStage.blocking ? (
        <StartAction />
      ) : (
        <StopAction />
      )}
      <ActionButton 
        disabled={stage !== AppStage.running}
        href="/"
      >
          Open App
      </ActionButton>
      <ActionButton disabled>Share</ActionButton>
    </ActionsContainer>
  );
}


export default function AdminMenu() {
  return (
    <Wrapper>
      <h1>Local App</h1>
      <Actions />
    </Wrapper>
  );
}
