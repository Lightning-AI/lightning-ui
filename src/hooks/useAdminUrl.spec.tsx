import { mountHook } from "@cypress/react";

import { location } from "utils/api";

import useAdminUrl from "./useAdminUrl";

describe("useAdminUrl", () => {
  it("returns correct URL when app is running on `localhost`", () => {
    cy.stub(location, "getLocation").as("getLocation").returns({
      origin: "http://localhost:7501",
      hostname: "localhost",
      protocol: "http:",
    });

    mountHook(() => useAdminUrl()).then(result => {
      cy.get("@getLocation").should("have.been.called");

      expect(result.current).to.equal("http://localhost:7501/admin");
    });
  });

  it("returns correct URL when app is running on `127.0.0.1`", () => {
    cy.stub(location, "getLocation").as("getLocation").returns({
      origin: "http://127.0.0.1:7501",
      hostname: "127.0.0.1",
      protocol: "http:",
    });

    mountHook(() => useAdminUrl()).then(result => {
      expect(result.current).to.equal("http://127.0.0.1:7501/admin");
    });
  });

  it("returns correct URL when app is running hosted", () => {
    const appId = "abcd1234";

    cy.stub(location, "getLocation")
      .as("getLocation")
      .returns({
        origin: `https://${appId}.lightning-apps.ai`,
        hostname: `${appId}.lightning-apps.ai`,
        protocol: "https:",
      });

    mountHook(() => useAdminUrl()).then(result => {
      expect(result.current).to.equal(`https://lightning.ai/me/app/${appId}`);
    });
  });
});
