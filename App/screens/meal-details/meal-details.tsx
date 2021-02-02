import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

export const MealDetailsScreen: FunctionComponent = () => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen!</Text>
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
