import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CategoriesScreen } from "@screens/categories";
import { CategoryMealsScreen } from "@screens/category-meals";
import { MealDetailsScreen } from "@screens/meal-details";
import { SCREENS } from "@constants";

import { TMealNavigatorList } from "./meal-navigator.typing";
import { setOptions } from "./meal-navigator.utils";
import { defaultScreenOptions } from "./meal-navigator.constants";

const Stack = createStackNavigator<TMealNavigatorList>();

export const MealNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={SCREENS.Categories} component={CategoriesScreen} />
      <Stack.Screen
        name={SCREENS.CategoryMeals}
        component={CategoryMealsScreen}
        options={setOptions}
      />
      <Stack.Screen name={SCREENS.MealDetails} component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};
