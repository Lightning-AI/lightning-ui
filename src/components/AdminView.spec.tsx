import React from "react";

import mount from "tests/utils/testMount";
import { stateEndpoint } from "tests/utils/lightning";
import AdminView from "./AdminView";

describe("AdminView", () => {

  it("fetches app state from API on mount", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--no-layout.json" },
    ).as("getState");

    mount(<AdminView />);

    cy.wait("@getState");
  });

  it("displays error message if it fails to fetch app state", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { statusCode: 500 },
    ).as("getState");

    mount(<AdminView />);

    cy.wait("@getState");

    cy.contains("Error loading app details...").should("be.visible");
  });

  it("it displays message if the app is not currently running", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
       { fixture: "app-state--no-layout.json" },
    ).as("getState");

    mount(<AdminView />);

    cy.wait("@getState");

    cy.contains("Paused Locally").should("be.visible");
  });

  xit("it displays message if the app is currently running", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
       { fixture: "app-state--no-layout.json" },
    ).as("getState");

    mount(<AdminView />);

    cy.wait("@getState");

    cy.contains("Running Locally").should("be.visible");
  });
});
