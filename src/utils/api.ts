declare global {
  interface Window {
    // @example `/muse`
    app_prefix: string;
  }
}

const host = process.env.REACT_APP_LIGHTNING_API ?? window.location.origin;

const prefix = window.app_prefix ?? "";
export const stateEndpoint = `${host}${prefix}/api/v1/state`;
export const specEndpoint = `${host}${prefix}/api/v1/spec`;
export const wsEndpoint = `${host}${prefix}/api/v1/ws`.replace("http", "ws");

const headersFor = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("X-Lightning-Type", "DEFAULT");
  headers.append("X-Lightning-Session-UUID", "1234");
  headers.append("X-Lightning-Session-ID", "1234");
  return headers;
};

/**
 * Wraps `window.location`, mainly for stubbing during testing.
 */
export const location = {
  getLocation: () => window.location,
};

const hasLightningIdCookie = () => document.cookie.includes("lightning_id_token");

export const requestParams = (): RequestInit => ({
  headers: headersFor(),
  credentials: hasLightningIdCookie() ? "include" : "same-origin",
});
