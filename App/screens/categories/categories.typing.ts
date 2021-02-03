import { StackNavigationProp } from "@react-navigation/stack";

import { TMealNavigatorList } from "@navigation/meal-navigator";
import { FunctionComponent } from "react";

export type TCategoriesScreenNavigationProp = StackNavigationProp<
  TMealNavigatorList,
  "Categories"
>;

export interface ICategoriesScreenProps {
  navigation: TCategoriesScreenNavigationProp;
}

export type TCategoriesScreen = FunctionComponent<ICategoriesScreenProps>;
