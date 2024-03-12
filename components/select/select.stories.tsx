import { ComponentMeta, ComponentStory } from "@storybook/react";
import Select, { SelectProps } from "design-system/components/select";
import * as Icons from "design-system/icons";
import { LockRounded, SupervisorAccountRounded } from "design-system/icons";

import { SvgIcon } from "..";

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=34128%3A85155",
    },
  },
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text",
    },
    tooltip: {
      defaultValue: "Tooltip message",
      control: "text",
    },
    helperText: {
      defaultValue: "Helper Text",
      control: "text",
    },
    icon: {
      options: [undefined, ...Object.keys(Icons)],
      defaultValue: undefined,
      control: "select",
    },
    status: {
      options: [undefined, "success", "warning", "error", "info"],
      control: "select",
    },
    size: {
      defaultValue: "medium",
      options: ["medium", "small"],
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
    minWidthPx: {
      defaultValue: undefined,
      control: "number",
    },
    heightPx: {
      defaultValue: undefined,
      control: "number",
    },
    fontSize: {
      defaultValue: undefined,
      control: "string",
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
    optional: {
      defaultValue: false,
      control: "boolean",
    },
    multiple: {
      table: {
        disable: true,
      },
    },
    options: {
      defaultValue: [
        { value: "value-1", label: "Option 1" },
        { value: "value-2", label: "Option 2" },
        { value: "value-3", label: "Option 3" },
      ],
      control: "object",
    },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({ icon, ...args }: SelectProps) => {
  // @ts-ignore
  const iconComponent = icon && <SvgIcon component={Icons[icon]} />;
  return <Select {...args} icon={iconComponent} />;
};

export const Playground = Template.bind({});

export const LongOptionList = Template.bind({});
const longOptions = Array.from({ length: 100 }, (_, i) => ({
  value: `value-${i}`,
  label: `Option ${i}`,
}));
LongOptionList.args = { options: longOptions };

export const LabelObject = Template.bind({});
const labelObjectOptions = [
  {
    value: "everyone",
    label: {
      text: "Everyone",
      helpText: "Anyone with the link can access my app",
      icon: <SupervisorAccountRounded />,
    },
  },
  {
    value: "only-me",
    label: { text: "Only Me", helpText: "Only the owner can open and use the app", icon: <LockRounded /> },
  },
];
LabelObject.args = { options: labelObjectOptions };

export const MultipleVersion = Template.bind({});
MultipleVersion.args = { multiple: true };
