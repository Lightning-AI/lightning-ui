import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { wsEndpoint } from "../utils/api";
import { queryKey } from "./useLightningState";

export default function useLightningWs(): void {
  const queryClient = useQueryClient();

  useEffect(() => {
    const websocket = new WebSocket(wsEndpoint);

    websocket.onmessage = () => {
      queryClient.invalidateQueries(queryKey);
    };

    return () => websocket.close();
  }, [queryClient]);
}
