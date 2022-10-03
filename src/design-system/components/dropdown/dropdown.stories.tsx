import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SvgIcon } from "design-system/components";
import Dropdown, { DropdownProps } from "design-system/components/dropdown";
import * as Icons from "design-system/icons";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=35840%3A1497",
    },
  },
  argTypes: {
    text: {
      defaultValue: "Button",
      control: "text",
    },
    icon: {
      options: ["", ...Object.keys(Icons)],
      defaultValue: "",
      control: "select",
    },
    variant: {
      options: ["contained", "text", "more"],
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
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ icon, ...args }: DropdownProps) => {
  // @ts-ignore
  const iconComponent = icon !== "" ? <SvgIcon component={Icons[icon]} /> : undefined;
  const options = [
    { label: "label 1", value: "Option 1" },
    { label: "label 2", value: "Option 2" },
    { label: "label 3", value: "Option 3" },
    { label: "label 4", value: "Option 4" },
  ];
  return <Dropdown {...args} options={options} icon={iconComponent} />;
};

export const Playground = Template.bind({});
