import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs, { TabItem, TabsProps } from "design-system/components/tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=5105%3A27362",
    },
  },
  argTypes: {
    variant: {
      options: ["text", "outlined", "grouped"],
      control: "select",
    },
    divider: {
      defaultValue: true,
      control: "boolean",
    },
    prerenderTabs: {
      defaultValue: true,
      control: "boolean",
    },
    tabItems: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Tabs>;

const tabItems: TabItem[] = [
  { title: "Tab Item 1", content: <>Tab Content 1</>, disabled: true, tooltip: "This tab is disabled" },
  { title: "Tab Item 2", content: <>Tab Content 2</> },
  { title: "Tab Item 3", content: <>Tab Content 3</> },
  { title: "Tab Item 4", content: <>Tab Content 4</> },
  { title: "Tab Item 5", content: <>Tab Content 5</> },
  { title: "Tab Item 6", content: <>Tab Content 6</> },
];

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => {
  return <Tabs {...args} tabItems={tabItems} />;
};

export const Playground = Template.bind({});
