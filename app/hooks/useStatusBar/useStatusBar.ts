// useStatusBar.js
import { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { BarStyle, BarAnimation, PlatformOS, UseStatusBarProps } from './types';

export const useStatusBar = ({
  barStyle = BarStyle.DEFAULT,
  backgroundColor = 'transparent',
  hidden = false,
  animated = true,
  animationType = BarAnimation.NONE,
  translucent = false,
}: UseStatusBarProps) => {
  useEffect(() => {
    const { setBarStyle, setBackgroundColor, setHidden, setTranslucent } =
      StatusBar;
    // Apply the custom styles
    setBarStyle(barStyle, animated);

    if (Platform.OS === PlatformOS.ANDROID) {
      setTranslucent(translucent);
      setBackgroundColor(backgroundColor, animated);
    }
    setHidden(hidden, animationType);
    // Cleanup: reset to default when the component unmounts
    return () => {
      setBarStyle(BarStyle.DEFAULT, animated);
      if (Platform.OS === PlatformOS.ANDROID) {
        setBackgroundColor(backgroundColor, animated); // Default bg check whether it needs to be hardcoded or not during the implementation
      }
      setHidden(false, animationType);
    };
  }, [barStyle, backgroundColor, hidden, animated, animationType, translucent]);
};
