import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const InputField = ({
  fieldFocus,
  secure,
  value,
  name,
  placeholder,
  type,
  height,
  onChange,
  multiline,
  numberOfLines,
}) => {
  const styles = StyleSheet.create({
    inputStyle: {
      width: SIZES.width / 1.1,
      height: !height ? SIZES.height / 15 : height,
      textAlignVertical: "top",
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderColor: COLORS.lightGray,
    },
  });

  return (
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      keyboardType={type}
      style={styles.inputStyle}
      placeholderTextColor="#666"
      autoFocus={fieldFocus}
      secureTextEntry={secure}
      defaultValue={value}
      placeholder={placeholder}
      onChangeText={(text) => onChange({ name, type, text })}
    />
  );
};

export default InputField;
