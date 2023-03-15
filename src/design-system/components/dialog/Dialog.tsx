import MuiDialog, { DialogProps as MuiDialogProps } from "@mui/material/Dialog";

export type DialogProps = MuiDialogProps;

const Dialog = ({ PaperProps, ...props }: DialogProps) => (
  <MuiDialog
    PaperProps={{
      ...PaperProps,
      style: { borderRadius: "8px", ...PaperProps?.style },
    }}
    sx={{
      "color": (theme: any) => theme.palette.text.primary,
      ".MuiFormControl-root p, .MuiButton-containedGrey": { color: (theme: any) => theme.palette.text.primary },
    }}
    {...props}
  />
);

export default Dialog;
