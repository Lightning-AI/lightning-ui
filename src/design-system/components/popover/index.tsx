import * as React from "react";
import MuiPopover, { PopoverProps as MuiPopoverProps } from "@mui/material/Popover";
import { ReactElement } from "react";
import { Box } from "design-system/components";

export type PopoverProps = {
  onClickable: ReactElement;
} & Pick<MuiPopoverProps, "children">;

const Popover = (props: PopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onClickHandler = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const clonedOnClickable = React.cloneElement(props.onClickable, { onClick: onClickHandler });

  return (
    <Box>
      {clonedOnClickable}
      <MuiPopover
        disablePortal
        elevation={4}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            marginTop: "5px",
            p: "12px",
            borderRadius: "8px",
          },
        }}>
        {props.children}
      </MuiPopover>
    </Box>
  );
};

export default Popover;
