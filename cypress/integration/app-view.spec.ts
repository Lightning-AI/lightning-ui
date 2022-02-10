const stateEndpoint = "http://localhost:7501/api/v1/state";

describe("Lightning App View", () => {
  describe("app with no UI components", () => {
    beforeEach(() => {
      cy.intercept("GET", stateEndpoint, { fixture: "lightning/app-state-no-routes.json" }).as("getLightningState");
    });

    it("fetches the app state on load", () => {
      cy.visit("/");

      cy.wait("@getLightningState");
    });

    it("does not render any tabs", () => {
      cy.visit("/");

      cy.wait("@getLightningState");
      cy.contains("Default view").should("be.visible");
    });
  });

  describe("app with UI components", () => {
    beforeEach(() => {
      cy.intercept("GET", stateEndpoint, { fixture: "lightning/app-state-with-routes.json" }).as("getLightningState");
    });
  });
});
