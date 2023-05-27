import React from "react";

import { Checkbox as MuiCheckbox } from "@mui/material";

export type CheckboxOnlyProps = {
  name?: string;
  checked: boolean;
  onChange?: (e: boolean) => void;
} & Pick<React.ComponentProps<typeof MuiCheckbox>, "size" | "disabled">;

const CheckboxBase = (props: CheckboxOnlyProps) => {
  return (
    <MuiCheckbox
      checked={props.checked}
      inputProps={{ "aria-label": `Checkbox for ${props.name}` }}
      onChange={e => props.onChange && props.onChange(e.target.checked)}
      size={props.size}
      disabled={props.disabled}
      sx={{
        "padding": 1,
        "& .MuiSvgIcon-root": {
          border: "1.5px solid",
          background: "#FFFFFF",
          borderRadius: "8px",
          backgroundSize: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: (theme: any) => theme.palette.grey.main,
        },
        "&.Mui-checked .MuiSvgIcon-root": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 6.18L5.716 10.5L14.5 1.5' stroke='%23792EE5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        },
        "&.Mui-checked .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5.13507L4.243 8.37807L11 1.62207' stroke='%23792EE5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        },
        "&:hover .MuiSvgIcon-root": {
          border: "1.5px solid #792EE5",
        },
        "&.Mui-disabled .MuiSvgIcon-root": {
          background: "transparent",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: "#BCC0C4",
        },
        "&.Mui-checked.Mui-disabled .MuiSvgIcon-root": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 6.18L5.716 10.5L14.5 1.5' stroke='%23BCC0C4' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        },
        "&.Mui-checked.Mui-disabled .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5.13507L4.243 8.37807L11 1.62207' stroke='%23BCC0C4' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        },
        "& .MuiSvgIcon-root path": {
          display: "none",
        },
      }}
    />
  );
};

export default CheckboxBase;
