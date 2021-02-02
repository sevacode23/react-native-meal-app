import { findCategory } from "@data/categories";
import { TMealNavigatorScreenOptions } from "./meal-navigator.typing";

export const setOptions: TMealNavigatorScreenOptions = ({ route }) => {
  const category = findCategory(route.params.categoryId);
  const title = category?.title || "Category Meals";

  return {
    title,
  };
};
