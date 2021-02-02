import { Platform } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

import { COLORS } from "@constants";

export const defaultScreenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? COLORS.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
};
