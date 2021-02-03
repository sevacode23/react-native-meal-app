import React from "react";
import { View, StyleSheet } from "react-native";

import { CategoryList } from "./category-list";
import { TCategoriesScreen } from "./categories.typing";

export const CategoriesScreen: TCategoriesScreen = ({ navigation }) => {
  const handleGoToCategoryMeals = (categoryId: string) => {
    navigation.navigate("CategoryMeals", { categoryId });
  };

  return (
    <View style={styles.screen}>
      <CategoryList onGoToCategoryMeals={handleGoToCategoryMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
