import IconButton from "@mui/material/IconButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tooltip, { TooltipProps } from "design-system/components/tooltip";
import { InfoRounded } from "design-system/icons";
import { Box } from "design-system/components";
import HelpMessage from "design-system/components/tooltip/HelpMessage";
import InfoIconWithHelpTooltip, {
  InfoIconWithHelpTooltipProps,
} from "design-system/components/tooltip/InfoIconWithHelpTooltip";

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

export const TooltipPlayground = Template.bind({});
TooltipPlayground.parameters = { controls: { exclude: ["message"] } };

const HelpMessageTemplate: ComponentStory<typeof HelpMessage> = (args: TooltipProps) => {
  return (
    <Box display={"flex"} height={"200px"} alignItems={"center"} justifyContent={"center"}>
      <HelpMessage {...args}>
        <IconButton>
          <InfoRounded />
        </IconButton>
      </HelpMessage>
    </Box>
  );
};

export const HelpMessagePlayground = HelpMessageTemplate.bind({});
HelpMessagePlayground.parameters = { controls: { exclude: ["message"] } };

const InfoIconWithHelpTooltipTemplate: ComponentStory<any> = (args: InfoIconWithHelpTooltipProps) => {
  return (
    <Box display={"flex"} height={"200px"} alignItems={"center"} justifyContent={"center"}>
      <InfoIconWithHelpTooltip {...args} />
    </Box>
  );
};

export const InfoIconWithHelpTooltipPlayground = InfoIconWithHelpTooltipTemplate.bind({});
InfoIconWithHelpTooltipPlayground.parameters = { controls: { exclude: ["title", "placement"] } };
