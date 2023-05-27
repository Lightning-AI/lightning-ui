import React, { ReactNode, useState } from "react";

import { Typography } from "@mui/material";
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

import { Box, MenuItem, Stack } from "../";
import { CheckCircle, Dangerous, Info, Warning } from "../../icons";
import CheckboxBase from "../checkbox/CheckboxBase";
import FormControl from "../form-control";
import RadioBase from "../radio/RadioBase";

const statusColor: Record<string, any> = {
  info: "#1877F2",
  success: "#31A24C",
  warning: "#F1A817",
  error: "#E02C2D",
};

const statusIcon: Record<string, ReactNode> = {
  info: <Info sx={{ color: statusColor.info }} />,
  success: <CheckCircle sx={{ color: statusColor.success }} />,
  warning: <Warning sx={{ color: statusColor.warning }} />,
  error: <Dangerous sx={{ color: statusColor.error }} />,
};

type LabelType = {
  text: string;
  helpText: string;
  icon: ReactNode;
};

export type SelectProps = {
  label?: string;
  helperText?: string;
  status?: "success" | "warning" | "error" | "info";
  statusText?: ReactNode;
  icon?: ReactNode;
  options: { label: string | LabelType; value: string }[];
  onChange: (value: string | string[] | null) => void;
  optional?: boolean;
  tooltip?: string;
  multiple?: boolean;
  defaultValue?: string;
} & Pick<MuiTextFieldProps, "disabled" | "fullWidth" | "size" | "value" | "autoFocus">;

const Select = React.forwardRef(
  (
    {
      label,
      helperText,
      statusText,
      status,
      icon,
      fullWidth,
      optional,
      tooltip,
      multiple,
      onChange,
      size,
      defaultValue,
      ...props
    }: SelectProps,
    ref,
  ) => {
    const areLabelType = props.options.some(option => typeof option.label !== "string");
    const value = typeof props.value !== "undefined" ? props.value : multiple ? [] : "";
    const [selectedValue, setSelectedValue] = useState(value);

    const hasStatus = typeof status !== "undefined";
    const isSmall = size === "small";
    const theme: any = useTheme();
    const isDark = theme.palette.mode === "dark";
    const onChangeHandler = (event: any) => {
      const value = event.target.value;
      setSelectedValue(value);
      if (typeof onChange === "undefined") return;
      onChange(value);
    };

    return (
      <FormControl
        label={label}
        helperText={helperText}
        status={status}
        statusText={statusText}
        fullWidth={fullWidth}
        optional={optional}
        tooltip={tooltip}>
        <MuiTextField
          inputRef={ref}
          value={selectedValue}
          defaultValue={defaultValue}
          fullWidth={fullWidth}
          onChange={onChangeHandler}
          size={areLabelType ? "medium" : size}
          {...props}
          error={hasStatus}
          InputProps={{
            startAdornment: areLabelType ? undefined : icon,
            endAdornment: status && statusIcon[status],
          }}
          select
          SelectProps={{
            multiple: !areLabelType && multiple,
            MenuProps: {
              disablePortal: true,
              PaperProps: {
                sx: {
                  marginTop:
                    !selectedValue && areLabelType ? "2px" : areLabelType ? "-6px" : isSmall ? "-4px" : "-8px",
                },
              },
            },
            renderValue: areLabelType
              ? selected => {
                  const selectedLabel = props.options.find(option => option.value === selected)?.label ?? "";
                  if (typeof selectedLabel === "string") return selectedLabel;
                  return (
                    <Stack direction={"row"}>
                      <Box
                        sx={{
                          "& svg.MuiSvgIcon-root:not(.MuiSelect-icon)": {
                            fontSize: "20px",
                            paddingTop: 0.5,
                            color: (theme: any) => theme.palette.grey[70],
                          },
                        }}>
                        {selectedLabel.icon}
                      </Box>
                      <Box paddingLeft={3}>
                        <Typography
                          fontWeight={400}
                          fontSize={"14px"}
                          lineHeight={"20px"}
                          color={(theme: any) => theme.palette.text.primary}>
                          {selectedLabel.text}
                        </Typography>
                        <Typography
                          fontWeight={400}
                          fontSize={"12px"}
                          lineHeight={"16px"}
                          color={(theme: any) => theme.palette.text.secondary}>
                          {selectedLabel.helpText}
                        </Typography>
                      </Box>
                    </Stack>
                  );
                }
              : multiple
              ? selected => {
                  const itemsSelected = selected as string[];
                  return itemsSelected.length > 1
                    ? `${itemsSelected.length} items selected`
                    : props.options.find(option => option.value === itemsSelected?.[0])?.label ?? "";
                }
              : selected => props.options.find(option => option.value === selected)?.label ?? "",
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              minWidth: "150px",
              height: areLabelType ? "56px" : "36px",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              backgroundColor: isDark ? theme.palette.grey["10"] : theme.palette.background.default,
              borderRadius: "8px",
              padding: 0,
            },
            ...(isDark && {
              "fieldset.MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.grey["50"],
              },
            }),
            "& .MuiInputBase-colorPrimary:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme: any) => theme.palette[status ?? "primary"].main,
            },
            "& .Mui-error fieldset.MuiOutlinedInput-notchedOutline": {
              padding: 0,
              borderColor: (theme: any) => (status ? theme.palette[status].main : undefined),
            },
            "&.Mui-disabled": {
              backgroundColor: (theme: any) => theme.palette.grey["10"],
            },
            "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0,0,0,0.26)",
            },
            "& .Mui-error.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0,0,0,0.26)",
            },
            "&.Mui-disabled .MuiOutlinedInput-input": {
              color: (theme: any) => theme.palette.grey["20"],
            },
            "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
              height: "28px",
            },
            "& .MuiSelect-select.MuiSelect-outlined.MuiOutlinedInput-input": {
              paddingLeft: !areLabelType && icon ? "36px" : "12px",
              paddingRight: hasStatus ? "52px" : "32px",
            },
            "& .MuiSvgIcon-root:not(.MuiSelect-icon)": {
              fontSize: "16px",
              position: "absolute",
            },
            "& .MuiInputBase-adornedEnd > svg:not(.MuiSelect-icon)": {
              paddingRight: "8px",
              right: "22px",
              paddingLeft: "8px",
            },
            "& .MuiInputBase-adornedStart > .MuiSvgIcon-root:first-of-type": {
              color: (theme: any) => theme.palette.grey[100],
              paddingRight: "8px",
              paddingLeft: "12px",
              left: "0px",
            },
            "& .Mui-disabled.MuiInputBase-adornedStart .MuiSvgIcon-root:first-of-type": {
              color: (theme: any) => theme.palette.grey["50"],
            },
            "& .Mui-disabled.MuiInputBase-adornedEnd svg": {
              color: (theme: any) => theme.palette.grey["50"],
            },
          }}>
          {props.options.map(option =>
            areLabelType ? (
              <MenuItem key={option.value} value={option.value} sx={{ padding: 1 }}>
                <Stack direction={"row"}>
                  <Box marginTop={-0.5} marginLeft={-1} paddingRight={1}>
                    <RadioBase checked={option.value === selectedValue} />
                  </Box>
                  <Box paddingX={1.5} paddingRight={6}>
                    <Typography
                      fontWeight={400}
                      fontSize={"14px"}
                      lineHeight={"20px"}
                      color={(theme: any) => theme.palette.text.primary}>
                      {(option.label as LabelType).text}
                    </Typography>
                    <Typography
                      fontWeight={400}
                      fontSize={"12px"}
                      lineHeight={"16px"}
                      color={(theme: any) => theme.palette.text.secondary}>
                      {(option.label as LabelType).helpText}
                    </Typography>
                  </Box>
                </Stack>
                <Box
                  position={"absolute"}
                  top={"16px"}
                  right={"24px"}
                  paddingRight={1}
                  sx={{
                    "& svg.MuiSvgIcon-root:not(.MuiSelect-icon)": {
                      fontSize: "20px",
                      color: (theme: any) => theme.palette.grey[70],
                    },
                  }}>
                  {(option.label as LabelType).icon}
                </Box>
              </MenuItem>
            ) : (
              <MenuItem key={option.value} value={option.value} sx={{ padding: 1 }}>
                <Stack direction={"row"}>
                  {multiple ? (
                    <Box marginTop={-0.5} paddingRight={1}>
                      <CheckboxBase checked={(selectedValue as Array<string>).includes(option.value)} />
                    </Box>
                  ) : (
                    <Box marginTop={-1.15} marginLeft={-1} paddingRight={2}>
                      <RadioBase checked={option.value === selectedValue} />
                    </Box>
                  )}
                  <Typography
                    className="option-label"
                    fontWeight={400}
                    fontSize={"14px"}
                    lineHeight={"20px"}
                    color={(theme: any) => theme.palette.text.primary}>
                    {option.label}
                  </Typography>
                </Stack>
              </MenuItem>
            ),
          )}
        </MuiTextField>
      </FormControl>
    );
  },
);

export default Select;
