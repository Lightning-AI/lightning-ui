import React, { ChangeEvent } from "react";

import MuiSwitch, { SwitchProps as MuiSwitchProps } from "@mui/material/Switch";
import { useTheme } from "@mui/material/styles";

import { InfoIconWithHelpTooltip, Stack, Typography } from "..";

type ColorProp = string | ((theme: any) => string);

export type SwitchProps = Pick<MuiSwitchProps, "onChange" | "checked" | "disabled" | "icon" | "checkedIcon"> & {
  label?: string;
  tooltip?: string;
  thumbColor?: ColorProp;
  trackColor?: ColorProp;
  trackColorChecked?: ColorProp;
  dataCy?: string;
  dataTestId?: string;
};

function Switch({
  onChange,
  checked,
  disabled,
  icon,
  checkedIcon,
  label,
  tooltip,
  thumbColor,
  trackColor,
  trackColorChecked,
  dataCy,
  dataTestId,
}: SwitchProps) {
  const theme: any = useTheme();
  const isDark = theme.palette.mode === "dark";

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event, event.target.checked);
  };

  if (trackColor && !trackColorChecked) {
    trackColorChecked = trackColor;
  }

  return (
    <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
      <Typography
        sx={{
          color: (theme: any) => theme.palette.grey[disabled ? 40 : 100],
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
        data-cy={dataCy}
        data-testid={dataTestId}
        sx={{
          "width": 36,
          "height": 20,
          "padding": 0,
          ".MuiSwitch-root": {
            padding: "0",
            height: "fit-content",
            width: "fit-content",
          },
          ".MuiSwitch-thumb": {
            height: "16px",
            width: "16px",
            boxShadow: "none",
            color: thumbColor ?? "rgba(255, 255, 255, 1)",
          },
          ".MuiSwitch-track": {
            height: "20px",
            borderRadius: "20px",
            width: "36px",
            opacity: 1,
            backgroundColor:
              trackColor ?? ((theme: any) => (isDark ? "rgba(255, 255, 255, 0.4)" : theme.palette.secondary[40])),
          },
          ".MuiSwitch-switchBase": {
            "padding": "2px",

            "&.Mui-checked": {
              transform: "translateX(16px)",
            },
            "&.Mui-checked + .MuiSwitch-track": {
              backgroundColor: trackColorChecked ?? ((theme: any) => theme.palette.primary.gradient),
              opacity: 1,
            },
            "&.Mui-disabled.Mui-checked + .MuiSwitch-track": {
              backgroundColor: (theme: any) => (isDark ? "rgba(255, 255, 255, 0.3)" : theme.palette.secondary[30]),
              opacity: 1,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              backgroundColor: (theme: any) => (isDark ? "rgba(255, 255, 255, 0.3)" : theme.palette.secondary[30]),
              opacity: 1,
            },
            "&.Mui-disabled > .MuiSwitch-thumb": {
              opacity: 0.4,
            },
          },
        }}
        {...(icon && { icon })}
        {...(checkedIcon && { checkedIcon })}
      />
    </Stack>
  );
}

export default Switch;
