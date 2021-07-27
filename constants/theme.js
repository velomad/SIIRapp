import { Dimensions, PixelRatio, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  black: "#1E1F20",
  white: "#FFFFFF",
  whiteDark: "#f1f1f1",
  lightGray: "#999",
  gray: "#6A6A6A",
  primary: "#3773e1",
  primaryLight: "#dbeafe",
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
  body5: 12,
  body6: 10,

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
  h1: { fontSize: actuatedNormalize(SIZES.h1) },
  h2: { fontSize: actuatedNormalize(SIZES.h2) },
  h3: { fontSize: actuatedNormalize(SIZES.h3) },
  h4: { fontSize: actuatedNormalize(SIZES.h4) },
  h5: { fontSize: actuatedNormalize(SIZES.h5) },
  h6: { fontSize: actuatedNormalize(SIZES.h6) },
  body1: {
    fontSize: actuatedNormalize(SIZES.body1),
  },
  body2: {
    fontSize: actuatedNormalize(SIZES.body2),
  },
  body3: {
    fontSize: actuatedNormalize(SIZES.body3),
  },
  body4: {
    fontSize: actuatedNormalize(SIZES.body4),
  },
  body5: {
    fontSize: actuatedNormalize(SIZES.body5),
  },
  body6: {
    fontSize: actuatedNormalize(SIZES.body6),
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
