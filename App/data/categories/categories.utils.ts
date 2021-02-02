import { CATEGORIES } from "./categories";

export const findCategory = (id: string) => {
  return CATEGORIES.find((cat) => cat.id === id);
};
