import { useQuery } from "react-query";

import { headersFor } from "utils/api";
import { ExternalComponentSpec } from "openapi/client";
import lightningService from "openapi/singleton";

export const queryKey = "getLightningSpec";

export default function useLightningSpec() {
  const headers = headersFor();

  const query = () =>
    lightningService.getSpecApiV1SpecGet(headers["X-Lightning-Session-UUID"]!, headers["X-Lightning-Session-ID"]!);

  const lightningSpec = useQuery<ExternalComponentSpec[]>("getLightningSpec", query);

  return lightningSpec;
}
