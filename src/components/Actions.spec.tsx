import React from "react";

import mount from "tests/utils/testMount";
import Actions from "./Actions";

describe("Actions", () => {
  beforeEach(() => {
    mount(<Actions />);
  });

  it("displays a message about where the app is running", () => {
    cy.contains("Running Locally").should("be.visible");
  });

  it("displays a button to open the admin view", () => {
    cy.contains("Admin").should("be.visible");
    cy.contains("Admin").should("be.disabled");
  });

  it("displays a share button", () => {
    cy.contains("Share").should("be.visible");
    cy.contains("Share").should("be.disabled");
  });
});
