import MuiSnackbar, { SnackbarProps as MuiSnackbarProps } from "@mui/material/Snackbar";
import Alert, { AlertProps } from "design-system/components/alert";
import React from "react";
import { Box } from "..";

export type SnackbarProps = Pick<AlertProps, "severity" | "title" | "children"> & Pick<MuiSnackbarProps, "open">;

const AlertRef = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
    return <Box ref={ref}><Alert {...props}/></Box>;
  });

const Snackbar = ({open, ...props}: SnackbarProps) => {
  return (
    <MuiSnackbar open={open} autoHideDuration={5000}>
      <AlertRef {...props} show={open}/>
    </MuiSnackbar>
  );
};

export default Snackbar;
