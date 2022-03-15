import * as React from "react";
import MuiPopover, { PopoverProps as MuiPopoverProps } from "@mui/material/Popover";
import { ReactElement, useState } from "react";
import { Box } from "design-system/components";

export type PopoverProps = {
  onClickable: ReactElement;
  open?: boolean;
  onChange?: (open: boolean) => void;
} & Pick<MuiPopoverProps, "children">;

const Popover = (props: PopoverProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const onClickHandler = (event: any) => {
    setAnchorEl(event.currentTarget);
    props.onChange && props.onChange(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    props.onChange && props.onChange(false);
  };

  const clonedOnClickable = React.cloneElement(props.onClickable, { onClick: onClickHandler });

  const open = props.open ?? Boolean(anchorEl);

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
