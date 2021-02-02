import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { TMealNavigatorList } from "@navigation/meal-navigator";
import { SCREENS } from "@constants";
import { FunctionComponent } from "react";

type TCategoryMealsScreenNavigationProp = StackNavigationProp<
  TMealNavigatorList,
  SCREENS.CategoryMeals
>;
type TCategoryMealsScreenRouteProp = RouteProp<
  TMealNavigatorList,
  SCREENS.CategoryMeals
>;

interface ICategoryMealsProps {
  navigation: TCategoryMealsScreenNavigationProp;
  route: TCategoryMealsScreenRouteProp;
}

export type TCategoryMealsScreen = FunctionComponent<ICategoryMealsProps>;
