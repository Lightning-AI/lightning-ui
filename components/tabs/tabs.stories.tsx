import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs, { TabsProps, TabItem } from "design-system/components/tabs";

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
      options: ["text", "outlined"],
      control: "select",
    },
    tabItems: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Tabs>;

const tabItems: TabItem[] = [
  { title: "Tab Item 1", content: <>Tab Content 1</> },
  { title: "Tab Item 2", content: <>Tab Content 2</> },
  { title: "Tab Item 3", content: <>Tab Content 3</> },
];

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => {
  return <Tabs {...args} tabItems={tabItems} selectedTab={1} />;
};

export const Playground = Template.bind({});
