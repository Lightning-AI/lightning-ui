import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "design-system/components/button";
import { CardActionArea, CardActions, CardContent, CardHeader } from "design-system/components/card";
import Card, { CardProps } from "design-system/components/card/Card";
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
    to: {
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

const Template: ComponentStory<any> = ({ onClick, ...args }: CardProps & { onClick: any; to: string }) => {
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
      <CardActionArea onClick={onClick} to={args.to}>
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
