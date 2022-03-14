import { useQuery } from "react-query";

import { headersFor, stateEndpoint } from "utils/api";
import { LightningState } from "types/lightning";

export const queryKey = "getLightningState";

const refetchInterval = 1000;

export default function useLightningState() {
  const getState = () =>
    fetch(stateEndpoint, { headers: headersFor() }).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    });

  const lightningState = useQuery<LightningState>(
    "getLightningState",
    getState,
    // TODO(alecmerdler): Replace polling with WebSockets
    { refetchInterval },
  );

  return lightningState;
}
