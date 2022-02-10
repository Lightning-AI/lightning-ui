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

      cy.contains("Run").should("be.enabled");
    });

    it("clicking the 'Run' button sends an API request to start the app", () => {
      mount(<AdminMenu />);

      cy.wait("@getState");
      cy.contains("Run").click();

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

    it("the 'Stop' button is enabled", () => {
      mount(<AdminMenu />);

      cy.wait("@getState");
      cy.contains("Stop").should("be.enabled");
    });

    it("clicking the 'Stop' button sends an API request to stop the app", () => {
      mount(<AdminMenu />);

      cy.wait("@getState");
      cy.contains("Stop").click();

      cy.wait("@postState");
    });
  });
});
