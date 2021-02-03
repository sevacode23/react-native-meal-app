import { FunctionComponent } from "react";

import { IMealDetailsNavigationProps } from "@navigation/meal-navigator";

interface IMealDetailsProps extends IMealDetailsNavigationProps {}

export type TMealDetailsScreen = FunctionComponent<IMealDetailsProps>;
