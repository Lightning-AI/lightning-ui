import React, { useState } from "react";
import { PlayCircleOutline, PauseCircleOutline } from "design-system/icons";
import { Button, Stack, Typography } from "design-system/components";

import { menuBackground } from "lightning-colors";
import useLightningState from "hooks/useLightningState";
import useStartApp from "hooks/useStartApp";
import useStopApp from "hooks/useStopApp";
import { AppStage, LightningSpec } from "types/lightning";
import useLightningSpec from "hooks/useLightningSpec";

const getAppName = (specData: LightningSpec) => {
  const appName = specData.find(component => component.affiliation.slice(-1)[0] === "root");
  return appName?.cls_name;
};

function AppName() {
  const lightningSpec = useLightningSpec();
  const appName = lightningSpec.data ? getAppName(lightningSpec.data) : "Local App";
  return (
    <Typography fontFamily={"Ucity"} fontStyle={"normal"} fontWeight={600} fontSize={"24px"} lineHeight={"24px"}>
      {appName}
    </Typography>
  );
}

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

  return (
    <Button
      icon={<PauseCircleOutline />}
      color={"success"}
      onClick={onStop}
      disabled={desiredStopped}
      text={"Running Locally"}
    />
  );
}

function Actions() {
  const lightningState = useLightningState();

  const stage = lightningState.data?.app_state?.stage;

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"} padding={0.75}>
      {stage === AppStage.blocking ? <StartAction /> : <StopAction />}
      <Button
        color={"grey"}
        text={"Open App"}
        disabled={stage !== AppStage.running}
        onClick={() => window.open("/view", "_blank")}
      />
      <Button color={"grey"} text={"Share"} disabled />
      <Button color={"grey"} text={"Publish"} disabled />
    </Stack>
  );
}

export default function AdminMenu() {
  return (
    <Stack padding={"0 20px"} paddingBottom={3.5} sx={{ backgroundColor: menuBackground }}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <AppName />
        <Actions />
      </Stack>
    </Stack>
  );
}
