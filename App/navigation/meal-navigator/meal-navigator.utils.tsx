import React from "react";

import { findCategory } from "@data/categories";
import { findMeal } from "@data/meals";
import {
  ICategoryMealsNavigationProps,
  IMealDetailsNavigationProps,
} from "./meal-navigator.typing";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "@components";

export const setCategoryMealsScreenOptions = ({
  route,
}: ICategoryMealsNavigationProps) => {
  const category = findCategory(route.params.categoryId);
  const title = category?.title || "Category Meals";

  return {
    title,
  };
};

export const setMealDetailScreenOptions = ({
  route,
}: IMealDetailsNavigationProps) => {
  const meal = findMeal(route.params.mealId);
  const title = meal?.title;

  return {
    title,
  };
};
