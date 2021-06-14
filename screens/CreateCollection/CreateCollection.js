import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Slider from "@react-native-community/slider";

import { CustomButton, FocusAwareStatusBar } from "../../components";
import { FONTS, SIZES, COLORS, images } from "../../constants";

const CreateCollection = ({ route }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageBlur, setImageBlur] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0);

  const onSliderValueChange = (val) => {
    setImageBlur(val);
  };

  const onSliderOpacityChange = (val) => {
    setImageOpacity(val);
  };

  const handleImageAddPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      {!selectedImage && (
        <View style={styles.shayriContainer}>
          <Text style={styles.shayriText}>{route.params.shayri}</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.imageAddContainer}
        activeOpacity={0.8}
        onPress={handleImageAddPress}
      >
        <Text style={styles.imageAddText}>
          {selectedImage ? "Change Shayri background" : "Add image to shayri"}
        </Text>
      </TouchableOpacity>

      {selectedImage && (
        <View>
          <View style={styles.editingContainer}>
            <View style={styles.slider}>
              <Text style={styles.sliderText}>Image Blur</Text>
              <Slider
                style={{ width: "100%" }}
                minimumValue={0}
                maximumValue={2}
                step={0.1}
                onValueChange={onSliderValueChange}
                minimumTrackTintColor={COLORS.secondary}
                maximumTrackTintColor={COLORS.black}
                thumbTintColor={COLORS.primary}
              />
            </View>

            <View style={styles.slider}>
              <Text style={styles.sliderText}>Image Dim</Text>
              <Slider
                style={{ width: "100%" }}
                minimumValue={0}
                maximumValue={0.9}
                step={0.1}
                onValueChange={onSliderOpacityChange}
                minimumTrackTintColor={COLORS.secondary}
                maximumTrackTintColor={COLORS.black}
                thumbTintColor={COLORS.primary}
              />
            </View>
          </View>

          <View style={styles.collectionContainer}>
            <ImageBackground
              source={{ uri: selectedImage }}
              style={styles.shayriImage}
              resizeMode="cover"
              blurRadius={imageBlur}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: `rgba(0,0,0,${imageOpacity})`,
                  filter: "blur(10)",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={images.icon}
                    style={{
                      height: SIZES.height / 20,
                      width: SIZES.width / 8,
                    }}
                  />
                  <Text style={styles.watermarkText}>SIIR</Text>
                </View>
                <View
                  style={{
                    padding: SIZES.width / 20,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.imageShayriText}>
                    तेरे ख्याल से खुद को छुपा के देखा है, दिल-ओ-नजर को रुला-रुला
                    के देखा है, तू नहीं तो कुछ भी नहीं है तेरी कसम, मैंने कुछ पल
                    तुझे भुला के देखा है।
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{ marginVertical: SIZES.height / 60 }}>
            <CustomButton
              title=" + Create"
              background={COLORS.primary}
              color={COLORS.white}
              bold="700"
              rounded={10}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default CreateCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: SIZES.height / 40,
    paddingHorizontal: SIZES.width / 20,
  },
  sliderText: {
    ...FONTS.body5,
    padding: SIZES.width / 40,
    color: COLORS.gray,
  },
  shayriText: {
    ...FONTS.body4,
    textAlign: "center",
    color: COLORS.gray,
  },
  imageAddContainer: {
    marginVertical: SIZES.height / 40,
    alignItems: "center",
    borderWidth: 1,
    padding: SIZES.width / 20,
    borderRadius: 10,
    backgroundColor: COLORS.primaryLight,
    borderStyle: "dashed",
    borderColor: COLORS.secondary,
  },
  imageAddText: {
    ...FONTS.body4,
    color: COLORS.primary,
  },
  collectionContainer: {
    borderRadius: 10,
  },
  shayriImage: {
    height: SIZES.height / 2,
    width: "100%",
  },
  imageShayriText: {
    ...FONTS.body5,
    color: COLORS.white,
    textAlign: "center",
  },
  watermarkText: {
    position: "absolute",
    right: 0,
    paddingHorizontal: SIZES.width / 30,
    paddingVertical: SIZES.height / 100,
    ...FONTS.body4,
    color: COLORS.whiteDark,
  },
  shayriContainer: {
    paddingVertical: SIZES.height / 60,
  },
  editingContainer: {
    marginBottom: SIZES.height / 120,
  },

  slider: {
    marginVertical: SIZES.height / 80,
  },
});
