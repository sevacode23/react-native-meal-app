import { FunctionComponent } from "react";

import { ICategoryMealsNavigationProps } from "@navigation/meal-navigator";

interface ICategoryMealsProps extends ICategoryMealsNavigationProps {}

export type TCategoryMealsScreen = FunctionComponent<ICategoryMealsProps>;
