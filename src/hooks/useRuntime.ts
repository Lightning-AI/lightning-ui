import { location } from "utils/api";

export enum Runtime {
  local = "local",
  cloud = "cloud",
}

export default function useRuntime() {
  const localHostNames = new Set(["localhost", "127.0.0.1"]);

  if (localHostNames.has(location.getLocation().hostname)) {
    return Runtime.local;
  }

  return Runtime.cloud;
}
