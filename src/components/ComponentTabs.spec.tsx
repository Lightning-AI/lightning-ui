import React from "react";

import { Layout, LightningState } from "types/lightning";

import { stateEndpoint } from "tests/utils/lightning";
import mount from "tests/utils/testMount";

import ComponentTabs from "./ComponentTabs";

describe("ComponentTabs", () => {
  it("fetches the app state from the API on mount", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--simple-layout" }).as("getState");

    mount(<ComponentTabs />);

    cy.wait("@getState");
  });

  it("renders a tab for each component view in the app state layout", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--simple-layout" }).as("getState");

    mount(<ComponentTabs />);

    cy.wait("@getState");

    cy.fixture("app-state--simple-layout").then((state: LightningState) => {
      const layout = state.vars._layout as Layout[];

      layout.forEach(item => {
        cy.contains(item.name.toUpperCase()).click();

        cy.location("pathname").should("equal", `/view/${encodeURIComponent(item.name)}`);
      });
    });
  });

  it("renders no tabs if the Lightning app only has one tab defined in `configure_layout()`", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--single-tab-layout" }).as("getState");

    mount(<ComponentTabs />);

    cy.wait("@getState");

    cy.get(".MuiTabs-root").should("not.exist");
  });
});
