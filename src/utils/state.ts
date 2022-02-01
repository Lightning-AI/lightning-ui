import get from "lodash/get";

import { LayoutBranch, LightingState } from "types/lightning";

export const componentPathFor = (path: string) => {
  const fullPath = path.replaceAll(".", ".children.");
  const rootRemoved = fullPath.replace("root.", "");

  return rootRemoved;
};

export const childFor = (path: string, state: LightingState): LightingState => {
  return get(state, componentPathFor(path));
};

export type LightningRoute = {
  path: string;
  layout: LayoutBranch;
};

export const routesFor = (state: LightingState) => {
  if (
    state === undefined ||
    state.vars === undefined ||
    state.vars._layout === undefined
  ) {
    return [];
  }

  return Array.isArray(state.vars._layout)
    ? state.vars._layout
    : [state.vars._layout];
};

export const layoutFor = (state: LightingState): LightningRoute[] => {
  return routesFor(state)
    .map(route => ({ path: route.name, layout: (route as LayoutBranch) }));
};
