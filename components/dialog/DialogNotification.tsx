import React, { ReactNode } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from ".";
import { Stack, Box, Typography } from "..";
import { DialogProps } from "./Dialog";
import successIcon from "./success.svg";
import warningIcon from "./warning.svg";
import errorIcon from "./error.svg";

const getText: Record<DialogNotificationVariant, string> = {
  success: "Success",
  warning: "Are you sure?",
  error: "Error",
};

const getSrcIcon: Record<DialogNotificationVariant, string> = {
  success: successIcon,
  warning: warningIcon,
  error: errorIcon,
};

export type DialogNotificationVariant = "success" | "warning" | "error";

export type DialogNotificationProps = {
  message?: string;
  description?: string;
  variant: DialogNotificationVariant;
  actions: ReactNode;
  onClose: () => void;
} & Pick<DialogProps, "open">;

export default function DialogNotification({ ...props }: DialogNotificationProps) {
  const text = getText[props.variant];
  const src = getSrcIcon[props.variant];
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle text={text} onClick={props.onClose} />
      <DialogContent>
        <Stack width={"400px"} justifyContent={"center"} alignItems={"center"} spacing={2.5}>
          <Box component={"img"} width={"96px"} height={"96px"} src={src} />
          <Stack spacing={0.5} alignItems={"center"} textAlign={"center"}>
            <Typography fontFamily={"UCity"} fontWeight={600} fontSize={"16px"} lineHeight={"20px"}>
              {props.message}
            </Typography>
            <Typography fontFamily={"Roboto"} fontWeight={400} fontSize={"14px"} lineHeight={"20px"}>
              {props.description}
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>{props.actions}</DialogActions>
    </Dialog>
  );
}
