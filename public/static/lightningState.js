(function(){
    const getMessageHandler = (componentHandler) => {
        return (message) => {
            if (message.origin === window.location.ancestorOrigins[0])
                componentHandler(message.data);
        };
    };
    let stateHandler = null;
    const removeStateHandler = () => window.removeEventListener("message", stateHandler);
    class LightningState {
        static subscribe(componentHandler) {
            removeStateHandler();
            stateHandler = getMessageHandler(componentHandler);
            window.addEventListener("message", stateHandler);
            return removeStateHandler;
        }
    }
    window.LightningState = LightningState;
})();