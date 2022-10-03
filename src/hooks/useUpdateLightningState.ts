import { useMutation, useQueryClient } from "react-query";

import { LightningState } from "types/lightning";
import { requestParams, stateEndpoint } from "utils/api";

import { queryKey } from "./useLightningState";

export default function useUpdateLightningState() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (state: LightningState) =>
      fetch(stateEndpoint, {
        body: JSON.stringify({ state }),
        method: "POST",
        ...requestParams(),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    },
  );

  return mutation;
}
