import { Info, Dangerous, Warning, CheckCircle } from "../../icons";
import MuiAlert, { AlertProps as MuiAlertProps } from "@mui/material/Alert";
import MuiAlertTitle from "@mui/material/AlertTitle";
import { ReactNode, useEffect, useState } from "react";

const severityColor: Record<string, any> = {
  info: "#1877F2",
  success: "#31A24C",
  warning: "#FCBE2E",
  error: "#E02C2D",
};

const severityIcon: Record<string, ReactNode> = {
  info: <Info sx={{ color: severityColor.info }} />,
  success: <CheckCircle sx={{ color: severityColor.success }} />,
  warning: <Warning sx={{ color: severityColor.warning }} />,
  error: <Dangerous sx={{ color: severityColor.error }} />,
};

export type AlertProps = {
  title?: string;
  show?: boolean;
} & Pick<MuiAlertProps, "severity" | "children" | "action" | "onClose">;

const Alert = ({ children, show, ...props }: AlertProps) => {
  const [isShown, setIsShown] = useState(show);
  useEffect(() => setIsShown(show), [show]);
  const alignItemsIcon = props?.title ? "flex-start" : "center";
  const alignItemsAction = typeof props?.action !== "undefined" ? "center" : "flex-start";
  const onCloseHandler = (event: any) => {
    props.onClose && props.onClose(event);
    setIsShown(false);
  };

  return isShown ? (
    <MuiAlert
      {...props}
      variant={"outlined"}
      iconMapping={severityIcon}
      onClose={onCloseHandler}
      sx={{
        "color": "#050505",
        "display": "flex",
        "fontFamily": "Roboto",
        "fontWeight": "normal",
        "fontStyle": "normal",
        "fontSize": "14px",
        "lineHeight": "20px",
        "borderLeft": `8px solid ${severityColor[props.severity ?? "info"]}`,
        "backgroundColor": "white",
        "padding": "12px",
        "& .MuiAlert-icon": {
          alignItems: alignItemsIcon,
          padding: 0,
        },
        "& .MuiAlert-message": {
          padding: 0,
        },
        "& .MuiAlert-action": {
          alignItems: alignItemsAction,
        },
      }}>
      <MuiAlertTitle
        sx={{
          fontFamily: "UCity",
          fontWeight: 600,
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "20px",
        }}>
        {props.title}
      </MuiAlertTitle>
      {children}
    </MuiAlert>
  ) : null;
};

export default Alert;
