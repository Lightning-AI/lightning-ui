const host = process.env.REACT_APP_LIGHTNING_API ?? window.location.origin;

export const stateEndpoint = `${host}/api/v1/state`;
export const specEndpoint = `${host}/api/v1/spec`;

export const headersFor = () => {
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
