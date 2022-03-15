import MuiDialog, { DialogProps as MuiDialogProps } from "@mui/material/Dialog";

export type DialogProps = Pick<MuiDialogProps, "open" | "children" | "fullWidth" | "onClose">;

const Dialog = (props: DialogProps) => <MuiDialog {...props} />;

export default Dialog;
