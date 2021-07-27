import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  FocusAwareStatusBar,
  InputField,
  CustomButton,
} from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import Slider from "@react-native-community/slider";

const Post = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [image, setImage] = useState(null);
  const [shayri, setShayri] = useState("");
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [imageBlur, setImageBlur] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0);

  const onSliderValueChange = (val) => {
    setImageBlur(val);
  };

  const onSliderOpacityChange = (val) => {
    setImageOpacity(val);
  };
  const handleSelectShayriBakgroundImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  console.log(image);

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", padding: "5%" }}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <View style={{ marginBottom: "5%" }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>

      <InputField
        name="shayri"
        numberOfLines={8}
        height="20%"
        multiline={true}
        placeholder="Type your shayri here..."
        type="default"
        value={shayri}
        onChange={(e) => setShayri(e.text)}
      />

      <View style={{ marginVertical: "5%" }}>
        <CustomButton
          onPress={handleSelectShayriBakgroundImage}
          title={`${!image ? "Add" : "Change"} Shayri Backround`}
          background={COLORS.primary}
          color={COLORS.white}
          rounded={10}
          bold={true}
        />
      </View>

      {image && (
        <>
          <View style={styles.editingContainer}>
            <View style={styles.slider}>
              <Text style={styles.sliderText}>Image Blur</Text>
              <Slider
                style={{ width: SIZES.width / 1.1 }}
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
                style={{ width: SIZES.width / 1.1 }}
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

          <View>
            <ImageBackground
              source={{ uri: image }}
              blurRadius={imageBlur}
              style={{
                height: SIZES.width / 1.2,
                width: SIZES.width / 1.1,
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: `rgba(0,0,0,${imageOpacity})`,
                  filter: "blur(10)",
                  borderRadius: 20,
                }}
              >
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
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: COLORS.white,
                      textAlign: "center",
                    }}
                  >
                    {shayri}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </>
      )}

      <View style={{ marginVertical: "5%" }}>
        <CustomButton
          onPress={handleSelectShayriBakgroundImage}
          title={`${!image ? "Add" : "Change"} Shayri Backround`}
          background={COLORS.primary}
          color={COLORS.white}
          rounded={10}
          bold={true}
        />
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  editingContainer: {
    marginBottom: SIZES.height / 120,
  },

  slider: {
    marginVertical: SIZES.height / 80,
  },
});
