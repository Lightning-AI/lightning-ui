import React from "react";

import mount from "tests/utils/testMount";
import { Layout } from "types/lightning";
import Tabs from "./Tabs";
import { ExternalAppState } from "openapi/client";
import lightningService from "openapi/singleton";

describe("Tabs", () => {
  beforeEach(() => {
    cy.fixture("app-state--simple-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });
  });

  it("fetches the app state from the API on mount", () => {
    mount(<Tabs />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");
  });

  it("renders a tab for each component view in the app state layout", () => {
    mount(<Tabs />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");

    cy.fixture("app-state--simple-layout").then((state: ExternalAppState) => {
      const layout = state.vars._layout as Layout[];

      layout.forEach(item => {
        cy.contains(item.name.toUpperCase()).click();

        cy.location("pathname").should("equal", `/view/${encodeURIComponent(item.name)}`);
      });
    });
  });
});
