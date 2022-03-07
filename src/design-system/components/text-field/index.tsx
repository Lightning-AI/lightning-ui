import MuiOutlinedInput, { OutlinedInputProps as MuiOutlinedInputProps } from "@mui/material/OutlinedInput";
import FormControl from "../form-control";

export type TextFieldProps = {
  label?: string;
  helperText?: string;
  status?: "success" | "warning" | "error";
  statusText?: string;
} & Pick<MuiOutlinedInputProps, "disabled" | "onChange" | "placeholder" | "fullWidth">;

const TextField = ({ label, helperText, statusText, status, fullWidth, ...props }: TextFieldProps) => {
  const hasStatus = typeof status !== "undefined";
  return (
    <FormControl label={label} helperText={helperText} status={status} statusText={statusText} fullWidth={fullWidth}>
      <MuiOutlinedInput
        fullWidth={fullWidth}
        {...props}
        error={hasStatus}
        sx={{
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
        }}
      />
    </FormControl>
  );
};

export default TextField;
