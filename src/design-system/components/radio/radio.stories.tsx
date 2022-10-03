import { ComponentMeta, ComponentStory } from "@storybook/react";

import Radio, { RadioProps } from ".";

export default {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=57007%3A76702",
    },
  },
  args: {
    label: "type of radio",
    tooltip: "tooltip message",
    helperText: "some helper text",
    statusText: "status text",
    description: <>some description for the radio</>,
    fullWidth: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    optional: {
      control: "boolean",
      defaultValue: false,
    },
    checked: {
      control: "boolean",
      defaultValue: true,
    },
    status: {
      control: "select",
      options: [undefined, "success", "warning", "error", "info"],
      defaultValue: "error",
    },
    size: {
      control: "select",
      options: [undefined, "small", "medium"],
    },
    onChange: { action: "radio Clicked!" },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<any> = ({ ...args }: RadioProps) => {
  return <Radio {...args} />;
};

export const Playground = Template.bind({});
