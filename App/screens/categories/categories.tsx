import React from "react";
import { View, StyleSheet } from "react-native";

import { TCategoriesScreen } from "./categories.typing";
import { CategoryList } from "./category-list";

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
