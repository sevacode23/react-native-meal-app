import { ICategory } from "./category.typing";

export class Category implements ICategory {
  public id;
  public title;
  public color;

  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}
