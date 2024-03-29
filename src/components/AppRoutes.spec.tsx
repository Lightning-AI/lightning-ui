import React from "react";

import { Link } from "react-router-dom";

import { Layout, LightningState } from "types/lightning";

import { stateEndpoint } from "tests/utils/lightning";
import mount from "tests/utils/testMount";

import AppRoutesComponent from "./AppRoutes";

// Need to add `<Link>` elements to the component in order to test:
// https://github.com/cypress-io/cypress/blob/develop/npm/react/cypress/component/advanced/react-router-v6/app.jsx
const AppRoutes = () => (
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to={`/view/${encodeURIComponent("My Dashboard")}`}>My Dashboard</Link>
      <Link to={`/view/${encodeURIComponent("Tab_2")}`}>Tab_2</Link>
      <Link to={`/view/${encodeURIComponent("Logs & Metrics")}`}>{"Logs & Metrics"}</Link>
      <Link to="/does-not-exist">Link Which Does Not Exist</Link>
    </nav>
    <AppRoutesComponent />
  </>
);

describe("AppRoutes", () => {
  it("fetches Lightning app state from API on mount", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--no-layout" }).as("getState");

    mount(<AppRoutes />);

    cy.wait("@getState");
  });

  it("displays 404 view for nonexistent routes", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--running--simple-layout" }).as("getState");

    mount(<AppRoutes />);

    cy.wait("@getState");
    cy.contains("Link Which Does Not Exist").click();

    cy.location("pathname").should("equal", "/does-not-exist");
    cy.contains("Not found").should("be.visible");
  });

  it("creates a <Route> for each entry in the app state layout", () => {
    cy.intercept("GET", stateEndpoint, { fixture: "app-state--running--simple-layout" }).as("getState");

    mount(<AppRoutes />);

    cy.wait("@getState");

    cy.fixture("app-state--running--simple-layout").then((state: LightningState) => {
      const layout = state.vars._layout as Layout[];

      layout.forEach(item => {
        cy.contains(item.name).click();

        cy.location("pathname").should("equal", `/view/${encodeURIComponent(item.name)}`);
        cy.contains("Not found").should("not.exist");
        cy.get("iframe").should("be.visible");
      });
    });
  });

  describe("running locally", () => {
    beforeEach(() => {
      cy.intercept("GET", stateEndpoint, { fixture: "app-state--running--simple-layout" }).as("getState");
    });

    it("redirects root path `/` to `/view`", () => {
      mount(<AppRoutes />);

      cy.wait("@getState");
      cy.contains("Home").click();

      cy.location("pathname").should("equal", `/view/${encodeURIComponent("My Dashboard")}`);
    });
  });

  describe("running in the cloud", () => {
    beforeEach(() => {
      cy.intercept("GET", stateEndpoint, { fixture: "app-state--running--simple-layout" }).as("getState");
    });

    it("redirects root path `/` to `/view`", () => {
      mount(<AppRoutes />);

      cy.wait("@getState");
      cy.contains("Home").click();

      cy.location("pathname").should("contain", "/view");
    });
  });
});
