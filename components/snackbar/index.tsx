import MuiSnackbar, {
  SnackbarCloseReason,
  SnackbarOrigin,
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material/Snackbar";
import Alert, { AlertProps } from "../alert";
import React, { SyntheticEvent } from "react";
import { Box } from "..";

export type SnackbarProps = {
  onClose?: (event: Event | SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => void;
} & Pick<AlertProps, "severity" | "title" | "children" | "action"> &
  Pick<MuiSnackbarProps, "open"> &
  SnackbarOrigin;

const AlertRef = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return (
    <Box ref={ref}>
      <Alert {...props} />
    </Box>
  );
});

const Snackbar = ({ open, onClose, vertical, horizontal, ...props }: SnackbarProps) => {
  return open ? (
    <MuiSnackbar
      key={vertical + horizontal}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={onClose}
      autoHideDuration={5000}
      sx={{
        background: "white",
        boxShadow: 2,
        borderRadius: "8px",
      }}>
      <AlertRef {...props} show={open} onClose={onClose} />
    </MuiSnackbar>
  ) : null;
};

export default Snackbar;
