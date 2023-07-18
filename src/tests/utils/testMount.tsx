import React from "react";
import { useEffect, useState } from "react";

import { mount } from "@cypress/react";
import addons from "@storybook/addons";
import ThemeProvider from "design-system/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

let client: QueryClient;

// Method used in the tests to mock client created when mounting the component
export const getClientReference = () => client;

export default function testMount(element: JSX.Element) {
  const channel = addons.getChannel();
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [setDark]);
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
    <ThemeProvider colorScheme={isDark ? "dark" : "light"}>
      <QueryClientProvider client={client}>
        <BrowserRouter>{element}</BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>,
  );
}
