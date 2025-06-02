export enum BarStyle {
  DEFAULT = 'default',
  LIGHT = 'light-content',
  DARK = 'dark-content',
}

export enum BarAnimation {
  FADE = 'fade',
  SLIDE = 'slide',
  NONE = 'none',
}

export enum PlatformOS {
  ANDROID = 'android',
  IOS = 'ios',
}

export interface UseStatusBarProps {
  barStyle?: BarStyle;
  backgroundColor?: string;
  hidden?: boolean;
  animated?: boolean;
  animationType?: BarAnimation;
  translucent?: boolean;
}
