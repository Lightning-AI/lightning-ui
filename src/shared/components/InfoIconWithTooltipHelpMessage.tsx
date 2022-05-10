import React from "react";
import { InfoRounded } from "@mui/icons-material";

import Tooltip, { TooltipProps } from "../../design-system/components/tooltip";
import { styled, tooltipClasses } from "@mui/material";

const InfoIconTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 220,
    backgroundColor: "#5B5E69",
  },
});

type InfoIconProps = {
  message: string;
};

export default function InfoIconWithTooltipHelpMessage({ message }: InfoIconProps) {
  return (
    <InfoIconTooltip title={message} placement={"top"}>
      <InfoRounded sx={{ color: "black" }} />
    </InfoIconTooltip>
  );
}
