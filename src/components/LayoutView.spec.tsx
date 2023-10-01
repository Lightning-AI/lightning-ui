import React from "react";

import { Layout, LayoutBranch, LayoutLeaf, LightningState } from "types/lightning";

import { stateEndpoint } from "tests/utils/lightning";
import mount from "tests/utils/testMount";

import LayoutView from "./LayoutView";

describe("LayoutView", () => {
  beforeEach(() => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--simple-layout" }).as("getState");
  });

  it("fetches app state from API on mount", () => {
    cy.fixture("app-state--simple-layout").then((state: LightningState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[0] as Layout} />);

      cy.wait("@getState");
    });
  });

  it("renders nothing if given a leaf node without a `target` property", () => {
    mount(<LayoutView layout={{} as LayoutBranch} />);

    cy.wait("@getState");

    cy.get("iframe").should("not.exist");
  });

  it("renders iframe if given a leaf node with a `target` property", () => {
    cy.fixture("app-state--simple-layout").then((state: LightningState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[2] as Layout} />);

      cy.wait("@getState");

      cy.get("iframe").should("have.attr", "src", (layout[2] as LayoutLeaf).target);
    });
  });

  it("renders multiple iframes if given a node which has multiple child layouts", () => {
    cy.fixture("app-state--simple-layout").then((state: LightningState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[1] as Layout} />);

      cy.wait("@getState");

      cy.get("iframe").first().should("have.attr", "src", "http://localhost:48049");
      cy.get("iframe").last().should("have.attr", "src", "http://localhost:59915");
    });
  });
});
