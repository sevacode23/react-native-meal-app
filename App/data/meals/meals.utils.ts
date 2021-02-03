import { MEALS } from "./meals";

export const getCategoryMeals = (categoryId: string) => {
  return MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) !== -1);
};

export const findMeal = (mealId: string) => {
  return MEALS.find((meal) => meal.id === mealId);
};
