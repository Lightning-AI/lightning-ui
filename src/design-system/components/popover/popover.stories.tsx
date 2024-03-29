import { useState } from "react";

import { Box, Typography } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "design-system/components/button";
import Popover from "design-system/components/popover";
import { Settings } from "design-system/icons";

export default {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=66592%3A101686",
    },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      open={open}
      onChange={value => setOpen(value)}
      onClickable={<Button icon={<Settings />} text="View Options" color={"grey"}></Button>}>
      <Box width={"250px"}>
        <Typography variant={"h6"}>View Options</Typography>
        <Typography variant={"body1"}>More content as the body of the options</Typography>
        <Box display={"flex"} flexDirection={"column"} paddingTop={"20px"}>
          <Button color={"grey"} text={"Cancel"} fullWidth onClick={() => setOpen(false)} />
          <Box paddingY={"5px"}></Box>
          <Button text={"Apply"} fullWidth onClick={() => setOpen(false)} />
        </Box>
      </Box>
    </Popover>
  );
};

export const Playground = Template.bind({});
