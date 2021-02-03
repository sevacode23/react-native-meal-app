import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type TMealNavigatorList = {
  Categories: undefined;
  CategoryMeals: { categoryId: string };
  MealDetails: { mealId: string };
};

type TCategoryMealsScreenNavigationProp = StackNavigationProp<
  TMealNavigatorList,
  "CategoryMeals"
>;
type TCategoryMealsScreenRouteProp = RouteProp<
  TMealNavigatorList,
  "CategoryMeals"
>;

export interface ICategoryMealsNavigationProps {
  navigation: TCategoryMealsScreenNavigationProp;
  route: TCategoryMealsScreenRouteProp;
}

type TMealDetailsScreenNavigationProp = StackNavigationProp<
  TMealNavigatorList,
  "MealDetails"
>;

type TMealDetailsScreenRouteProp = RouteProp<TMealNavigatorList, "MealDetails">;

export interface IMealDetailsNavigationProps {
  navigation: TMealDetailsScreenNavigationProp;
  route: TMealDetailsScreenRouteProp;
}
