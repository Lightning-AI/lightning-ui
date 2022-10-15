import { ChangeEvent } from "react";

import MuiSwitch, { SwitchProps as MuiSwitchProps } from "@mui/material/Switch";

import { InfoIconWithHelpTooltip, Stack, Typography } from "..";

export type SwitchProps = Pick<MuiSwitchProps, "checked" | "disabled"> & {
  label: string;
  tooltip?: string;
  onChange: (value: boolean) => void;
};

function Switch({ label, tooltip, checked, onChange, disabled }: SwitchProps) {
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
      <MuiSwitch
        checked={checked}
        onChange={onChangeHandler}
        disabled={disabled}
        sx={{
          "width": 36,
          "height": 20,
          "padding": 0,
          "& .MuiSwitch-switchBase": {
            "padding": 0,
            "transform": "scale(0.8)",
            "&.Mui-checked": {
              "transform": "translateX(16px)",
              "& + .MuiSwitch-track": {
                backgroundColor: theme => theme.palette.primary[20],
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
              "& .MuiSwitch-thumb": {
                background: theme => theme.palette.primary.gradient,
              },
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
              background: "#BCC0C4",
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              opacity: 1,
            },
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "#65676B",
            boxShadow: "none",
            width: 20,
            height: 20,
          },
          "& .MuiSwitch-track": {
            borderRadius: "12px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            opacity: 1,
          },
        }}
      />
    </Stack>
  );
}

export default Switch;
