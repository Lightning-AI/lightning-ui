import React from "react";
import { Link } from "react-router-dom";

import mount from "tests/utils/testMount";
import { Layout } from "types/lightning";
import AppRoutesComponent from "./AppRoutes";
import { ExternalAppState } from "openapi/client";
import lightningService from "openapi/singleton";

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
      <Link to="/admin">Admin</Link>
    </nav>
    <AppRoutesComponent />
  </>
);

describe("AppRoutes", () => {
  it("fetches Lightning app state from API on mount", () => {
    cy.fixture("app-state--no-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AppRoutes />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");
  });

  xit("displays loading screen while app state is being fetched", () => {
    // TODO(alecmerdler)
  });

  it("displays 404 view for nonexistent routes", () => {
    cy.fixture("app-state--running--simple-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AppRoutes />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");
    cy.contains("Link Which Does Not Exist").click();

    cy.location("pathname").should("equal", "/does-not-exist");
    cy.contains("Not found").should("be.visible");
  });

  it("creates a <Route> for each entry in the app state layout", () => {
    cy.fixture("app-state--running--simple-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AppRoutes />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");

    cy.fixture("app-state--running--simple-layout").then((state: ExternalAppState) => {
      const layout = state.vars._layout as Layout[];

      layout.forEach(item => {
        cy.contains(item.name).click();

        cy.location("pathname").should("equal", `/view/${encodeURIComponent(item.name)}`);
        cy.contains("Not found").should("not.exist");
        cy.get("iframe").should("be.visible");
      });
    });
  });

  it("creates a <Route> for the local admin view", () => {
    cy.fixture("app-state--running--simple-layout.json").then((state: ExternalAppState) => {
      cy.stub(lightningService, "getStateApiV1StateGet").as("getStateApiV1StateGet").resolves(state);
    });

    mount(<AppRoutes />);

    cy.get("@getStateApiV1StateGet").should("have.been.called");
    cy.contains("Admin").click();

    cy.location("pathname").should("equal", "/admin");
    cy.contains("Not found").should("not.exist");
    cy.contains("Local App").should("be.visible");
  });
});
