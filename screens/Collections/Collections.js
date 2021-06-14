import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { Camera } from "expo-camera";
import * as Sharing from "expo-sharing";

import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";

const Collections = () => {
  const downloadFile = () => {
    return new Promise((resolve, reject) => {
      const uri = "http://techslides.com/demos/sample-videos/small.mp4";
      let fileUri = FileSystem.documentDirectory + "small.mp4";
      FileSystem.downloadAsync(uri, fileUri)
        .then(({ uri }) => {
          saveFile(uri);
          resolve(uri);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  saveFile = async (fileUri) => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);
    }
  };

  const onShare = () => {
    downloadFile()
      .then((imegeUrl) => {
        Sharing.shareAsync(imegeUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View style={styles.collectionContainer}>
        <ImageBackground source={images.background} style={styles.shayriImage}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
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
              <Text style={styles.shayriText}>
                तेरे ख्याल से खुद को छुपा के देखा है, दिल-ओ-नजर को रुला-रुला के
                देखा है, तू नहीं तो कुछ भी नहीं है तेरी कसम, मैंने कुछ पल तुझे
                भुला के देखा है।
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.collectionInfo}>
          <Text style={styles.dateText}>{new Date().toDateString()}</Text>

          <TouchableOpacity onPress={onShare}>
            <FontAwesome
              name="share-square-o"
              size={SIZES.width / 20}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.width / 20,
  },
  collectionContainer: {
    elevation: 3,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  shayriImage: {
    height: SIZES.height / 4,
    width: "100%",
    resizeMode: "contain",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  collectionInfo: {
    padding: SIZES.width / 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    ...FONTS.body5,
    color: COLORS.gray,
  },
  shayriText: {
    ...FONTS.body5,
    color: COLORS.white,
    textAlign: "center",
  },
});
