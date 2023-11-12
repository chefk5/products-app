import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MainNavigationProp, MainRoutes, MainStack } from "./Types";
import Products from "../screens/Products";
import Details from "../screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../styles/theme";

function HomeStack() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            shadowColor: "transparent", // this covers iOS
            elevation: 0,
          },
          headerTintColor: colors.textPrimary,
        }}
      >
        <MainStack.Screen name={MainRoutes.Products} component={Products} />
        <MainStack.Screen name={MainRoutes.Details} component={Details} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
