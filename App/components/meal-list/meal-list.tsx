import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { MealItem } from "../meal-item";
import { TMealList } from "./meal-list.typing";

export const MealList: TMealList = ({ meals, onTapMeal: onMealTap }) => {
  return (
    <View style={styles.root}>
      <FlatList
        data={meals}
        renderItem={(itemData) => (
          <MealItem meal={itemData.item} onMealTap={onMealTap} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "95%",
    paddingTop: 10,
  },
});
