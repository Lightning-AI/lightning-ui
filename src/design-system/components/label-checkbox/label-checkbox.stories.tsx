import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LabelCheckbox, LabelCheckboxProps } from ".";

export default {
  title: "Components/LabelCheckbox",
  component: LabelCheckbox,
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
    onChange: { action: "checkbox Clicked!" },
  },
} as ComponentMeta<typeof LabelCheckbox>;

const Template: ComponentStory<any> = ({ ...args }: LabelCheckboxProps) => {
  return (
    <LabelCheckbox
      name={args.name}
      checked={args.checked}
      onChange={args.onChange}
      label={args.label}
      helpText={args.helpText}
      error={args.error}
    />
  );
};

export const Playground = Template.bind({});
