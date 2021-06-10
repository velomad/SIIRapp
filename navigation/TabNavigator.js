import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Collections, Profile, Categories, Post } from "../screens";
import { COLORS, SIZES } from "../constants";
import * as Icon from "@expo/vector-icons";
import { AddButton } from "./components";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: COLORS.primary,
        style: {
          position: "absolute",
          bottom: SIZES.width / 40,
          left: SIZES.width / 40,
          right: SIZES.width / 40,
          elevation: 0,
          borderColor: "#fff",
          borderTopColor: "#fff",
          borderRadius: SIZES.width,
          backgroundColor: COLORS.white,
          height: SIZES.height / 15,
        },
        labelStyle: { fontSize: SIZES.body4 },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="categories"
        component={Categories}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons name="list" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="post"
        component={Post}
        options={{
          tabBarButton: (props) => <AddButton {...props} />,
        }}
      />
      <Tab.Screen
        name="collections"
        component={Collections}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons name="collections" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons name="account-circle" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
