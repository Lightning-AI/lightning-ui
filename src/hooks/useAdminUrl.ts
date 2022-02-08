// FIXME: Find more robust way of determining this domain...
const productionDomain = "b975913c4b22eca5f0f9e8eff4c4b1c315340a0d.staging.lightning.ai";

export default function useAdminUrl() {
  const localHostNames = new Set(["localhost", "127.0.0.1"]);

  if (localHostNames.has(window.location.hostname)) {
    return `${window.location.origin}/admin`;
  }

  const appId = window.location.hostname.split(".")[0];

  return `${window.location.protocol}//${productionDomain}/me/apps/${appId}`;
}
