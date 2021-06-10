import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { CustomButton } from "../../components";
import { onboarding1 } from "../../constants/images";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ ...FONTS.body1 }}>CodeRef</Text>
        <Text
          style={{
            textAlign: "justify",
            ...FONTS.body4,
            paddingTop: 10,
            color: COLORS.gray,
          }}
        >
          lorem ipsuem and othet stuff goes here this si understanding line
        </Text>
      </View>
      <View style={styles.image}>
        <Image style={styles.logo} source={onboarding1} resizeMode="cover" />
      </View>
      <View style={styles.buttons}>
        <View>
          <CustomButton
            onPress={() => navigation.navigate("signup")}
            title="Signup"
            background={COLORS.primary}
            color="white"
            rounded={5}
            bold={true}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <CustomButton
            onPress={() => navigation.navigate("login")}
            title="Login"
            background={COLORS.secondary}
            color={COLORS.primaryDark}
            rounded={5}
            bold={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.width / 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "15%",
  },
  heading: { flex: 2 },
  logo: {
    display: "flex",
    borderRadius: SIZES.width + SIZES.height / 2,
    width: SIZES.width * 0.7,
    height: SIZES.width * 0.7,
  },
  image: { flex: 3, justifyContent: "flex-end" },
  buttons: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "100%",
  },
});
