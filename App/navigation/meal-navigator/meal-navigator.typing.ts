import { SCREENS } from "@constants";
import { Route } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";

export type TMealNavigatorList = {
  [SCREENS.Categories]: undefined;
  [SCREENS.CategoryMeals]: { categoryId: string };
  [SCREENS.MealDetails]: undefined;
};

export type TMealNavigatorScreenOptions =
  | StackNavigationOptions
  | ((props: {
      route: Route<SCREENS.CategoryMeals, { categoryId: string }>;
      navigation: any;
    }) => StackNavigationOptions)
  | undefined;
