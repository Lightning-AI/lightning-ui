import React, { useState } from "react";
import { PlayCircleOutline, StopCircle } from "design-system/icons";
import { Label, Button, Stack, Typography } from "design-system/components";

import { menuBackground } from "lightning-colors";
import useLightningState from "hooks/useLightningState";
import useStartApp from "hooks/useStartApp";
import useStopApp from "hooks/useStopApp";
import { AppStage } from "types/lightning";

function StartAction() {
  const [desiredRunning, setDesiredRunning] = useState(false);

  const startApp = useStartApp();

  const onStart = () => {
    setDesiredRunning(true);
    startApp.mutate();
  };

  return (
    <Button icon={<PlayCircleOutline />} color={"grey"} onClick={onStart} disabled={desiredRunning} text={"Run"} />
  );
}
function StopAction() {
  const [desiredStopped, setDesiredStoped] = useState(false);

  const stopApp = useStopApp();

  const onStop = () => {
    setDesiredStoped(true);
    stopApp.mutate();
  };

  return <Button icon={<StopCircle />} color={"grey"} onClick={onStop} disabled={desiredStopped} text={"Stop"} />;
}

function Actions() {
  const lightningState = useLightningState();

  const stage = lightningState.data?.app_state?.stage;
  const runningLabel = stage === AppStage.running ? "Running Locally" : "Paused Locally";
  const runningColor = stage === AppStage.running ? "success" : undefined;

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"} padding={0.75}>
      <Label text={runningLabel} color={runningColor} />
      {stage === AppStage.blocking ? <StartAction /> : <StopAction />}
      <Button
        color={"grey"}
        text={"Open App"}
        disabled={stage !== AppStage.running}
        onClick={() => window.open("/view", "_blank")}
      />
      <Button color={"grey"} text={"Share"} disabled />
    </Stack>
  );
}

export default function AdminMenu() {
  return (
    <Stack padding={"0 20px"} paddingBottom={3.5} sx={{ backgroundColor: menuBackground }}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
          <Typography variant={"h5"}>Local App</Typography>
          <Label text="Local on your laptop" color="primary" />
        </Stack>
        <Actions />
      </Stack>
    </Stack>
  );
}
