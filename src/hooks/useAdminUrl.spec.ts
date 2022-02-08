import { mountHook } from "@cypress/react";

import useAdminUrl from "./useAdminUrl";

// FIXME(alecmerdler): `cy.stub(window.location, "hostname")` does not work...
xdescribe("useAdminUrl", () => {
  it("returns correct URL when app is running on `localhost`", () => {
    cy.stub(window.location, "origin")
      .as("window.location.origin")
      .returns("http://localhost:7501");
    cy.stub(window.location, "hostname")
      .as("window.location.hostname")
      .returns("localhost:7501");

    mountHook(
      () => useAdminUrl()
    ).then(result => {
      cy.get("@window.location.hostname").should("have.been.called");
      cy.get("@window.location.origin").should("have.been.called");
      expect(result.current).to.equal("http://localhost:7501/admin");
    });

    cy.get("@window.location.hostname").should("have.been.called");
  });

  it("returns correct URL when app is running on `127.0.0.1`", () => {
    cy.stub(window.location, "origin")
      .as("window.location.origin")
      .returns("http://127.0.0.1:7501");
    cy.stub(window.location, "hostname")
      .as("window.location.hostname")
      .returns("127.0.0.1:7501");

    mountHook(
      () => useAdminUrl()
    ).then(result => {
      expect(result.current).to.equal("http://127.0.0.1:7501/admin");
    });
  });

  it("returns correct URL when app is running hosted", () => {
    cy.stub(window.location, "origin")
      .as("window.location.origin")
      .returns("https://abcdefg.lightning-apps.ai");
    cy.stub(window.location, "hostname")
      .as("window.location.hostname")
      .returns("abcdefg.lightning-apps.ai");

    mountHook(
      () => useAdminUrl()
    ).then(result => {
      expect(result.current).to.equal("https://b975913c4b22eca5f0f9e8eff4c4b1c315340a0d.staging.lightning.ai/me/app/abcdefg");
    });
  });
});
