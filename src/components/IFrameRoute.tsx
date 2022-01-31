import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material";

import useLightingState from "hooks/useLightningState";

type Props = {
  name: string;
  iframeTargetUrl: string;
};

const IFrame = styled("iframe")({
  height: "100%",
  width: "100%",
});

export default function IFrameRoute(props: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const lightningState = useLightingState();

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin === "TODO(alecmerdler): What do we expect here...?") {
        console.log(e.data);
      }
    }

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    }
  });

  useEffect(() => {
    if (iframeRef.current && lightningState.data) {
      iframeRef.current.contentWindow?.postMessage(
        // TODO(alecmerdler): Use tree traversal to only pass the piece of state for the given component...
        lightningState.data,
        window.location.origin
      );
    }
  }, [lightningState.data]);

  return (
    <IFrame 
      name={props.name} 
      src={props.iframeTargetUrl} 
      title={props.name} 
      ref={iframeRef}
    />
  );
}
