import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";
import {
  CategoriesHeader,
  CollectionHeader,
  HomeHeader,
  ProfileHeader,
} from "./components";

const Header = ({ title, navigation }) => {
  console.log(title);
  return (
    <View>
      {title === undefined || title === "SIIR" ? (
        <HomeHeader title={title} navigation={navigation} />
      ) : title === "Categories" ? (
        <CategoriesHeader title={title} />
      ) : title === "Collections" ? (
        <CollectionHeader title={title} />
      ) : title === "Profile" ? (
        <ProfileHeader title={title} />
      ) : null}
    </View>
  );
};

export default Header;
