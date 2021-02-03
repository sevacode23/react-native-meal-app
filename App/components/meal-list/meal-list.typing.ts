import { IMeal } from "@models";
import { FunctionComponent } from "react";

export interface IMealListProps {
  meals: IMeal[];
  onTapMeal: (mealId: string) => void;
}

export type TMealList = FunctionComponent<IMealListProps>;
