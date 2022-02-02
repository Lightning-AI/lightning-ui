import { useQuery } from "react-query";

import { LightningSpec } from "types/lightning";
import { headersFor, specEndpoint } from "utils/api";

export const queryKey = "getLightningSpec";

export default function useLightningSpec() {
  const getState = () => fetch(specEndpoint, { headers: headersFor() })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    });

  const lightningState = useQuery<LightningSpec>("getLightningSpec", getState);

  return lightningState;
}
