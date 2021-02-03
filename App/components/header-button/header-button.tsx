import React from "react";
import { Platform } from "react-native";
import { HeaderButton as PackageButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@constants";
import { THeaderButton } from "./header-button.typing";

export const HeaderButton: THeaderButton = (props) => {
  return (
    <PackageButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : COLORS.primary}
    />
  );
};
