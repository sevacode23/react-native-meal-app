import { ListRenderItemInfo } from "react-native";

import { Category } from "@models";
import { FunctionComponent } from "react";

export interface ICategoryItemProps {
  itemData: ListRenderItemInfo<Category>;
  onGoToCategoryMeals: (categoryId: string) => void;
  color: string;
}

export type TCategoryItem = FunctionComponent<ICategoryItemProps>;
