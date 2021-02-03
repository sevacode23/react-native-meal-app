import { FunctionComponent } from "react";

import { IFavoritesScreenNavigationProps } from "@navigation/favorites-navigator";

interface IFavoritesScreenProps extends IFavoritesScreenNavigationProps {}

export type TFavoritesScreen = FunctionComponent<IFavoritesScreenProps>;
