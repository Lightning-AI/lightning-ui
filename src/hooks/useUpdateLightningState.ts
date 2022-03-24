import { useMutation, useQueryClient } from "react-query";

import { headersFor } from "utils/api";
import { queryKey } from "./useLightningState";
import { ExternalAppStateUpdate } from "openapi/client";
import lightningService from "openapi/singleton";

export default function useUpdateLightningState() {
  const headers = headersFor();
  const queryClient = useQueryClient();

  const updateState = (state: ExternalAppStateUpdate["state"]) =>
    lightningService.postStateApiV1StatePost(
      { state } as ExternalAppStateUpdate,
      headers["X-Lightning-Type"]!,
      headers["X-Lightning-Session-UUID"]!,
      headers["X-Lightning-Session-ID"]!,
    );

  const mutation = useMutation(updateState, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return mutation;
}
