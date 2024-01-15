import React from 'react';

import { ReactNativeReanimated } from '@components/ReactNativeReanimated';
import { DefaultErrorScreen } from '@screens/Error';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@theme';

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <ThemeProvider theme={theme}>
                    <ErrorBoundary FallbackComponent={DefaultErrorScreen}>
                        <SafeAreaView>
                            <ReactNativeReanimated />
                        </SafeAreaView>
                    </ErrorBoundary>
                </ThemeProvider>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
};
