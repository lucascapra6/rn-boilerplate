import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { FallbackProps } from 'react-error-boundary';
import { SafeAreaView } from 'react-native-safe-area-context';

export const DefaultErrorScreen = ({resetErrorBoundary, error,}: FallbackProps) => {
    console.log('error:', error.message);
    return (
        <SafeAreaView style={errorStyle.container}>
            <Text>Error</Text>
            <Text>Implement your default error here!</Text>
            <TouchableOpacity onPress={() => resetErrorBoundary()}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const errorStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        fontWeight: 'bold',
    },
});
