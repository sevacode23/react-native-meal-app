import { Category } from "@models";
import { FunctionComponent } from "react";

export interface ICategoryItemProps {
  item: Category;
  onGoToCategoryMeals: (categoryId: string) => void;
}

export type TCategoryItem = FunctionComponent<ICategoryItemProps>;
