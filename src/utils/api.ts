const host = process.env.REACT_APP_LIGHTNING_API ?? window.location.origin;

export const wsEndpoint = `${host}/api/v1/ws`.replace("http", "ws");

export const headersFor = () => {
  return {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-Lightning-Type": "DEFAULT",
    "X-Lightning-Session-UUID": "1234",
    "X-Lightning-Session-ID": "1234",
  };
};

/**
 * Wraps `window.location`, mainly for stubbing during testing.
 */
export const location = {
  getLocation: () => window.location,
};
