import React from "react";
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
import { COLORS, FONTS, SIZES } from "../../constants";
import {
  CustomButton,
  InputField,
  KeyboardAvoidingWrapper,
} from "../../components";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("welcome")}
      >
        <Ionicons name="chevron-back" size={28} color={COLORS.primaryDark} />
      </TouchableOpacity>

      <View style={styles.introText}>
        <Text style={{ ...FONTS.body2, color: COLORS.gray }}>
          Continue With Phone
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.height / 40,
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.gray,
              textTransform: "capitalize",
            }}
          >
            We will send you
          </Text>
          <Text style={{ paddingLeft: 4 }}>(OTP)</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <InputField
          placeholder="Mobile Number"
          name="mobileNumber"
          type="phone-pad"
          secure={true}
        />
        <View style={{ paddingTop: "5%" }}>
          <CustomButton
            title="Login"
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
              New User?
            </Text>
          </View>
          <TouchableOpacity
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={{ fontSize: SIZES.h5, color: COLORS.primaryDark }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.height / 20,
  },
  secondaryText: {
    flexDirection: "row",
    paddingVertical: 5,
  },
});
