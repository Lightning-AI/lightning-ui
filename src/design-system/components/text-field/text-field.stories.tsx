import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField, { TextFieldProps } from "design-system/components/text-field";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=34128%3A85206",
    },
  },
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text",
    },
    helperText: {
      defaultValue: "Helper Text",
      control: "text",
    },
    placeholder: {
      defaultValue: "Placeholder",
      control: "text",
    },
    status: {
      options: [undefined, "success", "warning", "error"],
      control: "select",
    },
    statusText: {
      defaultValue: "Status Text",
      control: "text",
    },
    fullWidth: {
      defaultValue: false,
      control: "boolean",
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args: TextFieldProps) => {
  return <TextField {...args} />;
};

export const Playground = Template.bind({});
