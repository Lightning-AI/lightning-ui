import { useQuery } from "react-query";

import { headersFor } from "utils/api";
import { ExternalAppState } from "openapi/client";

import lightningService from "openapi/singleton";

export const queryKey = "getLightningState";

export default function useLightingState() {
  const headers = headersFor();
  const query = () =>
    lightningService.getStateApiV1StateGet(
      headers["X-Lightning-Type"]!,
      headers["X-Lightning-Session-UUID"]!,
      headers["X-Lightning-Session-ID"]!,
    );

  const lightningState = useQuery<ExternalAppState>("getLightningState", query);

  return lightningState;
}
