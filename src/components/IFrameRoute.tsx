import React, { useEffect, useRef, useState } from "react";
import { Alert, Box } from "@mui/material";

import useLightningState from "hooks/useLightningState";
import useUpdateLightningState from "hooks/useUpdateLightningState";

type Props = {
  name: string;
  iframeTargetUrl: string;
};

const isEstablishCommunicationMessage = (message: MessageEvent, iframeTargetUrl: string) => {
  return (
    message.data === "Establish communication" && message?.ports?.[0] && iframeTargetUrl.startsWith(message.origin)
  );
};

export default function IFrameRoute(props: Props) {
  const [iframePort, setIframePort] = useState<MessagePort | undefined>(undefined);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const lightningState = useLightningState();

  const lightningStateMutation = useUpdateLightningState();

  useEffect(() => {
    const iframeMessageListener = (message: MessageEvent) => {
      if (isEstablishCommunicationMessage(message, props.iframeTargetUrl)) {
        const internalPort = message.ports[0];
        setIframePort(internalPort);

        message.ports[0].onmessage = (message: MessageEvent) => {
          console.log(`FIXME(alecmerdler): Debugging`, message.data);
          lightningStateMutation.mutate(message.data);
        };
      }
    };

    window.addEventListener("message", iframeMessageListener);

    return () => {
      window.removeEventListener("message", iframeMessageListener);
    };
  }, [props.iframeTargetUrl, lightningState.data, lightningStateMutation]);

  useEffect(() => {
    if (iframePort && lightningState.data) {
      iframePort.postMessage(lightningState.data);
    }
  }, [iframePort, lightningState.data]);

  return (
    <Box display={"flex"} flexDirection={"column"} height={"100%"}>
      {lightningStateMutation.isError && <Alert severity="warning">Failed to update, please try again.</Alert>}
      <Box
        height={"100%"}
        width={"100%"}
        component={"iframe"}
        sx={{ border: "none" }}
        name={props.name}
        src={props.iframeTargetUrl}
        title={props.name}
        ref={iframeRef}
      />
    </Box>
  );
}
