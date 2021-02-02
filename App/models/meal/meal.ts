import { IMeal, TAffordability } from "./meal.typing";

export class Meal implements IMeal {
  public id: string;
  public categoryIds: string[];
  public title: string;
  public affordability: TAffordability;
  public complexity: string;
  public imageUrl: string;
  public duration: number;
  public ingredients: string[];
  public steps: string[];
  public isGluteenFree: boolean;
  public isVegan: boolean;
  public isVegeterian: boolean;
  public isLactoseFree: boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: TAffordability,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGluteenFree: boolean,
    isVegan: boolean,
    isVegeterian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGluteenFree = isGluteenFree;
    this.isVegan = isVegan;
    this.isVegeterian = isVegeterian;
    this.isLactoseFree = isLactoseFree;
  }
}
