/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppStateDetails } from "./AppStateDetails";

/**
 * Represents the Lightning app state as exposed externally via the JSON API.
 */
export type ExternalAppState = {
  vars: any;
  calls: any;
  flows: any;
  works: any;
  changes: any;
  storage?: any;
  app_state: AppStateDetails;
};
