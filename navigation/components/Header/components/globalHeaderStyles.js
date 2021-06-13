import { StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS } from "../../../../constants";

export default StyleSheet.create({
  container: {
    elevation: 0,
    paddingHorizontal: SIZES.width / 30,
    height: SIZES.height / 15,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  titleTextLeft: {
    ...FONTS.body3,
    color: COLORS.gray,
  },
  titleTextCenter: {
    ...FONTS.body3,
    textAlign: "center",
    color: COLORS.gray,
  },
});
