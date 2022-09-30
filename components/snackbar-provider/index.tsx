import React, { ReactNode } from "react";

import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";

import { Box } from "..";
import Alert, { AlertProps } from "../alert";
import { useSnackbar } from "./useSnackbar";

const AlertRef = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        "backgroundColor": "transparent",
        "& .MuiAlert-root": {
          boxShadow: 2,
        },
      }}>
      <Alert {...props} />
    </Box>
  );
});

export type SnackbarProviderProps = {
  children: ReactNode;
};

// We need to make it a function in order to be able to use hooks inside
// so it is considered as a functional component
const content = () => (key: string, message: any) => {
  const { closeSnackbar } = useSnackbar();
  const onCloseHandler = () => {
    !message.action && closeSnackbar(key);
  };
  const action = typeof message?.action === "function" ? message.action(key) : message.action;
  return (
    <AlertRef
      key={key}
      show={true}
      title={message?.title}
      severity={message?.severity}
      action={action}
      onClose={onCloseHandler}>
      {message?.children}
    </AlertRef>
  );
};

export default function SnackbarProvider(props: SnackbarProviderProps) {
  return (
    <NotistackSnackbarProvider
      maxSnack={5}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      content={content()}>
      {props.children}
    </NotistackSnackbarProvider>
  );
}
