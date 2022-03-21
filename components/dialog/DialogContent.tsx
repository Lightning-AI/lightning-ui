import MuiDialogContent, { DialogContentProps as MuiDialogContentProps } from "@mui/material/DialogContent";

export type DialogContentProps = Pick<MuiDialogContentProps, "children">;

const DialogContent = (props: DialogContentProps) => {
  return <MuiDialogContent {...props} />;
};

export default DialogContent;
