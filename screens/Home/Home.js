import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Alert,
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import * as Haptics from "expo-haptics";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { ShayriCard } from "../components";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions = {
      headerTitle: (props) => <Text>epic</Text>,
    };
  }, []);

  const categories = [
    "2 Line Shayari",
    "Attitude Shayari",
    "Beauty Shayari",
    "Bewafa Shayari",
    "Birthday Shayari",
    "Dard Shayari",
    "Desh Bhakti Shayari",
    "Dil Shayari",
    "Dosti Shayari",
    "Festival Shayari",
    "Friendship Shayari",
    "Funny Shayari",
    "Good Morning Shayari",
    "Good Night Shayari",
    "Heart Touching Shayari",
    "Hindi Poems Poetry",
    "Hindi Shayari",
    "Life Shayari",
    "Love Shayari",
    "Miss You Shayari",
    "Motivational Shayari",
    "Punjabi Shayari",
    "Rain-Barish Shayari",
    "Romantic Shayari",
    "Sad Shayari",
    "Sharabi Shayari",
    "Sorry Shayari",
    "True Shayari",
    "Yaad Shayari",
  ];

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View
        style={{
          paddingHorizontal: SIZES.width / 30,
          paddingVertical: SIZES.width / 40,
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.lightGray,
          }}
        >
          {categories.length} Categories
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.categorySliderContainer}
        horizontal={true}
        scrollEventThrottle={2}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((el, index) => (
          <View key={index} style={styles.categoryTextContainer}>
            <Text style={styles.categoryText}>{el}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.shayriContainer}
        showsVerticalScrollIndicator={false}
      >
        <ShayriCard elevation={1} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  categorySliderContainer: {
    paddingVertical: SIZES.height / 60,
    paddingHorizontal: SIZES.width / 30,
  },
  categoryTextContainer: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
    marginRight: 10,
    height: SIZES.height / 20,
  },
  categoryText: {
    padding: SIZES.height / 40,
    ...FONTS.body5,
    lineHeight: SIZES.height / 100,
    textTransform: "capitalize",
    color: COLORS.primary,
  },
  shayriContainer: {
    height: "100%",
    marginTop: SIZES.height / 50,
  },
});
