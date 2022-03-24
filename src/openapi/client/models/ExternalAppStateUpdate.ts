/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalAppState } from "./ExternalAppState";

/**
 * Represents the incoming request to update
 * the app state as exposed externally via the JSON API.
 */
export type ExternalAppStateUpdate = {
  stage?: string;
  state?: ExternalAppState;
};
