import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TextInput,
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import * as ImagePicker from "expo-image-picker";

import { Card, CustomButton, FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { images } from "../../constants";
import { ShayriCard } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);

  const handleEditProfilePress = () => {
    sheetRef.current.snapTo(0);
  };

  const handleProfileClick = async () => {
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

  const RenderContent = () => {
    return (
      <View
        style={{
          backgroundColor: "#f1f3f4",
          padding: SIZES.width / 40,
          height: "100%",
        }}
      >
        <View style={styles.editProfileBottomSheet}>
          <View style={styles.profileImageContainer}>
            <TouchableOpacity onPress={handleProfileClick}>
              <Image
                source={image === null ? images.profileImage : { uri: image }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProfileClick}>
              <Text
                style={{
                  ...FONTS.body6,
                  paddingVertical: 5,
                  color: COLORS.gray,
                }}
              >
                Change Profile Image
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bioContainer}>
            <Text style={{ ...FONTS.body3, marginBottom: SIZES.height / 100 }}>
              Bio
            </Text>

            <TouchableOpacity
              style={styles.bioTextContainer}
              onPress={() => navigation.navigate("editBio")}
            >
              <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
                This is sample dummy text for the bio, Good Luck. This is sample
                dummy text for the bio, Good Luck. This is sample dummy text for
                bio, Good Luck.
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ alignItems: "center", paddingTop: SIZES.height / 100 }}
          >
            <CustomButton
              onPress={handleEditProfilePress}
              title="Update"
              background={COLORS.primary}
              color={COLORS.white}
              rounded={10}
              bold={true}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.whiteDark}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={["60%", "0%"]}
        initialSnap={1}
        callbackNode={fall}
        renderHeader={renderHeader}
        enabledGestureInteraction={true}
        renderContent={RenderContent}
      />
      <Animated.View
        style={{
          opacity: Animated.add(0.2, Animated.multiply(fall, 1.0)),
        }}
      >
        <View style={styles.profileContainer}>
          <View style={styles.sections}>
            <View>
              <Image source={images.profileImage} style={styles.profileImage} />
            </View>
            <View>
              <View>
                <Text style={styles.nameText}>John Doe</Text>
              </View>
              <View style={{ paddingTop: 5 }}>
                <Text style={styles.bio}>
                  This is the sample dummy text for the bio, Good Luck.
                </Text>
              </View>
            </View>
          </View>

          <View style={{ alignItems: "center", paddingTop: SIZES.height / 50 }}>
            <CustomButton
              onPress={handleEditProfilePress}
              title="edit profile"
              background={COLORS.primaryLight}
              color={COLORS.primary}
              rounded={10}
              bold={true}
            />
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
            Bookmarks
          </Text>

          <View style={{ paddingVertical: SIZES.height / 60 }}>
            <ShayriCard elevation={0} />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    backgroundColor: COLORS.white,
    elevation: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: SIZES.width / 20,
  },
  sections: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: SIZES.width / 3.8,
    height: SIZES.width / 3.8,
    resizeMode: "cover",
    borderRadius: SIZES.width,
  },
  nameText: {
    ...FONTS.body4,
    color: COLORS.black,
    fontWeight: "700",
  },
  bio: {
    ...FONTS.h5,
    color: COLORS.gray,
    maxWidth: SIZES.width / 2,
  },
  header: {
    backgroundColor: COLORS.primaryLight,
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginBottom: 10,
  },
  mainContainer: {
    padding: SIZES.width / 30,
  },
  editProfileBottomSheet: {
    paddingVertical: SIZES.height / 60,
  },
  profileImageContainer: {
    alignItems: "center",
  },
  bioContainer: {
    paddingVertical: SIZES.height / 100,
  },
  bioTextContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
    borderStyle: "dashed",
  },
});
