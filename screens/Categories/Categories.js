import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import { AntDesign } from "@expo/vector-icons";

import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";

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

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const onSelectionsChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  // preselect the users category on component mount

  // useEffect(() => {
  //   setSelectedCategories(categories);
  // }, []);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: COLORS.primaryLight,
          paddingVertical: SIZES.height / 20,
          paddingHorizontal: SIZES.width / 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.primary,
            }}
          >
            Select the <Text style={{ color: COLORS.secondary }}>Shayari</Text>
            {"\n"}
            as per your preference..
          </Text>
        </View>

        <View>
          <AntDesign name="star" size={SIZES.width / 12} color="#e8b923" />
        </View>
      </View>

      <SelectMultiple
        items={categories}
        selectedItems={selectedCategories}
        onSelectionsChange={onSelectionsChange}
      />
    </View>
  );
};

export default Categories;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
