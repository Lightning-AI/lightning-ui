import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonGroup, { ButtonGroupProps } from "design-system/components/button-group";
import Button from "design-system/components/button";
import { PublicRounded } from "../../icons";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=29421%3A61",
    },
  },
  argTypes: {
    tooltip: {
      defaultValue: "A Tooltip",
      control: "text",
    },
    color: {
      options: ["primary", "grey", "success", "error"],
      control: "select",
    },
    size: {
      options: ["medium", "small"],
      control: "select",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    showIcon: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = ({
  color,
  showIcon,
  ...args
}: ButtonGroupProps & { showIcon?: boolean }) => {
  return (
    <ButtonGroup {...args} color={color}>
      <Button icon={showIcon && <PublicRounded />} text="First Action"></Button>
      <Button icon={showIcon && <PublicRounded />} text="Second Action"></Button>
      <Button icon={showIcon && <PublicRounded />} text="Third Action"></Button>
    </ButtonGroup>
  );
};

export const Playground = Template.bind({});
