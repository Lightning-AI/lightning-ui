import React from "react";
import { mount } from "@cypress/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";

let client: QueryClient;

// Method used in the tests to mock client created when mounting the component
export const getClientReference = () => client;

export default function testMount(element: JSX.Element) {
  // Store created instance in external client var so it can be mocked in the test
  client = new QueryClient({
    defaultOptions: {
      queries: {
        // Retries cause weird behavior in tests
        retry: false,
      },
    },
  });
  return mount(
    <QueryClientProvider client={client}>
      <BrowserRouter>{element}</BrowserRouter>
    </QueryClientProvider>,
  );
}
