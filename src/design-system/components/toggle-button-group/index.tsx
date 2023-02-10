import { ReactNode } from "react";

import { Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";

import { Stack, Tooltip } from "..";

export type ToggleButtonItemProps = {
  value: string;
  icon?: ReactNode;
  text?: string;
};

export type ToggleButtonGroupProps = {
  items: ToggleButtonItemProps[];
  tooltip?: string;
  onChange: (value: string) => void;
} & Pick<MuiToggleButtonGroupProps, "value" | "size" | "fullWidth" | "disabled">;

const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  const isSmallSize = props.size === "small";
  const onChangeHandler = (event: any, value: string) => props?.onChange(value);
  return (
    <Tooltip title={props.tooltip}>
      <MuiToggleButtonGroup
        exclusive
        value={props.value}
        {...props}
        onChange={onChangeHandler}
        sx={{
          "height": isSmallSize ? "28px" : "36px",
          "& .MuiSvgIcon-root": {
            width: "16px",
            height: "16px",
          },
          "&.MuiToggleButtonGroup-fullWidth": {
            width: "100%",
          },
          "& .MuiToggleButtonGroup-grouped.Mui-selected": {
            backgroundColor: (theme: any) => theme.palette.primary[10],
            color: (theme: any) => theme.palette.primary[70],
          },
          "& .MuiToggleButtonGroup-grouped": {
            borderColor: "transparent",
            padding: isSmallSize ? "4px 8px" : "8px 12px",
            backgroundColor: (theme: any) => theme.palette.grey[20],
            textTransform: "none",
          },
          "& .Mui-disabled.MuiToggleButtonGroup-grouped": {
            borderColor: "transparent",
            color: "rgba(0,0,0,0.26)",
            textTransform: "none",
          },
          "& .MuiToggleButtonGroup-grouped:hover": {
            backgroundColor: (theme: any) => theme.palette.primary[10],
            color: (theme: any) => theme.palette.primary[70],
          },
          "& .MuiToggleButtonGroup-grouped.Mui-selected:hover": {
            backgroundColor: (theme: any) => theme.palette.primary[10],
            color: (theme: any) => theme.palette.primary[70],
          },
          "& .MuiToggleButtonGroup-grouped:not(:last-of-type) ": {
            borderRight: "2px solid white",
            borderRadius: "2px",
          },
          "& .Mui-disabled.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
            borderRight: "2px solid white",
            borderRadius: "2px",
          },
          "& .MuiToggleButtonGroup-grouped:first-of-type": {
            borderRadius: "20px 2px 2px 20px",
          },
          "& .Mui-disabled.MuiToggleButtonGroup-grouped:first-of-type": {
            borderRadius: "20px 2px 2px 20px",
          },
          "& .MuiToggleButtonGroup-grouped:last-of-type": {
            borderRadius: "2px 20px 20px 2px",
          },
        }}>
        {props.items.map(item => {
          return (
            <ToggleButton key={item.value} value={item.value}>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                {item.icon}{" "}
                <Typography
                  fontFamily={`"Plus Jakarta Sans", sans-serif`}
                  fontWeight={600}
                  fontSize={"14px"}
                  lineHeight={"20px"}>
                  {item.text}
                </Typography>
              </Stack>
            </ToggleButton>
          );
        })}
      </MuiToggleButtonGroup>
    </Tooltip>
  );
};

export default ToggleButtonGroup;
