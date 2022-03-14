import { useMutation, useQueryClient } from "react-query";

import { headersFor, stateEndpoint } from "utils/api";
import { LightningState } from "types/lightning";
import { queryKey } from "./useLightningState";

export default function useUpdateLightningState() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (state: LightningState) =>
      fetch(stateEndpoint, {
        body: JSON.stringify({ state }),
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
