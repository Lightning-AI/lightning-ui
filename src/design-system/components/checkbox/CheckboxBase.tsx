import { Checkbox as MuiCheckbox } from "@mui/material";
import React from "react";

export type CheckboxOnlyProps = {
  name?: string;
  checked: boolean;
  onChange: (e: boolean) => void;
} & Pick<React.ComponentProps<typeof MuiCheckbox>, "size" | "disabled">;

const CheckboxBase = (props: CheckboxOnlyProps) => {
  return (
    <MuiCheckbox
      checked={props.checked}
      inputProps={{ "aria-label": `Checkbox for ${props.name}` }}
      onChange={e => props.onChange(e.target.checked)}
      size={props.size}
      disabled={props.disabled}
      sx={{
        "padding": 1,
        "& .MuiSvgIcon-root": {
          border: "1px solid #C5CBD7",
          background: "#FFFFFF",
          borderRadius: "6px",
          backgroundSize: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: props.checked
            ? `url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 6.18L5.716 10.5L14.5 1.5' stroke='%23792EE5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
            : "none",
        },
        "& .MuiSvgIcon-root path": {
          color: "#0000",
        },
      }}
    />
  );
};

export default CheckboxBase;
