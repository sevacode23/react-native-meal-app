import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { SCREENS } from "@constants";
import { findCategory } from "@data/categories";
import { TCategoryMealsScreen } from "./category-meals.typing";

export const CategoryMealsScreen: TCategoryMealsScreen = ({
  route,
  navigation,
}) => {
  const { categoryId } = route.params;

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{categoryId}</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          navigation.navigate(SCREENS.MealDetails);
        }}
      />
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
