import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@theme';
import {ReactNativeReanimated} from "@components/ReactNativeReanimated";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ReactNativeReanimated/>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
