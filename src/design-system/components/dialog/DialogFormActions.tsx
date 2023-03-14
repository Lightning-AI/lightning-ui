import { ReactNode } from "react";

import TextField from "design-system/components/text-field";

import { Dialog, DialogActions, DialogContent, DialogTitle } from ".";
import { Stack } from "..";
import { DialogProps } from "./Dialog";

export type DialogFormActionsProps = {
  title: string;
  message?: string;
  description?: string;
  imageSrc: string;
  actions: ReactNode;
  onClose: () => void;
} & Pick<DialogProps, "open">;

export default function DialogFormActions({ ...props }: DialogFormActionsProps) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle text={props.title} onCloseClick={props.onClose} />
      <DialogContent>
        <Stack
          width={"400px"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2.5}
          sx={{ ".MuiDialogActions-root, .MuiOutlinedInput-root, .MuiFormControl-root": { width: "100%" } }}>
          <TextField
            helperText="Helper Text"
            label="Label"
            onChange={() => {}}
            placeholder="Placeholder"
            size="medium"
            suffix=""
            tooltip="Tooltip message"
            type="text"
          />
          <DialogActions>{props.actions}</DialogActions>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
