import { Dimensions, PixelRatio, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  black: "#1E1F20",
  white: "#FFFFFF",
  gray: "#6A6A6A",
  primary: "#3773e1",
  secondary: "#fa5793",
  danger: "red",
  success: "green",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

const scale = width / 320;

function actuatedNormalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const FONTS = {
  h1: { fontFamily: "Roboto-Regular", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Regular", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Regular", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Regular", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body1),
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body2),
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body3),
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body4),
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
