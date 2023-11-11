import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { ProductDetails } from "../app/types";

export enum MainRoutes {
  Products = "Products",
  Details = "Details",
}

export type MainStackParamList = {
  [MainRoutes.Products]: undefined;
  [MainRoutes.Details]: ProductDetails;
};

export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = StackNavigationProp<MainStackParamList, RouteName>;

export const MainStack = createStackNavigator<MainStackParamList>();
