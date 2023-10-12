import { useEffect, useRef, useState } from "react";

import { Box, Stack } from "@mui/material";
import { Alert, CircularProgress } from "design-system/components";

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

/**
 * Determines if we can execute a `fetch()` request to the given URL.
 * Cross origin requests are blocked by the browser, so not all URLs can be fetched.
 */
const isFetchable = (url: string) => new URL(url).host === window.location.host;

const refetchInterval = 1000;

export default function IFrameRoute(props: Props) {
  const [iframePort, setIframePort] = useState<MessagePort | undefined>(undefined);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const lightningState = useLightningState();

  const lightningStateMutation = useUpdateLightningState();

  useEffect(() => {
    const iframeMessageListener = (message: MessageEvent) => {
      if (isEstablishCommunicationMessage(message, props.iframeTargetUrl)) {
        const internalPort = message.ports[0];
        setIframePort(internalPort);

        if (!internalPort) {
          console.error("Failed to establish communication with iframe, expecting `internalPort`");
          return;
        }
        internalPort.onmessage = (message: MessageEvent) => {
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

  useEffect(() => {
    if (props.iframeTargetUrl === "") {
      setIsAvailable(false);
    } else if (isFetchable(props.iframeTargetUrl)) {
      const interval = setInterval(() => {
        fetch(props.iframeTargetUrl).then(res => {
          if (res.status === 200) {
            setIsAvailable(true);
          } else {
            setIsAvailable(false);
          }
        });
      }, refetchInterval);

      return () => clearInterval(interval);
    } else {
      setIsAvailable(true);
    }
  }, [props.iframeTargetUrl]);

  return (
    <Box display={"flex"} flexDirection={"column"} height={"100%"}>
      <Alert title={"Warning"} severity="warning" show={lightningStateMutation.isError}>
        Failed to update, please try again.
      </Alert>
      {isAvailable ? (
        <Box
          height={"100%"}
          width={"100%"}
          component={"iframe"}
          // NOTE: Needed to allow underlying app frontends to request browser permissions.
          // By default, this will give the iframes from the same `src` these permissions. For, allowing
          // any other origin, we can do by `*`. Here we are only allowing the clipboard-write api to be
          // allowed with cross-site iframes.
          // https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-permissions-in-cross-origin-iframes
          allow={"camera; microphone; display-capture; clipboard-read; clipboard-write *;"}
          sx={{ border: "none" }}
          name={props.name}
          src={props.iframeTargetUrl}
          title={props.name}
          ref={iframeRef}
        />
      ) : (
        <Stack alignItems={"center"} justifyContent={"center"} height={"100%"}>
          <CircularProgress data-testid="loading-spinner" />
        </Stack>
      )}
    </Box>
  );
}
