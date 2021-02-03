import { TAffordability } from "@models/meal/meal.typing";
import { FunctionComponent } from "react";

export interface IMealItemProps {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: TAffordability;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGluteenFree: boolean;
  isVegan: boolean;
  isVegeterian: boolean;
  isLactoseFree: boolean;
}

export type TMealItem = FunctionComponent<IMealItemProps>;
