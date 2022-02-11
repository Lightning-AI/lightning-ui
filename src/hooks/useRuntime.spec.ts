import { mountHook } from "@cypress/react";

import { location } from "utils/api";
import useRuntime, { Runtime } from "./useRuntime";

describe("useRuntime", () => {
  it("returns `cloud` when running in a hosted environment", () => {
    const appId = "abcd1234";

    cy.stub(location, "getLocation")
      .as("getLocation")
      .returns({
        origin: `https://${appId}.lightning-apps.ai`,
        hostname: `${appId}.lightning-apps.ai`,
        protocol: "https:",
      });

    mountHook(() => useRuntime()).then(result => {
      expect(result.current).to.equal(Runtime.cloud);
    });
  });

  it("returns `local` when running in a local environment", () => {
    ["localhost:7501", "127.0.0.1:7501"].forEach(hostname => {
      cy.stub(location, "getLocation").as("getLocation").returns({
        origin: "http://localhost:7501",
        hostname: "localhost",
        protocol: "http:",
      });

      mountHook(() => useRuntime()).then(result => {
        cy.get("@getLocation").should("have.been.called");

        expect(result.current).to.equal(Runtime.local);
      });
    });
  });
});
