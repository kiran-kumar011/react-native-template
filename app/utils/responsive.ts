// utils/responsive.ts
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

enum SCREEN {
  WIDTH = 'width',
  HEIGHT = 'height',
}

// **Reference Dimensions (Industry Standard - iPhone 11/12/13)**
const BASE_WIDTH = 375; // Standard design width
const BASE_HEIGHT = 812; // Standard design height

/**
 * Scales a given size proportionally based on screen width or height
 * @param size - The original design size
 * @param basedOn - "width" | "height" (default: "width")
 */
const scaleSize = (
  size: number,
  basedOn: SCREEN.WIDTH | SCREEN.HEIGHT = SCREEN.WIDTH,
) => {
  const baseSize = basedOn === SCREEN.WIDTH ? BASE_WIDTH : BASE_HEIGHT;
  const scale =
    basedOn === SCREEN.WIDTH
      ? SCREEN_WIDTH / baseSize
      : SCREEN_HEIGHT / baseSize;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

/**
 * Scales font size based on screen width (for better readability)
 * @param size - The original font size in the design
 */
const scaleFont = (size: number) => scaleSize(size, SCREEN.WIDTH);

/**
 * Exported functions for width, height, and font scaling
 */
export const widthScale = (size: number) => scaleSize(size, SCREEN.WIDTH);
export const heightScale = (size: number) => scaleSize(size, SCREEN.HEIGHT);
export const fontScale = (size: number) => scaleFont(size);

// Export screen dimensions for further use
export const DIMENSIONS = { width: SCREEN_WIDTH, height: SCREEN_HEIGHT };
