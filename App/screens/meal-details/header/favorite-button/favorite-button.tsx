import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { HeaderButton } from "@components";
import { TFavoriteButton } from "./favorite-button.typing";

export const FavoriteButton: TFavoriteButton = ({ onPress }) => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Favorite" iconName="ios-star" onPress={onPress} />
  </HeaderButtons>
);
