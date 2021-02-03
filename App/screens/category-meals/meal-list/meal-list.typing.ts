import { IMeal } from "@models";
import { FunctionComponent } from "react";

export interface IMealListProps {
  meals: IMeal[];
}

export type TMealList = FunctionComponent<IMealListProps>;
