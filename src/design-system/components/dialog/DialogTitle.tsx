import MuiDialogTitle from "@mui/material/DialogTitle";

import { IconButton, Stack, Typography } from "..";
import { Close } from "../../icons";

export type DialogTitleProps = {
  text?: string;
  subtext?: string;
  onCloseClick?: () => void;
  closeDataTestId?: string;
  center?: boolean;
};

const DialogTitle = ({ text, subtext, onCloseClick, closeDataTestId, center }: DialogTitleProps) => (
  <MuiDialogTitle>
    <Stack spacing={0.75} alignItems={center ? "center" : undefined}>
      <Stack
        minHeight={"20px"}
        direction={"row"}
        justifyContent={center ? "center" : "flex-start"}
        alignItems={"center"}>
        <Typography
          sx={{
            marginX: center ? "20px" : undefined,
            fontSize: "16px",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "20px",
            color: (theme: any) => theme.palette.text.primary,
          }}>
          {text}
        </Typography>
        {onCloseClick && (
          <IconButton
            disableRipple
            disableFocusRipple
            sx={{ color: (theme: any) => theme.palette.text.primary, padding: 0, position: "absolute", right: "24px" }}
            onClick={onCloseClick}
            data-testid={closeDataTestId}>
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
            color: (theme: any) => theme.palette.text.secondary,
          }}>
          {subtext}
        </Typography>
      )}
    </Stack>
  </MuiDialogTitle>
);

export default DialogTitle;
