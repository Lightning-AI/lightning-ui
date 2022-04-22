import ReportIcon from "@mui/icons-material/Report";
import { Box, FormControlLabel, Icon, Stack } from "@mui/material";
import React from "react";
import CheckboxBase, { CheckboxOnlyProps } from "./CheckboxBase";
import FormControl, { FormControlProps } from "../form-control/FormControlContainer";
import FormStatusText from "../form-status-text";

export type CheckboxProps = {
  disabled?: boolean;
} & CheckboxOnlyProps &
  Pick<React.ComponentProps<typeof FormControlLabel>, "label"> &
  FormControlProps;

const Checkbox = (props: CheckboxProps) => {
  return (
    <FormControl {...props}>
      {props.statusText && props.status === "error" && (
        <Stack
          direction={"row"}
          sx={{
            backgroundColor: "#FFD4D5",
            width: "auto",
            borderRadius: "6px",
            alignItems: "center",
            paddingLeft: "8px",
            marginBottom: "4px",
          }}>
          <Icon>
            <ReportIcon sx={{ color: "#E02C2D" }} />
          </Icon>
          <FormStatusText>{props.statusText}</FormStatusText>
        </Stack>
      )}

      <Box sx={{ backgroundColor: props.checked ? "#EFEEFF" : "initial", padding: "2px 12px", borderRadius: "6px" }}>
        <FormControlLabel
          disabled={props.disabled}
          control={<CheckboxBase checked={props.checked} onChange={props.onChange} />}
          label={props.label}
        />
      </Box>

      {props.statusText && props.status && props.status !== "error" && (
        <Box
          sx={{
            backgroundColor: props.statusText ? (theme: any) => theme.palette[props.status!]["20"] : "transparent",
            marginTop: "4px",
          }}>
          <FormStatusText>{props.statusText}</FormStatusText>
        </Box>
      )}
    </FormControl>
  );
};

export default Checkbox;
