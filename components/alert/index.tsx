import { ReactNode } from "react";

import MuiAlert, { AlertProps as MuiAlertProps } from "@mui/material/Alert";
import MuiAlertTitle from "@mui/material/AlertTitle";
import { useTheme } from "@mui/material/styles";

import { Box } from "..";
import { CheckCircle, Dangerous, Info, Warning } from "../../icons";

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
  const hasChildren = typeof children !== "undefined" && children !== "";
  const hasMoreThanOneLine =
    (props.title && hasChildren) ||
    (props?.title && props?.title?.length > 70) ||
    (hasChildren && typeof children === "string" && children?.length > 70);
  const iconPaddingTop = props?.title || hasMoreThanOneLine ? 0 : 0.5;
  const iconPaddingBottom = !hasChildren ? 0 : 0.5;
  const alignItems = hasMoreThanOneLine ? "flex-start" : "center";
  const alignItemsAction = typeof props?.action !== "undefined" ? "center" : "flex-start";
  const theme: any = useTheme();
  const isDark = theme.palette.mode === "dark";
  const onCloseHandler = (event: any) => {
    props.onClose && props.onClose(event);
  };

  return show ? (
    <MuiAlert
      {...props}
      variant={"outlined"}
      iconMapping={severityIcon}
      onClose={onCloseHandler}
      sx={{
        "alignItems": alignItems,
        "color": "#050505",
        "display": "flex",
        "fontWeight": "normal",
        "fontStyle": "normal",
        "fontSize": "14px",
        "lineHeight": "20px",
        "borderLeft": `8px solid ${severityColor[props.severity ?? "info"]}`,
        "backgroundColor": "white !important" as any,
        "padding": "12px",
        "width": "500px",
        "wordBreak": "break-all",
        "& .MuiAlert-icon": {
          paddingTop: iconPaddingTop,
          paddingBottom: iconPaddingBottom,
          alignItems: "flex-start",
        },
        "& .MuiAlert-message": {
          paddingY: 0,
          flex: 1,
        },
        "& .MuiAlert-action": {
          alignItems: alignItemsAction,
          paddingRight: 1,
          paddingTop: 0,
        },
      }}>
      <MuiAlertTitle
        sx={{
          fontWeight: 600,
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "20px",
          margin: 0,
        }}>
        {props.title}
      </MuiAlertTitle>
      {children && (
        <Box
          sx={{
            ...(isDark && {
              "color": theme.palette.common.black,
              ".MuiTypography-root": { color: theme.palette.common.black },
            }),
          }}
          paddingTop={props?.title && 0.5}>
          {children}
        </Box>
      )}
    </MuiAlert>
  ) : null;
};

export default Alert;
