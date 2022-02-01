import React from "react";
import { Link } from "react-router-dom";

import mount from "tests/utils/testMount";
import { stateEndpoint } from "tests/utils/lightning";
import { Layout, LightingState } from "types/lightning";
import AppRoutesComponent from "./AppRoutes";

// Need to add `<Link>` elements to the component in order to test:
// https://github.com/cypress-io/cypress/blob/develop/npm/react/cypress/component/advanced/react-router-v6/app.jsx
const AppRoutes = () => (
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/view/one">one</Link>
      <Link to="/view/two">two</Link>
      <Link to="/view/three">three</Link>
      <Link to="/does-not-exist">Link Which Does Not Exist</Link>
      <Link to="/admin">Admin</Link>
    </nav>
    <AppRoutesComponent />
  </>
)

describe("AppRoutes", () => {
  it("fetches Lightning app state from API on mount", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--no-layout" }
    ).as("getState");

    mount(<AppRoutes />);

    cy.wait("@getState");
  });

  xit("displays loading screen while app state is being fetched", () => {
    // TODO(alecmerdler)
  });

  it("displays 404 view for nonexistent routes", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--simple-layout" }
    ).as("getState");

    mount(<AppRoutes />);

    cy.wait("@getState");
    cy.contains("Link Which Does Not Exist").click();
  
    cy.location("pathname").should("equal", "/does-not-exist");
    cy.contains("Not found").should("be.visible");
  });

  it("creates a <Route> for each entry in the app state layout", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--simple-layout" }
    ).as("getState");

    mount(<AppRoutes />);

    cy.wait("@getState");

    cy.fixture("app-state--simple-layout").then((state: LightingState) => {
      const layout = state.vars._layout as Layout[];

      layout.forEach(item => {
        cy.contains(item.name).click();

        cy.location("pathname").should("equal", `/view/${item.name}`);
        cy.contains("Not found").should("not.exist");
        cy.get("iframe").should("be.visible");
      });
    });
  });

  it("creates a <Route> for the local admin view", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--simple-layout" }
    ).as("getState");

    mount(<AppRoutes />);

    cy.wait("@getState");
    cy.contains("Admin").click();

    cy.location("pathname").should("equal", "/admin");
    cy.contains("Not found").should("not.exist");
    cy.contains("Local App").should("be.visible");
  });
});
