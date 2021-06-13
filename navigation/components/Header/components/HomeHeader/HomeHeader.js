import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../../constants";
import gs from "../globalHeaderStyles";
import { Ionicons } from "@expo/vector-icons";

const HomeHeader = ({ title, navigation }) => {
  return (
    <View style={[gs.container]}>
      <View style={styles.container}>
        <Text style={[gs.titleTextCenter, { fontSize: SIZES.h2 }]}>
          {title === undefined ? "SIIR" : title}
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("notifications")}
        >
          <View style={styles.notificationIconContainer}>
            <Ionicons
              name="ios-notifications"
              size={SIZES.width / 20}
              color={COLORS.primary}
            />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationNumber}>3</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationIconContainer: {
    paddingRight: SIZES.width / 35,
  },
  notificationBadge: {
    position: "absolute",
    right: 0,
    top: -10,
    backgroundColor: COLORS.secondary,
    borderRadius: 36,
    height: 20,
    width: 20,
  },
  notificationNumber: {
    ...FONTS.body6,
    color: COLORS.white,
    textAlign: "center",
  },
});
