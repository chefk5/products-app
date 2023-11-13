import React from "react";
import { MainRoutes, MainStack } from "./Types";
import Products from "../screens/Products";
import Details from "../screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../styles/theme";

function HomeStack() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            shadowColor: "transparent",
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
