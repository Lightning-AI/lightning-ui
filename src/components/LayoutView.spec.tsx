import React from "react";

import mount from "tests/utils/testMount";
import { stateEndpoint } from "tests/utils/lightning";
import { Layout, LayoutLeaf, LightingState } from "types/lightning";
import LayoutView from "./LayoutView";

describe("LayoutView", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--simple-layout" }
    ).as("getState");
  });

  it("fetches app state from API on mount", () => {
    cy.fixture("app-state--simple-layout").then((state: LightingState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[0]} />);

      cy.wait("@getState");
    });
  });

  it("renders iframe if given a leaf node with a `target` property", () => {
    cy.fixture("app-state--simple-layout").then((state: LightingState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[2]} />);

      cy.wait("@getState");

      cy.get("iframe").should("have.attr", "src", (layout[2] as LayoutLeaf).target);
    });
  });

  it("renders multiple iframes if given a node which has multiple child layouts", () => {
    cy.fixture("app-state--simple-layout").then((state: LightingState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[1]} />);

      cy.wait("@getState");

      cy.get("iframe").first().should("have.attr", "src", "http://localhost:48049");
      cy.get("iframe").last().should("have.attr", "src", "http://localhost:59915");
    });
  });
});
