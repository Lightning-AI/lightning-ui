import { FormControlLabel, Stack } from "../";
import React from "react";
import CheckboxBase, { CheckboxOnlyProps } from "./CheckboxBase";
import FormControlContainer, { FormControlContainerProps } from "../form-control/FormControlContainer";
import FormStatusText from "../form-status-text";
import { CheckCircle, Dangerous, Warning } from "@mui/icons-material";

export type CheckboxProps = {
  optional?: boolean;
  description: React.ReactElement;
  status?: "success" | "warning" | "error";
  statusText?: string;
} & CheckboxOnlyProps &
  FormControlContainerProps;

const statusColor = {
  success: "#31A24C",
  warning: "#F1A817",
  error: "#E02C2D",
};

const statusIcon = {
  success: <CheckCircle sx={{ color: statusColor.success }} />,
  warning: <Warning sx={{ color: statusColor.warning }} />,
  error: <Dangerous sx={{ color: statusColor.error }} />,
};

const Checkbox = (props: CheckboxProps) => {
  const { statusText, status } = props;
  return (
    <FormControlContainer {...props}>
      <FormControlLabel
        disabled={props.disabled}
        control={
          <CheckboxBase
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

export default Checkbox;
