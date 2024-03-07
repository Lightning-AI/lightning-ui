import { useCallback } from "react";

import { OptionsObject, useSnackbar as useNotistackSnackbar } from "notistack";

import { AlertProps } from "../alert";

// Added to only allow expected Alert props to be passed
export type EnqueueSnackbarProps = Pick<AlertProps, "action" | "children" | "severity" | "title">;

export function useSnackbar() {
  const { enqueueSnackbar: enqueueNotistackSnackbar, closeSnackbar } = useNotistackSnackbar();

  const enqueueSnackbar = useCallback(
    (props: EnqueueSnackbarProps, options?: OptionsObject) => {
      /**
       * Deduplicate snackbar by {@link props.title} if set, provided {@link options.key} isn't set, and
       * {@link options.preventDuplicate} isn't explicitly set to false.
       */
      const canDeduplicateByTitle =
        props?.title != null && options?.key == null && options?.preventDuplicate !== false;
      if (canDeduplicateByTitle) {
        options.key = props.title;
        options.preventDuplicate = true;
      }

      return enqueueNotistackSnackbar(props, options);
    },
    [enqueueNotistackSnackbar],
  );
  return { enqueueSnackbar, closeSnackbar };
}
