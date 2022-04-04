import React from "react";
import { Tabs } from "design-system/components";

import Components from "./Components";
import { ComponentEntity } from "../shared/components/ComponentTable";
import { StatusEnum } from "../shared/components/Status";
import AppOverview from "shared/components/AppOverview";
import useLightningState from "hooks/useLightningState";
import { AppStage, LightningState, WorkStage } from "types/lightning";

const appStageStatusMap: Record<AppStage, StatusEnum> = {
  [AppStage.blocking]: StatusEnum.BLOCKING,
  [AppStage.running]: StatusEnum.RUNNING,
  [AppStage.restarting]: StatusEnum.RESTARTING,
  [AppStage.stopping]: StatusEnum.STOPPING,
};

const workStageStatusMap = {
  [WorkStage.stopped]: StatusEnum.STOPPED,
  [WorkStage.requesting]: StatusEnum.REQUESTING,
  [WorkStage.pending]: StatusEnum.PENDING,
  [WorkStage.starting]: StatusEnum.STARTING,
  [WorkStage.running]: StatusEnum.RUNNING,
  [WorkStage.succeeded]: StatusEnum.FINISHED,
  [WorkStage.failed]: StatusEnum.FAILED,
};

const NO_VALUE = "--";

const getFlowComponentsDetails = (lightningState: LightningState): ComponentEntity[] => {
  return Object.entries(lightningState.flows).map(entry => {
    return {
      status: appStageStatusMap[lightningState.app_state.stage],
      name: entry[0],
      type: "Flow",
      provider: NO_VALUE,
    };
  });
};

const getWorkComponentStatus = (workComponentCalls: any) => {
  if (typeof workComponentCalls.latest_call_hash === "undefined" || workComponentCalls.latest_call_hash === null) {
    return workStageStatusMap.stopped;
  }
  const latestCallHash = workComponentCalls[workComponentCalls.latest_call_hash];
  const { statuses } = latestCallHash;
  const latestStatus = statuses.slice(-1)[0];
  return latestStatus.stage;
};

const getWorkComponentsDetails = (works: any): ComponentEntity[] => {
  return Object.entries(works).map((entry: any[]) => {
    return {
      status: getWorkComponentStatus(entry[1].calls),
      name: entry[0],
      type: "Work",
      provider: NO_VALUE,
    };
  });
};

export default function AdminTabs() {
  const lightningState = useLightningState();

  const components = lightningState.data
    ? [...getFlowComponentsDetails(lightningState.data), ...getWorkComponentsDetails(lightningState.data.works)]
    : [];

  const tabItems = [
    {
      title: "App Overview",
      content: <AppOverview appDetails={{}} components={components} />,
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
