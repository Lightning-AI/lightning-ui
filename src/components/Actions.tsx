import React from "react";
import { Button, Stack, Label } from "design-system/components";

import useAdminUrl from "hooks/useAdminUrl";
import useRuntime, { Runtime } from "hooks/useRuntime";

export default function Actions() {
  const runtime = useRuntime();
  const adminUrl = useAdminUrl();

  const runningLabel = runtime === Runtime.cloud ? "Running on Cloud" : "Running Locally";

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"} padding={0.75}>
      <Label text={runningLabel} color="success" />
      <Button color={"grey"} text={"Admin"} onClick={() => window.open(adminUrl, "_blank")} />
      <Button color={"grey"} text={"Share"} disabled />
    </Stack>
  );
}
