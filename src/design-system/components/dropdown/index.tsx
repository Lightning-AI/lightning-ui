import { MoreHoriz, ArrowDropDown } from "design-system/icons";
import { Button as MuiButton, ButtonProps as MuiButtonProps, Theme } from "@mui/material";
import { Box, Menu, MenuItem } from "design-system/components/";
import React, { ReactNode, useState } from "react";
import Typography from "../typography";

export type DropdownProps = {
  icon?: ReactNode;
  text?: string;
  variant: "contained" | "text" | "more";
  options: { label: string; value: string }[];
  onClick: (key: string) => void;
} & Pick<MuiButtonProps, "disabled" | "size">;

const Dropdown = (props: DropdownProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isSmallSize = props.size === "small";
  const height = (isSmallSize && "28px") || "36px";
  const variant = props.variant === "text" ? props.variant : "contained";
  const color = (theme: Theme) => theme.palette.common.black;
  const backgroundColor = (theme: any) => {
    if (variant === "text") return "transparent";
    return theme.palette.grey["20"];
  };
  const isMoreVariant = props.variant === "more";
  const hasNoText = isMoreVariant || typeof props.text === "undefined" || props.text === "";
  const startIcon = props.variant === "more" ? <MoreHoriz /> : props.icon;
  const endIcon = !isMoreVariant && <ArrowDropDown />;
  const text = !isMoreVariant && props.text;
  const onlyIconStyle = hasNoText && {
    "minWidth": isSmallSize ? "32px" : "40px",
    "padding": isSmallSize ? "4px 8px" : "8px 12px",
    "& .MuiButton-startIcon": {
      margin: 0,
    },
  };

  const open = Boolean(anchorEl);
  const onClickHanderlButton = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const onClickHandlerMenu = () => {
    setAnchorEl(null);
  };
  const onClickHandlerMenuItem = (key: string) => () => {
    onClickHandlerMenu();
    props.onClick && props.onClick(key);
  };

  const menuItems = props.options.map(option => {
    return (
      <MenuItem disableRipple key={option.label} onClick={onClickHandlerMenuItem(option.label)}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "20px",
          }}>
          {option.value}
        </Typography>
      </MenuItem>
    );
  });
  return (
    <Box>
      <MuiButton
        disableElevation
        sx={{
          height,
          color,
          backgroundColor,
          "&:hover": {
            color,
            backgroundColor,
          },
          "&.Mui-disabled": {
            opacity: 0.5,
            color,
            backgroundColor,
          },
          ...onlyIconStyle,
        }}
        {...props}
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        onClick={onClickHanderlButton}>
        <Box marginTop={"2px"} fontStyle={"normal"} fontSize={"14px"} lineHeight={"20px"}>
          {text}
        </Box>
      </MuiButton>
      <Menu
        disablePortal
        anchorEl={anchorEl}
        open={open}
        onClose={onClickHandlerMenu}
        PaperProps={{
          sx: {
            marginTop: "5px",
          },
        }}>
        {menuItems}
      </Menu>
    </Box>
  );
};

export default Dropdown;
