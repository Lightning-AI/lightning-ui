import React from "react";

import mount from "tests/utils/testMount";
import { specEndpoint } from "tests/utils/lightning";
import Components from "./Components";
import { LightningSpec } from "types/lightning";

describe("Components", () => {
  describe("an app without any components", () => {
    beforeEach(() => {
      cy.intercept("GET", specEndpoint, { body: [] }).as("getLightingSpec");
    });

    it("displays empty message", () => {
      mount(<Components />);

      cy.wait("@getLightingSpec");

      cy.contains("No components defined").should("be.visible");
    });
  });

  describe("an app with components", () => {
    beforeEach(() => {
      cy.intercept("GET", specEndpoint, { fixture: "app-spec--simple-layout.json" }).as("getLightingSpec");
    });

    it("displays list of all defined components within one level deep or less", () => {
      mount(<Components />);

      cy.wait("@getLightingSpec");

      cy.fixture("app-spec--simple-layout.json").then((spec: LightningSpec) => {
        const oneLevelDeepComponents = spec.filter(component => component.affiliation.length <= 2);
        oneLevelDeepComponents.forEach(component => {
          cy.contains(component.cls_name).should("be.visible");
        });
      });
    });

    it("doesn't displays list of all defined components within two level deep or more", () => {
      mount(<Components />);

      cy.wait("@getLightingSpec");

      cy.fixture("app-spec--simple-layout.json").then((spec: LightningSpec) => {
        const twoLevelDeepComponents = spec.filter(component => component.affiliation.length > 2);
        twoLevelDeepComponents.forEach(component => {
          cy.get("code").should('not.have.text', component.cls_name);
        });
      });
    });
  });
});
