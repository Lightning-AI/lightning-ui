import React from "react";

import mount from "tests/utils/testMount";
import AdminMenu from "./AdminMenu";
import { AppStage, ExternalAppState } from "openapi/client";
import lightningService from "openapi/singleton";

describe("AdminMenu", () => {
  describe("app is blocking", () => {
    beforeEach(() => {
      cy.fixture("app-state--no-layout.json").then((state: ExternalAppState) => {
        cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
        cy.stub(lightningService, "postStateApiV1StatePost")
          .as("postStateApiV1StatePost")
          .callsFake(body => {
            expect(body).to.deep.equal({ stage: AppStage.RUNNING });
          });
      });
    });

    it("the 'Run' button is enabled", () => {
      mount(<AdminMenu />);

      cy.get("@getStateApiV1StateGet").should("have.been.called");

      cy.contains("Run").should("be.enabled");
    });

    it("clicking the 'Run' button sends an API request to start the app", () => {
      mount(<AdminMenu />);

      cy.get("@getStateApiV1StateGet").should("have.been.called");
      cy.contains("Run").click();

      cy.get("@postStateApiV1StatePost").should("have.been.called");
    });
  });

  describe("app is running", () => {
    beforeEach(() => {
      cy.fixture("app-state--running--no-layout.json").then((state: ExternalAppState) => {
        cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
        cy.stub(lightningService, "postStateApiV1StatePost")
          .as("postStateApiV1StatePost")
          .callsFake(body => {
            expect(body).to.deep.equal({ stage: AppStage.RESTARTING });
          });
      });
    });

    it("the 'Stop' button is enabled", () => {
      mount(<AdminMenu />);

      cy.get("@getStateApiV1StateGet").should("have.been.called");
      cy.contains("Stop").should("be.enabled");
    });

    it("clicking the 'Stop' button sends an API request to stop the app", () => {
      mount(<AdminMenu />);

      cy.get("@getStateApiV1StateGet").should("have.been.called");
      cy.contains("Stop").click();

      cy.get("@postStateApiV1StatePost").should("have.been.called");
    });
  });
});
