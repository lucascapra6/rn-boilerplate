import React, { useEffect } from 'react';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Text } from 'react-native';

export function ReactNativeReanimated(): JSX.Element {
  const width = useSharedValue(100);
  useEffect(() => {
    setTimeout(() => {
      width.value = withSpring(width.value + 50);
    }, 2000);
  }, []);
  return (
    <>
      <Text>React Native Reanimated</Text>
      <Animated.View
        testID="animated-element"
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
    </>
  );
}
