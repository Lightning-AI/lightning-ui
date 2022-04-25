import { Box, FormControlLabel, Icon, Stack } from "@mui/material";
import React from "react";
import CheckboxBase, { CheckboxOnlyProps } from "./CheckboxBase";
import FormControl, { FormControlProps } from "../form-control/FormControlContainer";
import FormStatusText from "../form-status-text";
import { CheckCircle, Dangerous, Warning } from "@mui/icons-material";

export type CheckboxProps = {
  optional?: boolean;
  description: React.ReactElement;
} & CheckboxOnlyProps &
  Pick<React.ComponentProps<typeof FormControlLabel>, "label"> &
  FormControlProps;

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
  const hasErrorStatus = props.statusText && props.status === "error";
  const hasStatusWithoutError = props.statusText && props.status !== "error";
  return (
    <FormControl {...props}>
      <Box sx={{ backgroundColor: props.checked ? "#EFEEFF" : "initial", padding: "2px 12px", borderRadius: "6px" }}>
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
        />
      </Box>

      {hasErrorStatus && (
        <Stack
          direction={"row"}
          sx={{
            backgroundColor: "#FFD4D5",
            width: "auto",
            borderRadius: "6px",
            alignItems: "center",
            paddingLeft: "8px",
            marginTop: "4px",
          }}>
          {props.status && <Icon>{statusIcon[props.status]}</Icon>}
          <FormStatusText>{props.statusText}</FormStatusText>
        </Stack>
      )}

      {props.status && hasStatusWithoutError && (
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            backgroundColor: props.statusText ? (theme: any) => theme.palette[props.status!]["20"] : "transparent",
            marginTop: "4px",
            paddingLeft: "8px",
            borderRadius: "6px",
          }}>
          {props.status && <Icon>{statusIcon[props.status]}</Icon>}
          <FormStatusText>{props.statusText}</FormStatusText>
        </Stack>
      )}
    </FormControl>
  );
};

export default Checkbox;
