import React from "react";

import mount from "tests/utils/testMount";
import { stateEndpoint } from "tests/utils/lightning";
import { Layout, LightningState } from "types/lightning";
import Tabs from "./Tabs";

describe("Tabs", () => {
  it("fetches the app state from the API on mount", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--simple-layout" }).as("getState");

    mount(<Tabs />);

    cy.wait("@getState");
  });

  it("renders a tab for each component view in the app state layout", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--simple-layout" }).as("getState");

    mount(<Tabs />);

    cy.wait("@getState");

    cy.fixture("app-state--simple-layout").then((state: LightningState) => {
      const layout = state.vars._layout as Layout[];

      layout.forEach(item => {
        cy.contains(item.name.toUpperCase()).click();

        cy.location("pathname").should("equal", `/view/${encodeURIComponent(item.name)}`);
      });
    });
  });
});
