import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "../../../components";
import { SIZES, COLORS, images, FONTS } from "../../../constants";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ShayriCard = ({ elevation }) => {
  return (
    <View style={{ padding: SIZES.width / 40 }}>
      <Card elevation={elevation} rounded={10} backgroundColor={COLORS.white}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ paddingRight: SIZES.width / 60 }}>
              <Image source={images.profileImage} style={styles.profileImage} />
            </View>
            <View>
              <Text style={styles.nameText}>John Doe</Text>
            </View>
          </View>
          <View>
            {/* <AntDesign name="pushpino" size={SIZES.width / 20} color="black" /> */}
            <AntDesign name="pushpin" size={24} color={COLORS.secondary} />
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.bodyText}>
              तेरे ख्याल से खुद को छुपा के देखा है, दिल-ओ-नजर को रुला-रुला के
              देखा है, तू नहीं तो कुछ भी नहीं है तेरी कसम, मैंने कुछ पल तुझे
              भुला के देखा है।
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.leftOptions}>
              <View style={{ paddingRight: SIZES.width / 25 }}>
                <FontAwesome5
                  name="copy"
                  size={SIZES.width / 20}
                  color={COLORS.lightGray}
                />
              </View>
              <View style={{ paddingRight: SIZES.width / 25 }}>
                <FontAwesome5
                  name="share-square"
                  size={SIZES.width / 20}
                  color={COLORS.lightGray}
                />
              </View>
              <View>
                <AntDesign
                  name="like1"
                  size={SIZES.width / 20}
                  color={COLORS.primary}
                />
              </View>
            </View>
            <View>
              <View>
                <FontAwesome5
                  name="edit"
                  size={SIZES.width / 20}
                  color={COLORS.lightGray}
                />
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ShayriCard;

const styles = StyleSheet.create({
  profileImage: {
    width: SIZES.width / 12,
    height: SIZES.width / 12,
    resizeMode: "cover",
    borderRadius: SIZES.width,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    ...FONTS.body6,
    fontWeight: "700",
  },
  bodyContainer: {
    paddingVertical: SIZES.height / 100,
  },
  bodyText: {
    ...FONTS.body4,
    textAlign: "center",
    color: COLORS.gray,
    paddingVertical: SIZES.height / 80,
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.height / 40,
  },
  leftOptions: {
    flexDirection: "row",
  },
});
