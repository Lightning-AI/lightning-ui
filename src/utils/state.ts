import get from "lodash/get";

import { LightingState } from "types/lightning";

export const componentPathFor = (path: string) => {
  const fullPath = path.replaceAll(".", ".children.");
  const rootRemoved = fullPath.replace("root.", "");

  return rootRemoved;
};

export const childFor = (path: string, state: LightingState): LightingState => {
  return get(state, componentPathFor(path));
};
