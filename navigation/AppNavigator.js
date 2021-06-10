import React from "react";
import { View, Text } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";
import { SIZES } from "../constants";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "home":
      return "Home";
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

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={TabNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerStatusBarHeight:0,
            headerTitleStyle: {
              fontSize: SIZES.h3,
              alignSelf: "center",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
