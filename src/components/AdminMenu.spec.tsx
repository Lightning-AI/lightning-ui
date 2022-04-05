import React from "react";

import mount from "tests/utils/testMount";
import { stateEndpoint } from "tests/utils/lightning";
import AdminMenu from "./AdminMenu";
import { AppStage } from "types/lightning";

describe("AdminMenu", () => {
  describe("app is blocking", () => {
    beforeEach(() => {
      cy.intercept("GET", stateEndpoint, { fixture: "app-state--no-layout.json" }).as("getState");

      cy.intercept("POST", stateEndpoint, req => {
        expect(req.body).to.deep.equal({ stage: AppStage.running });
      }).as("postState");
    });

    it("the 'Run' button is enabled", () => {
      mount(<AdminMenu />);

      cy.wait("@getState");
      cy.wait(1);
      cy.contains("Run").should("be.enabled");
    });

    it("clicking the 'Run' button sends an API request to start the app", () => {
      mount(<AdminMenu />);

      cy.wait("@getState");

      cy.wait(1);

      cy.get("button .MuiButton-startIcon").click();

      cy.wait("@postState");
    });
  });

  describe("app is running", () => {
    beforeEach(() => {
      cy.intercept("GET", stateEndpoint, { fixture: "app-state--running--no-layout.json" }).as("getState");

      cy.intercept("POST", stateEndpoint, req => {
        expect(req.body).to.deep.equal({ stage: AppStage.restarting });
      }).as("postState");
    });

    it("the 'Running Locally' button is enabled", () => {
      mount(<AdminMenu />);

      cy.wait("@getState");
      cy.contains("Running Locally").should("be.enabled");
    });

    it("clicking the 'Running Local' button sends an API request to stop the app", () => {
      mount(<AdminMenu />);

      cy.wait("@getState");
      cy.contains("Running Locally").click();

      cy.wait("@postState");
    });
  });
});
