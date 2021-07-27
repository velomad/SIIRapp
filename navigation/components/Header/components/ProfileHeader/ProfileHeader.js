import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../../constants";
import gs from "../globalHeaderStyles";
import { AntDesign } from "@expo/vector-icons";
import useAuth from "../../../../../auth/useAuth";

const ProfileHeader = ({ title }) => {
  const auth = useAuth();
  const logout = () => {
    auth.logOut();
  };

  return (
    <View style={[gs.container]}>
      <View style={styles.container}>
        <Text style={[gs.titleTextLeft]}>{title}</Text>

        <TouchableOpacity onPress={logout}>
          <AntDesign
            name="logout"
            size={SIZES.width / 20}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
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
