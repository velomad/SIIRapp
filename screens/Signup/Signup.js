import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import customAxios from "../../utils/interceptor";
import { COLORS, FONTS, SIZES } from "../../constants";
import {
  CustomButton,
  InputField,
  KeyboardAvoidingWrapper,
} from "../../components";
import toastMessage from "../../utils/Toast";

const Signup = ({ navigation }) => {
  const [inputValue, setInputValue] = useState({});
  const { username, emailId, password, bio } = inputValue;

  const handleChange = (e) => {
    const { name, type, text } = e;
    setInputValue((prev) => ({
      ...prev,
      [name]: text,
    }));
  };

  const handleSignup = async () => {
    try {
      const result = await customAxios.post("/auth/signup", inputValue);
      if (result) navigation.navigate("login");
    } catch (error) {
      toastMessage(error.response.data.error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("welcome")}
      >
        <Ionicons name="chevron-back" size={28} color={COLORS.primaryDark} />
      </TouchableOpacity>

      <View style={styles.introText}>
        <Text style={{ ...FONTS.body1, color: COLORS.gray }}>Hello !</Text>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textTransform: "capitalize",
          }}
        >
          Signup to get started
        </Text>
      </View>

      <View style={styles.formContainer}>
        <InputField
          placeholder="Username"
          name="userName"
          type="default"
          value={username}
          onChange={handleChange}
        />
        <InputField
          placeholder="Email"
          name="emailId"
          type="email-address"
          value={emailId}
          onChange={handleChange}
        />
        <InputField
          placeholder="Password"
          name="password"
          type="default"
          secure={true}
          value={password}
          onChange={handleChange}
        />
        <InputField
          placeholder="Bio"
          name="bio"
          type="default"
          value={bio}
          onChange={handleChange}
        />
        <View style={{ paddingTop: "5%" }}>
          <CustomButton
            onPress={handleSignup}
            title="Create "
            background={COLORS.secondary}
            color={COLORS.primaryDark}
            rounded={5}
          />
        </View>
        <View style={styles.secondaryText}>
          <View>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.gray,
                fontSize: SIZES.h5,
              }}
            >
              Already have an account?
            </Text>
          </View>
          <TouchableOpacity
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={{ fontSize: SIZES.h5, color: COLORS.primaryDark }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "15%",
  },
  backButton: {
    backgroundColor: COLORS.secondary,
    height: SIZES.width / 8,
    width: SIZES.width / 4.5,
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
  },
  introText: {
    marginVertical: SIZES.height / 40,
    marginHorizontal: SIZES.width / 40,
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: SIZES.height / 20,
  },
  secondaryText: {
    flexDirection: "row",
    paddingVertical: 5,
  },
});
