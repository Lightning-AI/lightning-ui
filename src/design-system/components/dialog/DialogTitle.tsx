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
        <Typography variant="largeEmphasized">{props.text}</Typography>
        <IconButton disableRipple disableFocusRipple sx={{ color: "black", padding: 0 }} onClick={props.onClick}>
          <Close sx={{ fontSize: "16px" }} />
        </IconButton>
      </Stack>
      {props.subtext && <Typography variant="body">{props.subtext}</Typography>}
    </Stack>
  </MuiDialogTitle>
);

export default DialogTitle;
