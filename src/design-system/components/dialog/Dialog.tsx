import MuiDialog, { DialogProps as MuiDialogProps } from "@mui/material/Dialog";

export type DialogProps = MuiDialogProps;

const Dialog = ({ PaperProps, ...props }: DialogProps) => (
  <MuiDialog
    PaperProps={{
      ...PaperProps,
      style: { borderRadius: "8px", ...PaperProps?.style },
    }}
    {...props}
  />
);

export default Dialog;
