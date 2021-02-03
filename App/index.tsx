import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import { useAppState } from "./index.state";
import { fetchFonts, handleFontsLoadingError } from "./index.utils";
import { MainTabNavigator } from "./navigation";

export default function App() {
  const { isFontsLoaded, onFontsLoaded } = useAppState();

  let renderContent = isFontsLoaded ? (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={onFontsLoaded}
      onError={handleFontsLoadingError}
    />
  );

  return (
    <View style={styles.root}>
      <StatusBar style="inverted" />
      {renderContent}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
