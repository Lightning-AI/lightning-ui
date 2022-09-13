import MuiDialog, { DialogProps as MuiDialogProps } from "@mui/material/Dialog";

export type DialogProps = Pick<MuiDialogProps, "open" | "children" | "fullWidth" | "onClose">;

const Dialog = (props: DialogProps) => (
  <MuiDialog
    PaperProps={{
      style: { borderRadius: "8px" },
    }}
    {...props}
  />
);

export default Dialog;
