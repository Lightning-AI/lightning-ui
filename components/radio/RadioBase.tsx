import React from "react";

import { Radio as MuiRadio } from "@mui/material";

export type RadioOnlyProps = {
  name?: string;
  checked: boolean;
  onChange?: (e: boolean) => void;
} & Pick<React.ComponentProps<typeof MuiRadio>, "size" | "disabled">;

const RadioBase = (props: RadioOnlyProps) => {
  return (
    <MuiRadio
      checked={props.checked}
      inputProps={{ "aria-label": `Radio for ${props.name}` }}
      onChange={e => props.onChange && props.onChange(e.target.checked)}
      size={props.size}
      disabled={props.disabled}
      sx={{
        "padding": 1,
        "& .MuiSvgIcon-root": {
          border: "1.5px solid",
          background: "#FFFFFF",
          borderRadius: "25px",
          backgroundSize: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: (theme: any) => theme.palette.grey.main,
        },
        "& .MuiSvgIcon-root:first-child path": {
          display: "none",
        },
        "&.Mui-checked .MuiSvgIcon-root:last-child path": {
          color: "#792EE5",
        },
        "&:hover": {
          backgroundColor: "transparent",
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
        "&.Mui-checked.Mui-disabled .MuiSvgIcon-root:last-child path": {
          color: "rgba(0,0,0,0.26)",
        },
      }}
    />
  );
};

export default RadioBase;
