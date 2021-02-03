import React from "react";
import { View, StyleSheet } from "react-native";

import { MealList } from "@components/meal-list";
import { MEALS } from "@data";

import { TFavoritesScreen } from "./favorites.typing";

export const FavoritesScreen: TFavoritesScreen = ({ navigation }) => {
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  const handleTapMeal = (mealId: string) => {
    navigation.navigate("MealDetails", { mealId });
  };

  return (
    <View style={styles.screen}>
      <MealList meals={favoriteMeals} onTapMeal={handleTapMeal} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
