import React from "react";

import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

import { Box, Typography } from "../";
import { MoreHoriz } from "../../icons";

export type BreadcrumbItem = { title: string; href: string };

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const navigate = useNavigate();
  const onClickHandler = (
    url: string,
  ): React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLSpanElement> => {
    return event => {
      event.preventDefault();
      navigate(url);
    };
  };
  const itemStyle = {
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "24px",
    textDecoration: "none",
  };
  const lastItem = items.slice(-1).map(item => (
    <Typography key={items.length - 1} color={"black"} sx={itemStyle}>
      {item.title}
    </Typography>
  ));

  let previousItems = items.slice(0, -1).map((item, index) => (
    <MuiLink key={index} href={item.href} onClick={onClickHandler(item.href)} sx={itemStyle}>
      {item.title}
    </MuiLink>
  ));

  if (previousItems.length > 2) {
    previousItems = [
      previousItems[0],
      <Box display={"flex"} alignItems={"end"} key={items.length - 1} color={"rgba(91, 94, 105, 1)"}>
        <MoreHoriz />
      </Box>,
      previousItems.slice(-1)[0],
    ];
  }

  return <MuiBreadcrumbs>{previousItems.concat(lastItem)}</MuiBreadcrumbs>;
}
