import React from "react";

import mount from "tests/utils/testMount";
import { specEndpoint } from "tests/utils/lightning";
import Components from "./Components";
import { LightningSpec } from "types/lightning";

describe("Components", () => {
  describe("an app without any components", () => {
    beforeEach(() => {
      cy.intercept(
        "GET",
        specEndpoint,
        { body: [] }
      ).as("getLightingSpec");
    });

    it("displays empty message", () => {
      mount(<Components />);

      cy.wait("@getLightingSpec");

      cy.contains("No components defined").should("be.visible");
    });
  });

  describe("an app with components", () => {
    beforeEach(() => {
      cy.intercept(
        "GET",
        specEndpoint,
        { fixture: "app-spec--simple-layout.json" }
      ).as("getLightingSpec");
    });

    it("displays list of all defined components", () => {
      mount(<Components />);

      cy.wait("@getLightingSpec");

      cy.fixture("app-spec--simple-layout.json").then((spec: LightningSpec) => {
        spec.forEach(component => {
          cy.contains(component.cls_name).should("be.visible");
        });
      });
    });
  });
});
