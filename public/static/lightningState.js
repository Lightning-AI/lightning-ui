(function () {
  const channel = new MessageChannel();
  window.top.postMessage("Establish communication", window.location.ancestorOrigins[0], [channel.port2]);
  class LightningState {
    static subscribe(componentHandler) {
      channel.port1.onmessage = message => {
        componentHandler(message.data);
      };
      channel.port1.postMessage("Subscribed");
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
