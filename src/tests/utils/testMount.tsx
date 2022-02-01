import React from "react";
import { mount } from "@cypress/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";

export default function testMount(element: JSX.Element) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        // Retries cause weird behavior in tests
        retry: false
      }
    }
  });

  return mount(
    <QueryClientProvider client={client}>
      <BrowserRouter>
        {element}
      </BrowserRouter>
    </QueryClientProvider>
  )
}
