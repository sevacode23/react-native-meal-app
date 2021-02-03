import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { FavoritesScreen } from "@screens/favorites";
import { MealDetailsScreen } from "@screens/meal-details";

import { TFavoritesNavigatorList } from "./favorites-navigator.typing";
import { defaultFavoritesNavigatorScreenOptions } from "./favorites-navigator.constants";

const Stack = createStackNavigator<TFavoritesNavigatorList>();

export const FavoritesNavigator = () => (
  <Stack.Navigator screenOptions={defaultFavoritesNavigatorScreenOptions}>
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
    <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
  </Stack.Navigator>
);
