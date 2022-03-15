import MuiDialogActions, { DialogActionsProps as MuiDialogActionsProps } from "@mui/material/DialogActions";

export type DialogActionsProps = Pick<MuiDialogActionsProps, "children">;

const DialogActions = (props: DialogActionsProps) => {
  return <MuiDialogActions {...props} />;
};

export default DialogActions;
