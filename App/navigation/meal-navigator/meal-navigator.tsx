import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CategoriesScreen } from "@screens/categories";
import { CategoryMealsScreen } from "@screens/category-meals";
import { MealDetailsScreen } from "@screens/meal-details";

import { TMealNavigatorList } from "./meal-navigator.typing";
import { defaultScreenOptions } from "./meal-navigator.constants";
import {
  setCategoryMealsScreenOptions,
  setMealDetailScreenOptions,
} from "./meal-navigator.utils";

const Stack = createStackNavigator<TMealNavigatorList>();

export const MealNavigator = () => (
  <Stack.Navigator screenOptions={defaultScreenOptions}>
    <Stack.Screen name="Categories" component={CategoriesScreen} />
    <Stack.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={setCategoryMealsScreenOptions}
    />
    <Stack.Screen
      name="MealDetails"
      component={MealDetailsScreen}
      options={setMealDetailScreenOptions}
    />
  </Stack.Navigator>
);
