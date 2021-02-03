import { FunctionComponent } from "react";

interface IFavoriteButtonProps {
  onPress: () => void;
}

export type TFavoriteButton = FunctionComponent<IFavoriteButtonProps>;
