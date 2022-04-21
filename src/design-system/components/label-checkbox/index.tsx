import { Icon, Box, FormControlLabel, Stack } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import React from "react";
import { Checkbox, CheckboxProps } from "../checkbox";
import FormStatusText from "../form-status-text";

export type LabelCheckboxProps = {
  helpText?: string;
  error?: string;
} & CheckboxProps &
  Pick<React.ComponentProps<typeof FormControlLabel>, "label">;

export const LabelCheckbox = (props: LabelCheckboxProps) => {
  return (
    <Box>
      {props.error && (
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
            <ReportIcon />
          </Icon>
          <FormStatusText>{props.error}</FormStatusText>
        </Stack>
      )}

      <Box sx={{ backgroundColor: props.checked ? "#EFEEFF" : "initial", padding: "2px 12px", borderRadius: "6px" }}>
        <FormControlLabel
          control={<Checkbox checked={props.checked} onChange={props.onChange} />}
          label={props.label}
        />
      </Box>
    </Box>
  );
};
