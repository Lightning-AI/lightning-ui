import { useCallback } from "react";

import { OptionsObject, useSnackbar as useNotistackSnackbar } from "notistack";

import { AlertProps } from "../alert";

// Added to only allow expected Alert props to be passed
export type EnqueueSnackbarProps = Pick<AlertProps, "action" | "children" | "severity" | "title">;

export function useSnackbar() {
  const { enqueueSnackbar: enqueueNotistackSnackbar, closeSnackbar } = useNotistackSnackbar();

  const enqueueSnackbar = useCallback(
    (props: EnqueueSnackbarProps, options?: OptionsObject) => {
      return enqueueNotistackSnackbar(props, options);
    },
    [enqueueNotistackSnackbar],
  );
  return { enqueueSnackbar, closeSnackbar };
}
