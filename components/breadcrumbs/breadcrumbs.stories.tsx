import { ComponentMeta } from "@storybook/react";
import Breadcrumbs, { BreadcrumbItem } from "design-system/components/breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=38552%3A59529",
    },
  },
  argTypes: {
    tabItems: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Breadcrumbs>;

export const ShortBreadcrumb = () => {
  const items: BreadcrumbItem[] = [
    { title: "Tab Item 1", href: "url/to/href/1" },
    { title: "Tab Item 2", href: "url/to/href/2" },
    { title: "Tab Item 3", href: "url/to/href/3" },
  ];
  return <Breadcrumbs items={items} />;
};

export const LongBreadcrumb = () => {
  const items: BreadcrumbItem[] = [
    { title: "Tab Item 1", href: "url/to/href/1" },
    { title: "Tab Item 2", href: "url/to/href/2" },
    { title: "Tab Item 3", href: "url/to/href/3" },
    { title: "Tab Item 4", href: "url/to/href/4" },
    { title: "Tab Item 5", href: "url/to/href/5" },
    { title: "Tab Item 6", href: "url/to/href/6" },
  ];
  return <Breadcrumbs items={items} />;
};
