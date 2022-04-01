import React from "react";

import useLightningState from "hooks/useLightningState";
import { routesFor } from "utils/state";
import { LayoutBranch } from "types/lightning";
import { Tabs } from "design-system/components";

export default function ComponentTabs() {
  const lightningState = useLightningState();

  if (lightningState.isLoading || lightningState.data === undefined) {
    return null;
  }

  const routes = routesFor(lightningState.data) as LayoutBranch[];

  const tabItems = routes.map((route, index) => {
    return {
      title: route.name.toUpperCase(),
      href: `/view/${encodeURIComponent(route.name)}`,
    };
  });
  return <Tabs tabItems={tabItems} selectedTab={0} />;
}
