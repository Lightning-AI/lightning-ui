import { useQuery } from "react-query";

import { LightingState } from "types/lightning";
import { headersFor, resolveResponse, stateEndpoint } from "utils/api";

export const queryKey = "getLightningState";

const refetchInterval = 1000;

export default function useLightingState() {
  const getState = () => fetch(stateEndpoint, { headers: headersFor() }).then(resolveResponse);

  const lightningState = useQuery<LightingState>(
    "getLightningState",
    getState,
    // TODO(alecmerdler): Replace polling with WebSockets
    { refetchInterval },
  );

  return lightningState;
}
