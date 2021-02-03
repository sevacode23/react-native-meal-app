import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { MealList } from "./meal-list";
import { getCategoryMeals } from "@data/meals";
import { SCREENS } from "@constants";
import { TCategoryMealsScreen } from "./category-meals.typing";

export const CategoryMealsScreen: TCategoryMealsScreen = ({
  route,
  navigation,
}) => {
  const { categoryId } = route.params;
  const categoryMeals = getCategoryMeals(categoryId);

  return (
    <View style={styles.screen}>
      <View style={styles.mealListWrap}>
        <MealList meals={categoryMeals} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  mealListWrap: {
    paddingTop: 10,
    width: "95%",
  },
});
