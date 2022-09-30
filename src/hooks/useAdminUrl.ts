import { location } from "utils/api";

import useRuntime, { Runtime } from "./useRuntime";

const productionDomain = "lightning.ai";

export default function useAdminUrl() {
  const runtime = useRuntime();

  if (runtime === Runtime.local) {
    return `${location.getLocation().origin}/admin`;
  }

  const appId = location.getLocation().hostname.split(".")[0];

  return `${location.getLocation().protocol}//${productionDomain}/me/app/${appId}`;
}
