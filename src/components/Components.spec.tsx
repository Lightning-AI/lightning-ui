import React from "react";

import mount from "tests/utils/testMount";
import Components from "./Components";
import { ExternalComponentSpec } from "openapi/client";
import lightningService from "openapi/singleton";

describe("Components", () => {
  describe("an app without any components", () => {
    beforeEach(() => {
      cy.stub(lightningService, "getSpecApiV1SpecGet").as("getSpecApiV1SpecGet").resolves([]);
    });

    it("displays empty message", () => {
      mount(<Components />);

      cy.get("@getSpecApiV1SpecGet").should("have.been.called");
      cy.contains("No components defined").should("be.visible");
    });
  });

  describe("an app with components", () => {
    beforeEach(() => {
      cy.fixture("app-spec--simple-layout.json").then((spec: ExternalComponentSpec[]) => {
        cy.stub(lightningService, "getSpecApiV1SpecGet").as("getSpecApiV1SpecGet").resolves(spec);
      });
    });

    it("displays list of all defined components", () => {
      mount(<Components />);

      cy.get("@getSpecApiV1SpecGet").should("have.been.called");

      cy.fixture("app-spec--simple-layout.json").then((spec: ExternalComponentSpec[]) => {
        spec.forEach(component => {
          cy.contains(component.cls_name).should("be.visible");
        });
      });
    });
  });
});
