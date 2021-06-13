import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS } from "../../constants";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
        No New Notifications
      </Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
