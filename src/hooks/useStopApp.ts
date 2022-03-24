import { useMutation, useQueryClient } from "react-query";

import { AppStage, ExternalAppStateUpdate } from "openapi/client";
import { headersFor } from "utils/api";
import { queryKey } from "./useLightningState";
import lightningService from "openapi/singleton";

export default function useStopApp() {
  const headers = headersFor();
  const queryClient = useQueryClient();

  const body = { stage: AppStage.RESTARTING } as ExternalAppStateUpdate;
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
