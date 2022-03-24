import get from "lodash/get";
import { ExternalAppState } from "openapi/client";

import { LayoutBranch, Layout } from "types/lightning";

export const componentPathFor = (path: string) => {
  const fullPath = path.replaceAll(".", ".flows.");
  const rootRemoved = fullPath.replace("root.", "");

  return rootRemoved;
};

export const childFor = (path: string, state: ExternalAppState): ExternalAppState => {
  return get(state, componentPathFor(path));
};

export type LightningRoute = {
  path: string;
  layout: LayoutBranch;
};

export const routesFor = (state: ExternalAppState) => {
  if (state === undefined || state.vars === undefined || state.vars._layout === undefined) {
    return [];
  }

  // FIXME(alecmerdler): Still need type coercion here because server does not define this type correctly.
  const layout = state.vars._layout as Layout | Layout[];

  return Array.isArray(layout) ? layout : [layout];
};

export const layoutFor = (state: ExternalAppState): LightningRoute[] => {
  return routesFor(state).map(route => ({ path: route.name, layout: route as LayoutBranch }));
};
