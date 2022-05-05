import { useMutation, useQueryClient } from "react-query";

import { AppStage, LightningState } from "types/lightning";
import { headersFor, stateEndpoint } from "utils/api";
import { queryKey } from "./useLightningState";

export default function useStartApp() {
  const queryClient = useQueryClient();

  const body = { stage: AppStage.running };

  const mutation = useMutation(
    () =>
      fetch(stateEndpoint, {
        body: JSON.stringify(body),
        method: "POST",
        headers: headersFor(),
      }),
    {
      onSuccess: () => {
        const refetchInterval = 500;

        const interval = setInterval(() => {
          const state = queryClient.getQueryData<LightningState>(queryKey);

          if (state?.app_state.stage !== AppStage.running) {
            queryClient.invalidateQueries(queryKey);
          } else {
            clearInterval(interval);
          }
        }, refetchInterval);
      },
    },
  );

  return mutation;
}
