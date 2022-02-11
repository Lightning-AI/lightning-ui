import { location } from "utils/api";
import useRuntime, { Runtime } from "./useRuntime";

// FIXME: Find more robust way of determining this domain...
const productionDomain = "b975913c4b22eca5f0f9e8eff4c4b1c315340a0d.staging.lightning.ai";

export default function useAdminUrl() {
  const runtime = useRuntime();

  if (runtime === Runtime.local) {
    return `${location.getLocation().origin}/admin`;
  }

  const appId = location.getLocation().hostname.split(".")[0];

  return `${location.getLocation().protocol}//${productionDomain}/me/app/${appId}`;
}
