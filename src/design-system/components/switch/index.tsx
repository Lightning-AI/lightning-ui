import { ChangeEvent } from "react";

import MuiSwitch, { SwitchProps as MuiSwitchProps } from "@mui/material/Switch";

import { InfoIconWithHelpTooltip, Stack, Typography } from "..";

export type SwitchProps = Pick<MuiSwitchProps, "checked" | "disabled" | "size"> & {
  label: string;
  tooltip?: string;
  onChange: (value: boolean) => void;
};

function Switch({ label, tooltip, checked, onChange, disabled, size }: SwitchProps) {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
      <Typography
        sx={{
          color: (theme: any) => theme.palette.grey[disabled ? 40 : 100],
          fontFamily: "Roboto",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "20px",
        }}>
        {label}
      </Typography>
      {tooltip && <InfoIconWithHelpTooltip message={tooltip} size={"small"} />}
      <MuiSwitch checked={checked} onChange={onChangeHandler} disabled={disabled} size={size} />
    </Stack>
  );
}

export default Switch;
