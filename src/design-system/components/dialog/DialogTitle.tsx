import MuiDialogTitle from "@mui/material/DialogTitle";
import { Stack, Typography, IconButton } from "..";
import { Close } from "../../icons";

export type DialogProps = {
  text: string;
  subtext?: string;
  onClick?: () => void;
};

const DialogTitle = (props: DialogProps) => (
  <MuiDialogTitle>
    <Stack spacing={0.75}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Ucity",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "20px",
            color: "rgba(28, 28, 28, 1)",
          }}>
          {props.text}
        </Typography>
        <IconButton disableRipple disableFocusRipple sx={{ color: "black", padding: 0 }} onClick={props.onClick}>
          <Close sx={{ fontSize: "16px" }} />
        </IconButton>
      </Stack>
      {props.subtext && (
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Roboto",
            fontWeight: "400",
            lineHeight: "16px",
            color: "rgba(91, 94, 105, 1)",
          }}>
          {props.subtext}
        </Typography>
      )}
    </Stack>
  </MuiDialogTitle>
);

export default DialogTitle;
