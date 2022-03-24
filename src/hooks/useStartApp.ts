import { useMutation, useQueryClient } from "react-query";

import { headersFor } from "utils/api";
import { AppStage, ExternalAppStateUpdate } from "openapi/client";
import { queryKey } from "./useLightningState";
import lightningService from "openapi/singleton";

export default function useStartApp() {
  const headers = headersFor();
  const queryClient = useQueryClient();

  const body = { stage: AppStage.RUNNING } as ExternalAppStateUpdate;
  const updateState = () =>
    lightningService.postStateApiV1StatePost(
      body,
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
