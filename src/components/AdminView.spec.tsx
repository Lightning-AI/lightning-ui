import React from "react";

import mount from "tests/utils/testMount";
import AdminView from "./AdminView";
import { ExternalAppState } from "openapi/client";
import lightningService from "openapi/singleton";

describe("AdminView", () => {
  it("fetches app state from API on mount", () => {
    cy.fixture("app-state--no-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AdminView />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");
  });

  it("displays error message if it fails to fetch app state", () => {
    cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").rejects(new Error());

    mount(<AdminView />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");

    cy.contains("Error loading app details...").should("be.visible");
  });

  it("it displays message if the app is not currently running", () => {
    cy.fixture("app-state--no-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AdminView />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");

    cy.contains("Paused Locally").should("be.visible");
  });

  it("it displays message if the app is currently running", () => {
    cy.fixture("app-state--running--no-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AdminView />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");

    cy.contains("Running Locally").should("be.visible");
  });
});
