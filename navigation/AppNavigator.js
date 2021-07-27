import React from "react";
import { View, Text } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateCollection, Home } from "../screens";
import { COLORS, SIZES } from "../constants";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { Ionicons } from "@expo/vector-icons";
import { EditBio } from "../screens/Profile/components";
import { Header } from "./components";
import Notifications from "../screens/Notifications";

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "home":
      return "SIIR";
    case "categories":
      return "Categories";
    case "post":
      return "Post";
    case "collections":
      return "Collections";
    case "profile":
      return "Profile";
  }
}

const AppNavigator = (props) => {
  console.log(props);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SIIR"
        component={TabNavigator}
        options={({ route }) => ({
          headerStatusBarHeight: 0,
          header: ({ navigation }) => (
            <Header title={getHeaderTitle(route)} navigation={navigation} />
          ),
        })}
      />

      <Stack.Screen
        name="notifications"
        component={Notifications}
        options={{
          headerTitle: "Notifications",
        }}
      />

      <Stack.Screen
        name="createCollection"
        component={CreateCollection}
        options={{
          headerTitle: "Create Collection",
        }}
      />

      <Stack.Screen
        name="editBio"
        component={EditBio}
        options={{
          headerTitle: "Edit",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
