import React from "react";
import { Tabs } from "design-system/components";

import Components from "./Components";
import { ComponentEntity } from "../shared/components/ComponentTable";
import { StatusEnum } from "../shared/components/Status";
import AppOverview from "shared/components/AppOverview";
import useLightningState from "hooks/useLightningState";
import useLightningSpec from "hooks/useLightningSpec";
import { AppStage, LightningSpec, LightningState, WorkStage } from "types/lightning";

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
  [WorkStage.succeeded]: StatusEnum.SUCCEEDED,
  [WorkStage.failed]: StatusEnum.FAILED,
};

const NO_VALUE = "--";

const getComponentClassName = (key: string, lightningSpec: LightningSpec) => {
  const specItem = lightningSpec.find(item => item.affiliation.slice(-1)[0] === key);
  return specItem?.cls_name ? `${specItem.cls_name} (${key})` : key;
};

const getAppComponentDetails = (lightningState: LightningState, lightningSpec: LightningSpec): ComponentEntity => {
  return {
    status: appStageStatusMap[lightningState.app_state.stage],
    name: getComponentClassName("root", lightningSpec),
    type: "Flow",
    provider: NO_VALUE,
  };
};

const getFlowComponentsDetails = (lightningState: LightningState, lightningSpec: LightningSpec): ComponentEntity[] => {
  return Object.entries(lightningState.flows).map(entry => {
    return {
      status: appStageStatusMap[lightningState.app_state.stage],
      name: getComponentClassName(entry[0], lightningSpec),
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

const getWorkComponentsDetails = (works: any, lightningSpec: LightningSpec): ComponentEntity[] => {
  return Object.entries(works).map((entry: any[]) => {
    return {
      status: getWorkComponentStatus(entry[1].calls),
      name: getComponentClassName(entry[0], lightningSpec),
      type: "Work",
      provider: NO_VALUE,
    };
  });
};

export default function AdminTabs() {
  const lightningState = useLightningState();
  const lightningSpec = useLightningSpec();

  const stateData = lightningState.data;
  const specData = lightningSpec.data;
  const components =
    stateData && specData
      ? [
          getAppComponentDetails(stateData, specData),
          ...getFlowComponentsDetails(stateData, specData),
          ...getWorkComponentsDetails(stateData.works, specData),
        ]
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
