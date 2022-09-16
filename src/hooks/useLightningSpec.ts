import { useQuery } from "react-query";

import { LightningSpec } from "types/lightning";
import { requestParams, specEndpoint } from "utils/api";

export const queryKey = "getLightningSpec";

export default function useLightningSpec() {
  const getState = () =>
    fetch(specEndpoint, { ...requestParams() }).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    });

  const lightningSpec = useQuery<LightningSpec>("getLightningSpec", getState);

  return lightningSpec;
}
