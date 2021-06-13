import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FocusAwareStatusBar, InputField } from "../../../../components";
import { COLORS } from "../../../../constants";

const EditBio = () => {
  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View style={{ alignItems: "center" }}>
        <InputField name="bio" placeholder="Bio" type="default" />
      </View>
    </View>
  );
};

export default EditBio;
