export type TAffordability = "affordable" | "pricey" | "luxurious";

export interface IMeal {
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
