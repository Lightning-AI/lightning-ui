import React from "react";

import mount from "tests/utils/testMount";
import AppRoutes from "./AppRoutes";

describe("AppRoutes", () => {
  const stateEndpoint = "/state";

  it("fetches Lightning app state from API on mount", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--no-layout" }
    ).as("getState")

    mount(<AppRoutes />);

    cy.wait("@getState");
  });
});
