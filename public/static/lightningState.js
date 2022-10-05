(function () {
  const channel = new MessageChannel();
  // We use window.location.origin as we expect the apps belongs to the same origin that the Parent containing the iframe
  window.top.postMessage("Establish communication", window.location.origin, [channel.port2]);

  class LightningState {
    static subscribe(componentHandler) {
      channel.port1.onmessage = message => {
        componentHandler(message.data);
      };

      return () => {
        channel.port1.onmessage = null;
      };
    }

    static next(state) {
      channel.port1.postMessage(state);
    }
  }

  window.LightningState = LightningState;
})();
