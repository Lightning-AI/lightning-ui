import { unmount } from "@cypress/react";

import { wsEndpoint } from "utils/api";
import mount, { getClientReference } from "tests/utils/testMount";
import useLightningWs from "./useLightningWs";
import { queryKey } from "./useLightningState";

let constructorMock: Function;
let wsInstance: any;
let closeMock: Function;

class WebSocketMock {
  constructor(url: string) {
    constructorMock(url);
    wsInstance = this;
  }

  close = closeMock;
}

function MockComponent() {
  useLightningWs();
  window.WebSocket = WebSocketMock as any;

  return null;
}

describe("useLightningWs", () => {
  beforeEach(() => {
    constructorMock = cy.stub().as("constructor");
    closeMock = cy.stub().as("close");
  });

  it("calls websocket constructor with ws endpoint url", () => {
    mount(<MockComponent />);

    cy.get("@constructor").should("have.been.calledOnceWith", wsEndpoint);
  });

  it("calls invalidateQueries with status key when ws receives a message", () => {
    mount(<MockComponent />).then(() => {
      const client = getClientReference();
      cy.stub(client, "invalidateQueries").as("client");
      wsInstance.onmessage();

      cy.get("@client").should("have.been.calledOnceWith", queryKey);
    });
  });

  it("calls close method when unmount", () => {
    mount(<MockComponent />);
    unmount();

    cy.get("@close").should("have.been.calledOnce");
  });
});
