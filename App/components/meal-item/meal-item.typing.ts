import { IMeal } from "@models";
import { FunctionComponent } from "react";

export interface IMealItemProps {
  meal: IMeal;
  onMealTap: (mealId: string) => void;
}

export type TMealItem = FunctionComponent<IMealItemProps>;
