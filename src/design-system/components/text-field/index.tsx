import MuiOutlinedInput, { OutlinedInputProps as MuiOutlinedInputProps } from "@mui/material/OutlinedInput";
import { Dangerous, Warning, CheckCircle } from "../../icons";
import React, { ChangeEventHandler, ReactNode } from "react";
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

export type TextFieldProps = {
  label?: string;
  helperText?: string;
  status?: "success" | "warning" | "error";
  statusText?: string;
  icon?: ReactNode;
  type?: "text" | "number" | "password";
  onChange: (value: string | null) => void;
  value?: unknown;
  optional?: boolean;
} & Pick<
  MuiOutlinedInputProps,
  "disabled" | "placeholder" | "fullWidth" | "size" | "autoComplete" | "autoCapitalize" | "autoCorrect" | "autoFocus"
>;

const TextField = React.forwardRef(
  (
    {
      label,
      helperText,
      statusText,
      status,
      icon,
      fullWidth,
      optional,
      onChange,
      type = "text",
      ...props
    }: TextFieldProps,
    ref: any,
  ) => {
    const hasStatus = typeof status !== "undefined";
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
      if (typeof onChange === "undefined") return;
      const value = event.target.textContent;
      onChange(value);
    };
    return (
      <FormControl
        label={label}
        helperText={helperText}
        status={status}
        statusText={statusText}
        fullWidth={fullWidth}
        optional={optional}>
        <MuiOutlinedInput
          inputRef={ref}
          fullWidth={fullWidth}
          onChange={onChangeHandler}
          type={type}
          {...props}
          error={hasStatus}
          startAdornment={icon}
          endAdornment={status && statusIcon[status]}
          sx={{
            "fontFamily": "Roboto",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "14px",
            "lineHeight": "20px",
            "height": "36px",
            "backgroundColor": "white",
            "borderRadius": "6px",
            "&.MuiInputBase-colorPrimary:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme: any) => theme.palette[status ?? "primary"].main,
            },
            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              padding: 0,
              borderColor: (theme: any) => (status ? theme.palette[status].main : undefined),
            },
            "&.Mui-disabled": {
              backgroundColor: (theme: any) => theme.palette.grey["10"],
            },
            "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0,0,0,0.26)",
            },
            "&.Mui-error.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0,0,0,0.26)",
            },
            "&.Mui-disabled .MuiOutlinedInput-input": {
              color: (theme: any) => theme.palette.grey["20"],
            },
            "&.MuiInputBase-sizeSmall": {
              height: "28px",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "16px",
            },
            "&.MuiInputBase-adornedStart .MuiSvgIcon-root:first-of-type": {
              color: "#050505",
              paddingRight: "8px",
            },
            "&.Mui-disabled.MuiInputBase-adornedStart .MuiSvgIcon-root:first-of-type": {
              color: (theme: any) => theme.palette.grey["50"],
            },
            "&.Mui-disabled.MuiInputBase-adornedEnd svg": {
              color: (theme: any) => theme.palette.grey["50"],
            },
          }}
        />
      </FormControl>
    );
  },
);

export default TextField;
