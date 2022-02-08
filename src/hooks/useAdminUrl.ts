import { location } from "utils/api";

// FIXME: Find more robust way of determining this domain...
const productionDomain = "b975913c4b22eca5f0f9e8eff4c4b1c315340a0d.staging.lightning.ai";

export default function useAdminUrl() {
  const localHostNames = new Set(["localhost", "127.0.0.1"]);

  if (localHostNames.has(location.getLocation().hostname)) {
    return `${location.getLocation().origin}/admin`;
  }

  const appId = location.getLocation().hostname.split(".")[0];

  return `${location.getLocation().protocol}//${productionDomain}/me/app/${appId}`;
}
