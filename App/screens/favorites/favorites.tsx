import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

export const FavoritesScreen: FunctionComponent = () => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
