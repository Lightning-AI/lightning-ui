import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkbox, { CheckboxProps } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XXxxfECxqzvlbvfr8SqHhg/Project-X",
    },
  },
  args: {
    label: "type of checkbox",
    helperText: "some helper text",
    statusText: "status text",
    description: <>some description for the checkbox</>,
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
      options: [undefined, "success", "warning", "error"],
      defaultValue: "error",
    },
    size: {
      control: "select",
      options: [undefined, "small", "medium"],
    },
    onChange: { action: "checkbox Clicked!" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<any> = ({ ...args }: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const Playground = Template.bind({});
