import React from "react";
import { Tabs } from "design-system/components";

import Components from "./Components";
import { AppDetailsProps } from "../shared/components/AppDetails";
import appDetailsJson from "../shared/components/appDetails.json";
import { ComponentEntity } from "../shared/components/ComponentTable";
import componentTableJson from "../shared/components/componentTable.json";
import { StatusEnum } from "../shared/components/Status";
import AppOverview from "shared/components/AppOverview";
import appImage from "shared/components/appImage.png";

const appDetailsProps: AppDetailsProps = {
  ...appDetailsJson,
  lastEdited: undefined,
  image: appImage,
  onEdit: () => {
    console.log("Edit clicked");
  },
};

const components: ComponentEntity[] = [
  { status: StatusEnum.NOT_YET_RUN, ...componentTableJson[0], lastStartTime: undefined },
  { status: StatusEnum.RUNNING, ...componentTableJson[1], lastStartTime: new Date("2022-01-28") },
  { status: StatusEnum.FAILED, ...componentTableJson[2], lastStartTime: new Date("2022-02-18") },
];

export default function AdminTabs() {
  const tabItems = [
    {
      title: "App Overview",
      content: <AppOverview appDetails={appDetailsProps} components={components} />,
    },
    {
      content: <Components />,
      title: "Components",
    },
  ];

  return (
    <Tabs
      tabItems={tabItems}
      variant={"outlined"}
      sxTabs={{ backgroundColor: (theme: any) => theme.palette.grey[10], paddingLeft: "20px" }}
      sxContent={{ paddingLeft: "20px" }}
    />
  );
}
