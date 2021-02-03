import { FunctionComponent } from "react";
import { HeaderButtonProps as PackageButtonProps } from "react-navigation-header-buttons";

export interface IHeaderButtonProps extends PackageButtonProps {}

export type THeaderButton = FunctionComponent<IHeaderButtonProps>;
