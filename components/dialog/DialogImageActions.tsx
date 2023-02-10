import { ReactNode } from "react";

import { Dialog, DialogActions, DialogContent, DialogTitle } from ".";
import { Box, Stack, Typography } from "..";
import { DialogProps } from "./Dialog";

export type DialogImageActionsProps = {
  title: string;
  message?: string;
  description?: string;
  imageSrc: string;
  actions: ReactNode;
  onClose: () => void;
} & Pick<DialogProps, "open">;

export default function DialogImageActions({ ...props }: DialogImageActionsProps) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle text={props.title} onCloseClick={props.onClose} />
      <DialogContent>
        <Stack width={"400px"} justifyContent={"center"} alignItems={"center"} spacing={2.5}>
          <Box component={"img"} width={"96px"} height={"96px"} src={props.imageSrc} />
          <Stack spacing={0.5} alignItems={"center"} textAlign={"center"}>
            <Typography
              fontFamily={`"Plus Jakarta Sans", sans-serif`}
              fontWeight={600}
              fontSize={"16px"}
              lineHeight={"20px"}>
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
