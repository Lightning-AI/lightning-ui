/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a Lightning component spec as exposed externally via the JSON API.
 */
export type ExternalComponentSpec = {
  affiliation: Array<string>;
  cls_name: string;
  module: string;
  docstring: string;
  hardware?: any;
};
