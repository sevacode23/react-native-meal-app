import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MealItem } from "../meal-item";

import { TMealList } from "./meal-list.typing";

export const MealList: TMealList = ({ meals }) => {
  return (
    <FlatList
      data={meals}
      renderItem={(itemData) => <MealItem {...itemData.item} />}
    ></FlatList>
  );
};
