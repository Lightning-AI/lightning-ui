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
  argTypes: {
    checked: {
      control: "boolean",
      defaultValue: true,
    },
    label: {
      control: "string",
      defaultValue: "type of checkbox",
    },
    status: {
      control: "select",
      options: ["success", "warning", "error"],
    },
    onChange: { action: "checkbox Clicked!" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<any> = ({ ...args }: CheckboxProps) => {
  return (
    <Checkbox
      name={args.name}
      checked={args.checked}
      onChange={args.onChange}
      label={args.label}
      helperText={args.helperText}
      status={args.status}
    />
  );
};

export const Playground = Template.bind({});
