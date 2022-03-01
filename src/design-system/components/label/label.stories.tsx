import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label, { LabelProps } from "design-system/components/label";

export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=31299%3A63735",
    },
  },
  argTypes: {
    text: {
      defaultValue: "Label",
      control: "text",
    },
    color: {
      options: ["default", "primary", "success", "error", "warning", "grey", "purple"],
      control: "select",
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => {
  return <Label {...args} />;
};

export const Playground = Template.bind({});
