import { Platform } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

import { COLORS } from "@constants";

export const defaultFavoritesNavigatorScreenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? COLORS.accent : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : COLORS.accent,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
};
