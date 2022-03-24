import React from "react";

import mount from "tests/utils/testMount";
import { Layout, LayoutLeaf } from "types/lightning";
import LayoutView from "./LayoutView";
import { ExternalAppState } from "openapi/client";
import lightningService from "openapi/singleton";

describe("LayoutView", () => {
  beforeEach(() => {
    cy.fixture("app-state--simple-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });
  });

  it("fetches app state from API on mount", () => {
    cy.fixture("app-state--simple-layout.json").then((state: ExternalAppState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[0]} />);

      cy.get("@getStateApiV1StateGet").should("have.been.called");
    });
  });

  it("renders iframe if given a leaf node with a `target` property", () => {
    cy.fixture("app-state--simple-layout").then((state: ExternalAppState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[2]} />);

      cy.get("@getStateApiV1StateGet").should("have.been.called");

      cy.get("iframe").should("have.attr", "src", (layout[2] as LayoutLeaf).target);
    });
  });

  it("renders multiple iframes if given a node which has multiple child layouts", () => {
    cy.fixture("app-state--simple-layout").then((state: ExternalAppState) => {
      const layout = state.vars._layout as Layout[];

      mount(<LayoutView layout={layout[1]} />);

      cy.get("@getStateApiV1StateGet").should("have.been.called");

      cy.get("iframe").first().should("have.attr", "src", "http://localhost:48049");
      cy.get("iframe").last().should("have.attr", "src", "http://localhost:59915");
    });
  });
});
