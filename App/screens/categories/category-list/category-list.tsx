import React, { FunctionComponent } from "react";
import { FlatList } from "react-native";

import { CategoryItem } from "../category-item";
import { ICategoryList } from "./category-list.typing";
import { CATEGORIES } from "@data";

export const CategoryList: FunctionComponent<ICategoryList> = ({
  onGoToCategoryMeals,
}) => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryItem
          itemData={itemData}
          onGoToCategoryMeals={onGoToCategoryMeals}
        />
      )}
      numColumns={2}
    />
  );
};
