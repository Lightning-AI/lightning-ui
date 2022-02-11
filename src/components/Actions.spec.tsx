import React from "react";

import mount from "tests/utils/testMount";
import { location } from "utils/api";
import Actions from "./Actions";

describe("Actions", () => {
  it("displays correct message when app is running locally", () => {
    mount(<Actions />);

    cy.contains("Running Locally").should("be.visible");
  });

  it("displays correct message when app is running on cloud", () => {
    const appId = "abcd1234";

    cy.stub(location, "getLocation")
      .as("getLocation")
      .returns({
        origin: `https://${appId}.lightning-apps.ai`,
        hostname: `${appId}.lightning-apps.ai`,
        protocol: "https:",
      });

    mount(<Actions />);

    cy.contains("Running on Cloud").should("be.visible");
  });

  it("displays a share button", () => {
    mount(<Actions />);

    cy.contains("Share").should("be.visible");
    cy.contains("Share").should("be.disabled");
  });

  it("displays a button to open the admin view", () => {
    mount(<Actions />);

    cy.stub(window, "open").as("window.open");

    cy.contains("Admin").should("be.visible");
    cy.contains("Admin").click();

    cy.get("@window.open").should("be.calledWith", `${window.location.origin}/admin`, "_blank");
  });
});
