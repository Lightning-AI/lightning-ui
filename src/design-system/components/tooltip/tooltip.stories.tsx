import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box, Typography } from "design-system/components";
import Tooltip, { TooltipProps } from "design-system/components/tooltip";
import HelpMessage from "design-system/components/tooltip/HelpMessage";
import InfoIconWithHelpTooltip, {
  InfoIconWithHelpTooltipProps,
} from "design-system/components/tooltip/InfoIconWithHelpTooltip";
import { InfoOutlined } from "design-system/icons";

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
    message: {
      defaultValue: "A very informative help message",
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
    interactive: {
      options: [true, false],
      control: "boolean",
    },
    size: {
      defaultValue: "default",
      options: ["default", "small"],
      control: "select",
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => {
  return (
    <Box display={"flex"} height={"200px"} alignItems={"center"} justifyContent={"center"}>
      <Tooltip {...args}>
        <InfoOutlined />
      </Tooltip>
    </Box>
  );
};

export const TooltipPlayground = Template.bind({});
TooltipPlayground.parameters = { controls: { exclude: ["message", "size"] } };

const HelpMessageTemplate: ComponentStory<typeof HelpMessage> = (args: TooltipProps) => {
  return (
    <Box display={"flex"} height={"200px"} alignItems={"center"} justifyContent={"center"}>
      <HelpMessage {...args}>
        <InfoOutlined />
      </HelpMessage>
    </Box>
  );
};

export const HelpMessagePlayground = HelpMessageTemplate.bind({});
HelpMessagePlayground.parameters = { controls: { exclude: ["message", "size"] } };

const InfoIconWithHelpTooltipTemplate: ComponentStory<any> = (args: InfoIconWithHelpTooltipProps) => {
  return (
    <Box display={"flex"} height={"200px"} alignItems={"center"} justifyContent={"center"}>
      <Typography variant={"body1"} marginRight={1}>
        Text that can use a tooltip
      </Typography>
      <InfoIconWithHelpTooltip {...args} />
    </Box>
  );
};

export const InfoIconWithHelpTooltipPlayground = InfoIconWithHelpTooltipTemplate.bind({});
InfoIconWithHelpTooltipPlayground.parameters = { controls: { exclude: ["title", "placement"] } };
