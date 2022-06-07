import React, { ReactNode } from "react";

import { Typography } from "@mui/material";

import { Box, Stack } from "..";

export type EmptyStateProps = {
  src: string;
  title?: string;
  message?: string;
  children?: ReactNode;
};

export default function NoData(props: EmptyStateProps) {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2.5}
      width={{ sm: "100%", md: "75%" }}
      margin={"auto"}>
      <Box component={"img"} src={props.src}></Box>
      <Stack spacing={0.5} alignItems={"center"}>
        <Typography fontFamily={"UCity"} fontWeight={600} fontSize={"16px"} lineHeight={"20px"} textAlign={"center"}>
          {props.title}
        </Typography>
        <Typography fontFamily={"Roboto"} fontWeight={400} fontSize={"14px"} lineHeight={"20px"} textAlign={"center"}>
          {props.message}
        </Typography>
        {props.children && <Box paddingTop={1.5}>{props.children}</Box>}
      </Stack>
    </Stack>
  );
}
