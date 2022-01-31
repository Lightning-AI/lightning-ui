import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import mount from "tests/utils/testMount";
import { Layout, LayoutLeaf, LightingState } from "types/lightning";
import AppRoutesComponent from "./AppRoutes";

// Need to add `<Link>` elements to the component in order to test:
// https://github.com/cypress-io/cypress/blob/develop/npm/react/cypress/component/advanced/react-router-v6/app.jsx
const AppRoutes = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/one">one</Link>
      <Link to="/two">two</Link>
      <Link to="/three">three</Link>
      <Link to="/does-not-exist">Link Which Does Not Exist</Link>
    </nav>
    <AppRoutesComponent />
  </Router>
)

describe("AppRoutes", () => {
  const stateEndpoint = "/state";

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

  it("creates a <Route> for each non-external link entry in the app state layout", () => {
    cy.intercept(
      "GET",
      stateEndpoint,
      { fixture: "app-state--simple-layout" }
    ).as("getState");

    mount(<AppRoutes />);

    cy.wait("@getState");

    cy.fixture("app-state--simple-layout").then((state: LightingState) => {
      const layout = state.vars._layout as Layout[];
      const internalRoutes = layout.filter(r => (r as LayoutLeaf).target === undefined);
      
      internalRoutes.forEach(item => {
        cy.contains(item.name).click();

        cy.location("pathname").should("equal", `/${item.name}`);
        cy.contains("Not found").should("not.exist");
        cy.get("iframe").should("be.visible");
      });
    });
  });
});
