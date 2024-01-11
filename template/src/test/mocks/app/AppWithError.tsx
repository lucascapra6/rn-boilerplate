import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@theme';
import ErrorBoundary from 'react-native-error-boundary';
import { Text } from 'react-native';

const queryClient = new QueryClient();

export const ErrorPage = () => {
  return (
    <SafeAreaView>
      <Text>Error page</Text>
    </SafeAreaView>
  );
};

export const AppWithError = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <SafeAreaView>
              <ErrorComponent/>
            </SafeAreaView>
          </ErrorBoundary>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

const ErrorComponent = () => {
  // Intentional error for testing the error boundary
  throw new Error('This is a test error');
  // Replace the line above with the code that may cause an error in your component
};
