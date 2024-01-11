import { render } from 'test-utils';
import { App, ErrorPage } from '@app';
import React from 'react';
import { AppWithError } from '@test/mocks/app/AppWithError';

describe('Default App Test', () => {
    jest.useFakeTimers();
    it('should renders the App', function () {
        render(<App />);
    });
    it('should test a react-native-reanimated animation', function () {
        const { getByTestId } = render(<App />);
        const animatedElement = getByTestId('animated-element');
        expect(animatedElement.props.style.width.value).toBe(100);
        jest.runAllTimers();
        expect(animatedElement.props.style.width.value).toBe(150);
    });
    it('should render a error screen, by react-native-error-boundary, when a error is throwed somewhere in the app', function () {
        const { getByText } = render(<AppWithError />);
        const errorMessage = getByText(/There's an error/i);
        expect(errorMessage).toBeDefined();
    });
});
