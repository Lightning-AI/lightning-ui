import { useMutation, useQueryClient } from "react-query";

import { AppStage } from "types/lightning";
import { headersFor, stateEndpoint } from "utils/api";
import { queryKey } from "./useLightningState";

export default function useStartApp() {
  const queryClient = useQueryClient();

  const body = { stage: AppStage.restarting };

  const mutation = useMutation(
    () =>
      fetch(stateEndpoint, {
        body: JSON.stringify(body),
        method: "POST",
        headers: headersFor(),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    },
  );

  return mutation;
}
