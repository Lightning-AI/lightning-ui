import { useQuery } from "react-query";

import { LightingState } from "types/lightning";
import { headersFor, stateEndpoint } from "utils/api";

export const queryKey = "getLightningState";

export default function useLightingState() {
  const getState = () => fetch(stateEndpoint, { headers: headersFor() })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    });

  const lightningState = useQuery<LightingState>("getLightningState", getState);

  return lightningState;
}
