import MuiTextField, { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import { MenuItem, SelectChangeEvent } from "..";
import { Dangerous, Warning, CheckCircle } from "design-system/icons";
import { ChangeEventHandler, ReactNode, useState } from "react";
import FormControl from "../form-control";

const statusColor: Record<string, any> = {
  success: "#31A24C",
  warning: "#F1A817",
  error: "#E02C2D",
};

const statusIcon: Record<string, ReactNode> = {
  success: <CheckCircle sx={{ color: statusColor.success }} />,
  warning: <Warning sx={{ color: statusColor.warning }} />,
  error: <Dangerous sx={{ color: statusColor.error }} />,
};

export type SelectProps = {
  label?: string;
  helperText?: string;
  status?: "success" | "warning" | "error";
  statusText?: string;
  icon?: ReactNode;
  options: { key: string; value: string }[];
  onChange: (value: string | string[] | null) => void;
  multiple?: boolean;
} & Pick<MuiTextFieldProps, "disabled" | "fullWidth" | "size" | "value">;

const Select = ({
  label,
  helperText,
  statusText,
  status,
  icon,
  fullWidth,
  multiple,
  onChange,
  ...props
}: SelectProps) => {
  const value = props.value ?? multiple ? [] : "";
  const [selectedValue, setSelectedValue] = useState(value);

  const hasStatus = typeof status !== "undefined";
  const onChangeHandler = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (typeof onChange === "undefined") return;
    onChange(value);
  };

  return (
    <FormControl label={label} helperText={helperText} status={status} statusText={statusText} fullWidth={fullWidth}>
      <MuiTextField
        value={selectedValue}
        fullWidth={fullWidth}
        onChange={onChangeHandler}
        {...props}
        error={hasStatus}
        InputProps={{
          startAdornment: icon,
          endAdornment: status && statusIcon[status],
        }}
        select
        SelectProps={{
          multiple: multiple,
          MenuProps: {
            disablePortal: true,
            PaperProps: { sx: { marginTop: "-8px" } },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            minWidth: "150px",
            height: "36px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "20px",
            backgroundColor: "white",
            borderRadius: "6px",
            padding: 0,
          },
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
            paddingLeft: icon ? "36px" : "12px",
            paddingRight: hasStatus ? "52px" : "32px",
          },
          "& .MuiSvgIcon-root:not(.MuiSelect-icon)": {
            fontSize: "16px",
            position: "absolute",
          },
          "& .MuiInputBase-adornedEnd svg:not(.MuiSelect-icon)": {
            paddingRight: "8px",
            right: "22px",
            paddingLeft: "8px",
          },
          "& .MuiInputBase-adornedStart .MuiSvgIcon-root:first-of-type": {
            color: "#050505",
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
        {props.options.map(option => (
          <MenuItem key={option.key} value={option.key}>
            {option.value}
          </MenuItem>
        ))}
      </MuiTextField>
    </FormControl>
  );
};

export default Select;
