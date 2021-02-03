import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type TFavoritesNavigatorList = {
  Favorites: undefined;
  MealDetails: { mealId: string };
};

type TFavoritesScreenNavigationProp = StackNavigationProp<
  TFavoritesNavigatorList,
  "Favorites"
>;

type TFavoritesScreenRouteProp = RouteProp<
  TFavoritesNavigatorList,
  "Favorites"
>;

export interface IFavoritesScreenNavigationProps {
  navigation: TFavoritesScreenNavigationProp;
  route: TFavoritesScreenRouteProp;
}
