import { FormControlLabel, Stack } from "../";
import React from "react";
import RadioBase, { RadioOnlyProps } from "./RadioBase";
import FormControlContainer, { FormControlContainerProps } from "../form-control/FormControlContainer";
import FormStatusText from "../form-status-text";
import { CheckCircle, Dangerous, Warning, Info } from "@mui/icons-material";

export type RadioProps = {
  optional?: boolean;
  description: React.ReactElement;
  status?: "success" | "warning" | "error" | "info";
  statusText?: string;
} & RadioOnlyProps &
  FormControlContainerProps;

const statusColor = {
  info: "#1877F2",
  success: "#31A24C",
  warning: "#F1A817",
  error: "#E02C2D",
};

const statusIcon = {
  info: <Info sx={{ color: statusColor.info }} />,
  success: <CheckCircle sx={{ color: statusColor.success }} />,
  warning: <Warning sx={{ color: statusColor.warning }} />,
  error: <Dangerous sx={{ color: statusColor.error }} />,
};

const Radio = (props: RadioProps) => {
  const { statusText, status } = props;
  return (
    <FormControlContainer {...props}>
      <FormControlLabel
        disabled={props.disabled}
        control={
          <RadioBase
            checked={props.checked}
            onChange={props.onChange}
            size={props.size}
            disabled={props.disabled}
          />
        }
        label={props.description}
        sx={{
          "display": "block",
          "marginX": 0,
          "borderRadius": "6px",
          "backgroundColor": props.checked ? "#EFEEFF" : "initial",
          "& .MuiFormControlLabel-label": {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            paddingRight: 1,
          },
          "&.Mui-disabled": {
            backgroundColor: props.checked ? (theme: any) => theme.palette.grey["20"] : "initial",
          },
        }}
      />
      <Stack
        direction={"row"}
        sx={{
          "backgroundColor": status && statusText ? (theme: any) => theme.palette[status]["20"] : "transparent",
          "borderRadius": "6px",
          "alignItems": "center",
          "paddingLeft": props.status ? 1.5 : 3.5,
          "marginTop": 0.5,
          "& .MuiSvgIcon-root": {
            fontSize: "16px",
          },
        }}>
        {props.status && statusIcon[props.status]}
        {props.statusText && <FormStatusText>{props.statusText}</FormStatusText>}
      </Stack>
    </FormControlContainer>
  );
};

export default Radio;