import MuiDialogTitle from "@mui/material/DialogTitle";
import { Stack, Typography, IconButton } from "design-system/components";
import { Close } from "design-system/icons";

export type DialogProps = {
  text: string;
  onClick?: () => void;
};

const DialogTitle = (props: DialogProps) => (
  <MuiDialogTitle>
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
      <IconButton disableRipple disableFocusRipple sx={{ color: "black" }} onClick={props.onClick}>
        <Close sx={{ fontSize: "16px" }} />
      </IconButton>
    </Stack>
  </MuiDialogTitle>
);

export default DialogTitle;
