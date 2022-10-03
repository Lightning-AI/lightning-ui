import { useEffect, useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleButtonGroup, { ToggleButtonItemProps } from "design-system/components/toggle-button-group";

import { LockOpenRounded, LockRounded } from "../../icons";

export default {
  title: "Components/ToggleButtonGroup",
  component: ToggleButtonGroup,
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
    value: {
      options: ["Secret", "Environment"],
      defaultValue: "Secret",
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
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof ToggleButtonGroup>;

const items: ToggleButtonItemProps[] = [
  {
    value: "Secret",
    text: "Secret",
    icon: <LockRounded />,
  },
  {
    value: "Environment",
    text: "Environment",
    icon: <LockOpenRounded />,
  },
];

const Template: ComponentStory<typeof ToggleButtonGroup> = args => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  useEffect(() => {
    setSelectedValue(args.value);
  }, [args.value]);

  return (
    <ToggleButtonGroup
      {...args}
      items={items}
      value={selectedValue}
      onChange={newValue => {
        setSelectedValue(newValue);
        args.onChange(newValue);
      }}
    />
  );
};

export const Playground = Template.bind({});
