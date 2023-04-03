import MuiDialog, { DialogProps as MuiDialogProps } from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";

export type DialogProps = MuiDialogProps;

const Dialog = ({ PaperProps, ...props }: DialogProps) => {
  const theme: any = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <MuiDialog
      PaperProps={{
        ...PaperProps,
        style: {
          borderRadius: "8px",
          background: theme.palette.background.default,
          ...PaperProps?.style,
        },
      }}
      sx={{
        "color": theme.palette.text.primary,
        ".MuiFormControl-root p, .MuiButton-containedGrey": { color: theme.palette.text.primary },
        "svg[data-testid='CloseIcon']:hover": { color: theme.palette.primary[50] },
        ...(isDark && {
          ".MuiOutlinedInput-root:not(.body2)": {
            background: theme.palette.grey["20"],
          },
          ".MuiButton-containedGrey": {
            "color": theme.palette.common.black,
            "&:hover": { color: theme.palette.common.white },
          },
          "*:hover::-webkit-scrollbar-thumb": {
            background: theme.palette.primary[60],
          },
          "*:hover::-webkit-scrollbar-track": {
            background: theme.palette.common.black,
          },
        }),
      }}
      {...props}
    />
  );
};

export default Dialog;
