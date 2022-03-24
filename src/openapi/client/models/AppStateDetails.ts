/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppStage } from "./AppStage";

/**
 * Represents some internal information about the app
 * as exposed externally via the JSON API.
 */
export type AppStateDetails = {
  stage: AppStage;
};
