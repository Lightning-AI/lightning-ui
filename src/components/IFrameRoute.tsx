import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material";

import useLightningState from "hooks/useLightningState";

type Props = {
  name: string;
  iframeTargetUrl: string;
};

const IFrame = styled("iframe")({
  height: "100%",
  width: "100%",
});

export default function IFrameRoute(props: Props) {
  let [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const onLoadHandler = () => setLoaded(true);
  const lightningState = useLightningState();

  useEffect(() => {
    if (loaded && lightningState.data) {
      iframeRef.current?.contentWindow?.postMessage(lightningState.data, props.iframeTargetUrl);
    }
  });

  return (
    <IFrame 
      name={props.name} 
      src={props.iframeTargetUrl} 
      title={props.name} 
      ref={iframeRef}
      onLoad={onLoadHandler}
    />
  );
}
