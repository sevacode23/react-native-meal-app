import React from "react";
import { View, StyleSheet } from "react-native";

import { MealList } from "@components/meal-list";
import { getCategoryMeals } from "@data/meals";

import { TCategoryMealsScreen } from "./category-meals.typing";

export const CategoryMealsScreen: TCategoryMealsScreen = ({
  route,
  navigation,
}) => {
  const { categoryId } = route.params;
  const categoryMeals = getCategoryMeals(categoryId);

  const handleTapMeal = (mealId: string) => {
    navigation.navigate("MealDetails", { mealId });
  };

  return (
    <View style={styles.screen}>
      <MealList meals={categoryMeals} onTapMeal={handleTapMeal} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
