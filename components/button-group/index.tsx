import MuiButtonGroup, { ButtonGroupProps as MuiButtonGroupProps } from "@mui/material/ButtonGroup";
import React from "react";
import { Tooltip } from "..";

export type ButtonGroupProps = {
  children: React.ReactElement[];
  color?: "primary" | "grey" | "success" | "error";
  tooltip?: string;
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
    <Tooltip title={props.tooltip}>
      <MuiButtonGroup
        {...props}
        variant="contained"
        disableElevation
        disableRipple
        sx={{
          "&.MuiButtonGroup-fullWidth span": {
            width: "100%",
          },
          "& span .MuiButtonGroup-grouped": {
            padding: isSmallSize ? "4px 8px" : "8px 12px",
          },
          "& span:not(:last-of-type) .MuiButtonGroup-grouped": {
            borderColor: "transparent",
            borderRight: "1px solid white",
            borderRadius: "2px",
          },
          "& span:not(:last-of-type) .Mui-disabled.MuiButtonGroup-grouped": {
            borderColor: "transparent",
            borderRight: "1px solid white",
            borderRadius: "2px",
          },
          "& span:first-of-type .MuiButtonGroup-grouped": {
            borderRadius: "20px 2px 2px 20px",
          },
          "& span:first-of-type .Mui-disabled.MuiButtonGroup-grouped": {
            borderRadius: "20px 2px 2px 20px",
          },
          "& span:last-of-type .MuiButtonGroup-grouped": {
            borderRadius: "2px 20px 20px 2px",
          },
        }}>
        {buttons}
      </MuiButtonGroup>
    </Tooltip>
  );
};

export default ButtonGroup;
