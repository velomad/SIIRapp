import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../../constants";
import gs from "../globalHeaderStyles";
import { Ionicons } from "@expo/vector-icons";

const CollectionHeader = ({ title, navigation }) => {
  return (
    <View style={[gs.container]}>
      <View style={styles.container}>
        <Text style={[gs.titleTextLeft]}>{title}</Text>
      </View>
    </View>
  );
};

export default CollectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
