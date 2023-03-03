import MuiDialogTitle from "@mui/material/DialogTitle";

import { IconButton, Stack, Typography } from "..";
import { Close } from "../../icons";

export type DialogTitleProps = {
  text: string;
  subtext?: string;
  onCloseClick?: () => void;
  centerTitle?: boolean;
};

const DialogTitle = ({ text, subtext, onCloseClick, centerTitle }: DialogTitleProps) => (
  <MuiDialogTitle>
    <Stack spacing={0.75} alignItems={centerTitle ? "center" : undefined}>
      <Stack direction={"row"} justifyContent={centerTitle ? "center" : "flex-start"} alignItems={"center"}>
        <Typography
          sx={{
            marginX: centerTitle ? "20px" : undefined,
            fontSize: "16px",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "20px",
            color: "rgba(28, 28, 28, 1)",
          }}>
          {text}
        </Typography>
        {onCloseClick && (
          <IconButton
            disableRipple
            disableFocusRipple
            sx={{ color: "black", padding: 0, position: "absolute", right: "24px" }}
            onClick={onCloseClick}>
            <Close sx={{ fontSize: "16px" }} />
          </IconButton>
        )}
      </Stack>
      {subtext && (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "16px",
            color: "rgba(91, 94, 105, 1)",
          }}>
          {subtext}
        </Typography>
      )}
    </Stack>
  </MuiDialogTitle>
);

export default DialogTitle;
