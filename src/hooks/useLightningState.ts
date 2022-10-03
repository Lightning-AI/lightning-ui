import { useQuery } from "react-query";

import { LightningState } from "types/lightning";
import { requestParams, stateEndpoint } from "utils/api";

export const queryKey = "getLightningState";

export default function useLightingState() {
  const getState = () =>
    fetch(stateEndpoint, { ...requestParams() }).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    });

  const lightningState = useQuery<LightningState>("getLightningState", getState);

  return lightningState;
}
