import React from "react";
import { MealNavigator } from "@navigation/meal-navigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { FavoritesScreen } from "@screens/favorites";

import { MainTabNavigatorList } from "./main-tab-navigator.typing";
import { COLORS } from "@constants";
import { FavoritesNavigator } from "@navigation/favorites-navigator";

const Tab = createMaterialBottomTabNavigator<MainTabNavigatorList>();

export const MainTabNavigator = () => (
  <Tab.Navigator
    shifting
    activeColor="white"
    barStyle={{
      backgroundColor: COLORS.primary,
    }}
  >
    <Tab.Screen
      name="MealNavigator"
      component={MealNavigator}
      options={{
        tabBarLabel: "Meals",
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
        ),
        tabBarColor: COLORS.primary,
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesNavigator}
      options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={25} color={tabInfo.color} />
        ),
        tabBarColor: COLORS.accent,
      }}
    />
  </Tab.Navigator>
);
