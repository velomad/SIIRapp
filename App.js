import "react-native-gesture-handler";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import authStorage from "./auth/storage";
import AuthContext from "./auth/context";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // const fetchFonts = () => {
  //   return Font.loadAsync({
  //     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //   });
  // };

  if (!isReady)
    return (
      <>
        <AppLoading
          startAsync={restoreUser}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      </>
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
