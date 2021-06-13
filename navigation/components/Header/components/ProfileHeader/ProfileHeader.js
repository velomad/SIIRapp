import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../../constants";
import gs from "../globalHeaderStyles";
import { AntDesign } from "@expo/vector-icons";

const ProfileHeader = ({ title, onPress }) => {
  return (
    <View style={[gs.container]}>
      <View style={styles.container}>
        <Text style={[gs.titleTextLeft]}>{title}</Text>

        <TouchableHighlight onPress={onPress}>
          <AntDesign
            name="logout"
            size={SIZES.width / 20}
            color={COLORS.secondary}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
