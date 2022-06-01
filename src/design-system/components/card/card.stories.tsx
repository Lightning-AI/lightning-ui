import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card, { CardProps } from "design-system/components/card/Card";
import { CardHeader, CardContent, CardActions, CardActionArea } from "design-system/components/card";
import Button from "design-system/components/button";
import { FilterAltOutlined } from "design-system/icons";
import { Box } from "..";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=37781%3A2094",
    },
  },
  argTypes: {
    variant: {
      options: ["elevation", "outlined"],
      control: "select",
    },
    width: {
      defaultValue: "750px",
      control: "text",
    },
    href: {
      defaultValue: "/?path=/story/introduction--page",
      control: "text",
    },
    children: {
      table: {
        disable: true,
      },
    },
    onClick: { action: "Card Clicked!" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<any> = ({ onClick, ...args }: CardProps & { onClick: any, href: string }) => {
  const buttonOnClickHandler = (event: any) => event.stopPropagation();
  return (
    <Card {...args}>
      <CardHeader
        title={"Card Header"}
        subheader={"Support Details"}
        action={
          <Button
            icon={<FilterAltOutlined />}
            text="Filter"
            variant="text"
            color="grey"
            onClick={buttonOnClickHandler}
          />
        }
      />
      <CardActionArea onClick={onClick} href={args.href}>
        <CardContent>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"150px"}>
            Card Content
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box display={"flex"} justifyContent={"end"} width={"100%"}>
          <Button text="Cancel" color={"grey"} onClick={buttonOnClickHandler} />
          <Box px={1} />
          <Button text="Confirm" onClick={buttonOnClickHandler} />
        </Box>
      </CardActions>
    </Card>
  );
};

export const Playground = Template.bind({});
