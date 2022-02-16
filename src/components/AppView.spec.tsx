import React from "react";
import { stateEndpoint } from "tests/utils/lightning";

import mount from "tests/utils/testMount";
import AppView from "./AppView";

describe("AppView", () => {
  it("renders message if app is not running", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--simple-layout" }).as("getState");

    mount(<AppView />);

    cy.wait("@getState");

    cy.contains("App is not running").should("be.visible");
    cy.contains("Go to admin").click();
    cy.location("pathname").should("equal", "/admin");
  });

  it("renders app view if app is running", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--running--no-layout" }).as("getState");

    mount(<AppView />);

    cy.wait("@getState");

    cy.contains("App is not running").should("not.exist");
  });
});
