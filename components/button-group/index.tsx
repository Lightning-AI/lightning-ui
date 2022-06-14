import MuiButtonGroup, { ButtonGroupProps as MuiButtonGroupProps } from "@mui/material/ButtonGroup";
import React from "react";

export type ButtonGroupProps = {
  children: React.ReactElement[];
  color?: "primary" | "grey" | "success" | "error";
} & Pick<MuiButtonGroupProps, "disabled" | "fullWidth" | "size">;

const ButtonGroup = ({ color, ...props }: ButtonGroupProps) => {
  const isSmallSize = props.size === "small";
  const buttons =
    props.children &&
    Array.isArray(props.children) &&
    props.children.map((button, index) =>
      React.cloneElement(button, { key: index, size: props.size, ...(color && { color }) }),
    );
  return (
    <MuiButtonGroup
      {...props}
      variant="contained"
      disableElevation
      disableRipple
      sx={{
        "& .MuiButtonGroup-grouped": {
          padding: isSmallSize ? "4px 8px" : "8px 12px",
        },
        "& .MuiButtonGroup-grouped:not(:last-of-type)": {
          borderColor: "transparent",
          borderRight: "1px solid white",
          borderRadius: "2px",
        },
        "& .Mui-disabled.MuiButtonGroup-grouped:not(:last-of-type)": {
          borderColor: "transparent",
          borderRight: "1px solid white",
          borderRadius: "2px",
        },
        "& .MuiButtonGroup-grouped:first-of-type": {
          borderRadius: "20px 2px 2px 20px",
        },
        "& .Mui-disabled.MuiButtonGroup-grouped:first-of-type": {
          borderRadius: "20px 2px 2px 20px",
        },
        "& .MuiButtonGroup-grouped:last-of-type": {
          borderRadius: "2px 20px 20px 2px",
        },
      }}>
      {buttons}
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
