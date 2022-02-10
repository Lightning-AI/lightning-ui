import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

import useLightningState from "hooks/useLightningState";

type Props = {
  name: string;
  iframeTargetUrl: string;
};

const isRegisterPortMessage = (
  message: MessageEvent,
  iframeTargetUrl: string
) => {
  return (
    (message.data === "Establish communication") &&
    (`${message.origin}/` === iframeTargetUrl) &&
    message?.ports?.[0]
  );
};

export default function IFrameRoute(props: Props) {
  const [iframeState, setIframeState] = useState("No state reported yet");
  const [iframePort, setIframePort] = useState<MessagePort | undefined>(undefined);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const lightningState = useLightningState();

  useEffect(() => {
    window.addEventListener('message', (message: MessageEvent) => {
      if(isRegisterPortMessage(message, props.iframeTargetUrl)) {
        const internalPort = message.ports[0];
        message.ports[0].onmessage = (message: MessageEvent) => {
          if (message.data === "Subscribed" && lightningState.data) {
            internalPort.postMessage(lightningState.data);
          } else {
            setIframeState(message.data);
          }
        };
        setIframePort(message.ports[0]);
      }
    });
  }, [props.iframeTargetUrl, lightningState.data]); 

  useEffect(() => {
    if (iframePort && lightningState.data) {
      iframePort.postMessage(lightningState.data);
    }
  }, [iframePort, lightningState.data]);

  return (
    <Box display={"flex"} flexDirection={"column"} height={"100%"}>
      <Typography>Component State: {iframeState}</Typography>
      <Box
        height={"100%"}
        width={"100%"}
        component={"iframe"}
        name={props.name} 
        src={props.iframeTargetUrl} 
        title={props.name} 
        ref={iframeRef}
      />
    </Box>
  );
}
