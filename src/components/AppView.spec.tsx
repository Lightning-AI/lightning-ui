import React from "react";

import mount from "tests/utils/testMount";
import AppView from "./AppView";
import lightningService from "openapi/singleton";
import { ExternalAppState } from "openapi/client";

describe("AppView", () => {
  it("renders message if app is not running", () => {
    cy.fixture("app-state--simple-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AppView />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");
    cy.contains("App is not running").should("be.visible");

    cy.contains("Go to admin").click();

    cy.location("pathname").should("equal", "/admin");
  });

  it("renders app view if app is running", () => {
    cy.fixture("app-state--running--no-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AppView />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");
    cy.contains("App is not running").should("not.exist");
  });
});
