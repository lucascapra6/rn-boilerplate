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
});
