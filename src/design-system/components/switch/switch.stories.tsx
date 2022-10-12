import { ComponentMeta, ComponentStory } from "@storybook/react";

import Switch, { SwitchProps } from ".";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=57007%3A76702",
    },
  },
  args: {
    label: "type of switch",
    tooltip: "tooltip message",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    checked: {
      control: "boolean",
      defaultValue: false,
    },
    onChange: { action: "switch Clicked!" },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<any> = ({ ...args }: SwitchProps) => {
  return <Switch {...args} />;
};

export const Playground = Template.bind({});
