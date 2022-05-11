import { useSnackbar as useNotistackSnackbar } from "notistack";
import { AlertProps } from "../alert";
import { useCallback } from "react";

// Added to only allow expected Alert props to be passed
export type EnqueueSnackbarProps = Pick<AlertProps, "action" | "children" | "severity" | "title">;

export function useSnackbar() {
  const { enqueueSnackbar: enqueueNotistackSnackbar, closeSnackbar } = useNotistackSnackbar();

  const enqueueSnackbar = useCallback(
    (props: EnqueueSnackbarProps) => {
      return enqueueNotistackSnackbar(props);
    },
    [enqueueNotistackSnackbar],
  );
  return { enqueueSnackbar, closeSnackbar };
}
