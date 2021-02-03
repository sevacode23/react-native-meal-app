import React, { FunctionComponent } from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "@data";

import { CategoryItem } from "../category-item";
import { ICategoryList } from "./category-list.typing";

export const CategoryList: FunctionComponent<ICategoryList> = ({
  onGoToCategoryMeals,
}) => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryItem
          item={itemData.item}
          onGoToCategoryMeals={onGoToCategoryMeals}
        />
      )}
      numColumns={2}
    />
  );
};
