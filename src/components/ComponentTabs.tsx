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

  if (routes.length === 1) {
    return null;
  }

  const tabItems = routes.map(route => {
    return {
      title: route.name.toUpperCase(),
      href: `/view/${encodeURIComponent(route.name)}`,
    };
  });

  // FIXME(alecmerdler): If there is a single tab defined in `configure_layout()`, render fullscreen without tabs...
  return <Tabs tabItems={tabItems} selectedTab={0} divider={false} />;
}
