import MuiButtonGroup, { ButtonGroupProps as MuiButtonGroupProps } from "@mui/material/ButtonGroup";
import React from "react";

export type ButtonGroupProps = {
  children: React.ReactElement[];
  color: "primary" | "grey" | "success" | "error";
} & Pick<MuiButtonGroupProps, "disabled" | "fullWidth" | "size">;

const ButtonGroup = ({ color, ...props }: ButtonGroupProps) => {
  const isSmallSize = props.size === "small";
  const buttons =
    props.children &&
    Array.isArray(props.children) &&
    props.children.map((button, index) => React.cloneElement(button, { key: index, color, size: props.size }));
  return (
    <MuiButtonGroup
      {...props}
      variant="contained"
      disableElevation
      disableRipple
      sx={{
        "& .MuiButtonGroup-grouped": {
          borderRadius: "2px",
          padding: isSmallSize ? "4px 8px" : "8px 12px",
        },
        "& .MuiButtonGroup-grouped:not(:last-of-type)": {
          borderColor: "transparent",
          borderRight: "1px solid white",
        },
        "& .Mui-disabled.MuiButtonGroup-grouped:not(:last-of-type)": {
          borderColor: "transparent",
          borderRight: "1px solid white",
        },
      }}>
      {buttons}
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
