import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=37781%3A2094",
    },
  },
  argTypes: {
    checked: {
      control: "boolean",
      defaultValue: true,
    },
    onChange: { action: "checkbox Clicked!" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<any> = ({ ...args }: CheckboxProps) => {
  return <Checkbox checked={args.checked} onChange={args.onChange} />;
};

export const Playground = Template.bind({});
