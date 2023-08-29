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
        "*:hover::-webkit-scrollbar-thumb": {
          background: isDark ? theme.palette.primary[60] : theme.palette.primary[30],
        },
        "*:hover::-webkit-scrollbar-track": {
          background: isDark ? theme.palette.common.black : theme.palette.primary[10],
        },
        "*::-webkit-scrollbar-thumb, *::-webkit-scrollbar-track": {
          background: "transparent",
          borderRadius: "8px",
        },
        "*::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },

        "*::selection": {
          background: isDark ? theme.palette.primary[30] : theme.palette.primary[80],
        },
        ...(isDark && {
          ".MuiOutlinedInput-root:not(.body2)": {
            background: theme.palette.grey["20"],
          },
          ".MuiButton-containedGrey": {
            "color": theme.palette.common.black,
            "&:hover": { color: theme.palette.common.white },
          },
        }),
      }}
      {...props}
    />
  );
};

export default Dialog;
