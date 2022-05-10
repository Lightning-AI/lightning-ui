import { useSnackbar as useNotistackSnackbar } from "notistack";
import { AlertProps } from "../alert";

export type EnqueueSnackbarProps = Pick<AlertProps, "action" | "children" | "severity" | "title">;

export function useSnackbar() {
  const { enqueueSnackbar: enqueueNotistackSnackbar, closeSnackbar } = useNotistackSnackbar();

  const enqueueSnackbar = (props: EnqueueSnackbarProps) => {
    return enqueueNotistackSnackbar(props);
  };
  return { enqueueSnackbar, closeSnackbar };
}
