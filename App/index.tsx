import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import { MealNavigator } from "./navigation/meal-navigator";
import { useAppState } from "./index.state";
import { fetchFonts, handleFontsLoadingError } from "./index.utils";

export default function App() {
  const { isFontsLoaded, onFontsLoaded } = useAppState();

  let renderContent = isFontsLoaded ? (
    <NavigationContainer>
      <MealNavigator />
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
