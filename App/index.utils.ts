import * as Font from "expo-font";

import { FONTS } from "./constants";

export const fetchFonts = () => {
  return Font.loadAsync(FONTS);
};

export const handleFontsLoadingError = (err: Error) => {
  console.log(err);
};
