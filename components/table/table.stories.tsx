import { ReactNode } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box, Stack } from "design-system/components";
import Table, { TableProps } from "design-system/components/table";
import { Circle } from "design-system/icons";

export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=34428%3A91908",
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = ({ header, rowDetails, border, virtualizedParams }: TableProps) => {
  const rowCell: ReactNode[] = [
    <Stack direction={"row"} alignItems={"center"} spacing={1}>
      <Circle sx={{ fontSize: "12px", color: "#19A004" }} /> <Box>Running</Box>
    </Stack>,
    "Video Downloader",
    "S3 Data Download",
    "AWS",
    "Not yet run",
  ];
  const rows = [rowCell, rowCell, rowCell, rowCell, rowCell, rowCell];
  return (
    <Box width={"100%"} height={"100%"}>
      <Table
        virtualizedParams={virtualizedParams}
        header={header}
        rows={rows}
        rowDetails={rowDetails}
        border={border}
        sticky
      />
    </Box>
  );
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: ["Status", "Name", "Type", "Source", "Last Run"],
};

export const WithHeaderAndBorder = Template.bind({});
WithHeaderAndBorder.args = {
  header: ["Status", "Name", "Type", "Source", "Last Run"],
  border: true,
};

export const WithoutHeader = Template.bind({});

const detailsComponent = <Stack alignItems={"center"}>Row Details</Stack>;
export const WithDetails = Template.bind({});
WithDetails.args = {
  header: ["Status", "Name", "Type", "Source", "Last Run"],
  rowDetails: [detailsComponent, detailsComponent, detailsComponent, detailsComponent, detailsComponent],
};

export const Virtualized = Template.bind({});
Virtualized.args = {
  header: ["Status", "Name", "Type", "Source", "Last Run"],
  virtualizedParams: {
    enabled: true,
    rowHeightPx: 57,
    headerHeightPx: 57,
    widthPx: 800,
    heightPx: 300,
    columnWidthsPx: [100, 200, 200, 100, 200],
  },
};
