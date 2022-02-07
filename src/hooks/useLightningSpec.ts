import { useQuery } from "react-query";

import { LightningSpec } from "types/lightning";
import { headersFor, resolveResponse, specEndpoint } from "utils/api";

export const queryKey = "getLightningSpec";

export default function useLightningSpec() {
  const getState = () => fetch(specEndpoint, { headers: headersFor() }).then(resolveResponse);

  const lightningState = useQuery<LightningSpec>("getLightningSpec", getState);

  return lightningState;
}
