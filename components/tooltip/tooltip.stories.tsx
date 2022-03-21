import IconButton from "@mui/material/IconButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tooltip, { TooltipProps } from "design-system/components/tooltip";
import { InfoRounded } from "design-system/icons";
import { Box } from "design-system/components";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=31299%3A63735",
    },
  },
  argTypes: {
    title: {
      defaultValue: "Tooltip is read-only",
      control: "text",
    },
    placement: {
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
      control: "select",
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => {
  return (
    <Box display={"flex"} height={"200px"} alignItems={"center"} justifyContent={"center"}>
      <Tooltip {...args}>
        <IconButton>
          <InfoRounded />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export const Playground = Template.bind({});
