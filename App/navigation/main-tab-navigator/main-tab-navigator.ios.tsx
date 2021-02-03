import React from "react";
import { MealNavigator } from "@navigation/meal-navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { FavoritesScreen } from "@screens/favorites";

import { MainTabNavigatorList } from "./main-tab-navigator.typing";
import { COLORS } from "@constants";

const Tab = createBottomTabNavigator<MainTabNavigatorList>();

export const MainTabNavigator = () => (
  <Tab.Navigator tabBarOptions={{ activeTintColor: COLORS.accent }}>
    <Tab.Screen
      name="MealNavigator"
      component={MealNavigator}
      options={{
        tabBarLabel: "Meals",
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={25} color={tabInfo.color} />
        ),
      }}
    />
  </Tab.Navigator>
);
