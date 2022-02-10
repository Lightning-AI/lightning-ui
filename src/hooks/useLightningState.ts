import { useQuery } from "react-query";

import { headersFor, stateEndpoint } from "utils/api";
import { LightingState } from "types/lightning";

export const queryKey = "getLightningState";

const refetchInterval = 1000;

export default function useLightingState() {
  const getState = () =>
    fetch(stateEndpoint, { headers: headersFor() }).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    });

  const lightningState = useQuery<LightingState>(
    "getLightningState",
    getState,
    // TODO(alecmerdler): Replace polling with WebSockets
    { refetchInterval },
  );

  return lightningState;
}
