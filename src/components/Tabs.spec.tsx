import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import mount from "tests/utils/testMount";
import { Layout, LightingState } from "types/lightning";
import TabsComponent from "./Tabs";

// Need to wrap in a <Router> in order to test
const Tabs = () => {
  return (
    <Router>
      <TabsComponent />
    </Router>
  );
};

describe("Tabs", () => {
  const stateEndpoint = "/state";

  it("fetches the app state from the API on mount", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--simple-layout" }
    ).as("getState");

    mount(<Tabs />);

    cy.wait("@getState");
  });

  it("renders a tab for each component view in the app state layout", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--simple-layout" }
    ).as("getState");

    mount(<Tabs />);

    cy.wait("@getState");

    cy.fixture("app-state--simple-layout").then((state: LightingState) => {
      const layout = state.vars._layout as Layout[];

      layout.forEach(item => {
        cy.contains(item.name.toUpperCase()).should("be.visible");
      });
    });
  });
});
