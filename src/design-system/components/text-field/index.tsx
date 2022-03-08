import MuiOutlinedInput, { OutlinedInputProps as MuiOutlinedInputProps } from "@mui/material/OutlinedInput";
import { Dangerous, Warning, CheckCircle } from "design-system/icons";
import { ChangeEventHandler, ReactNode } from "react";
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
  onChange: (value: string | null) => void;
} & Pick<MuiOutlinedInputProps, "disabled" | "placeholder" | "fullWidth" | "size" | "value">;

const TextField = ({ label, helperText, statusText, status, icon, fullWidth, onChange, ...props }: TextFieldProps) => {
  const hasStatus = typeof status !== "undefined";
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
    if (typeof onChange === "undefined") return;
    console.log(event.target.value);
    const value = event.target.textContent;
    onChange(value);
  };
  return (
    <FormControl label={label} helperText={helperText} status={status} statusText={statusText} fullWidth={fullWidth}>
      <MuiOutlinedInput
        fullWidth={fullWidth}
        onChange={onChangeHandler}
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
          "&.MuiInputBase-adornedStart .MuiSvgIcon-root:first-child": {
            color: "#050505",
            paddingRight: "8px",
          },
          "&.Mui-disabled.MuiInputBase-adornedStart .MuiSvgIcon-root:first-child": {
            color: (theme: any) => theme.palette.grey["50"],
          },
          "&.Mui-disabled.MuiInputBase-adornedEnd svg": {
            color: (theme: any) => theme.palette.grey["50"],
          },
        }}
      />
    </FormControl>
  );
};

export default TextField;
