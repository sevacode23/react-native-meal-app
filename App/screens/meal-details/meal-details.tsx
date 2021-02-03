import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { findMeal } from "@data/meals";

import { TMealDetailsScreen } from "./meal-details.typing";
import { FavoriteButton } from "./header/favorite-button";

export const MealDetailsScreen: TMealDetailsScreen = ({
  route,
  navigation,
}) => {
  const { mealId } = route.params;
  const mealTitle = findMeal(mealId)?.title;

  useEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <FavoriteButton
          onPress={() => {
            alert("Qq");
          }}
        />
      ),
    });
  }, [navigation, route]);

  return (
    <View style={styles.screen}>
      <Text>{mealTitle}</Text>
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
