import { createStackNavigator } from "@react-navigation/stack";

import { MainNavigationProp, MainRoutes } from "./Types";
import Products from "../screens/Products";
import Details from "../screens/Details";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
interface HomeStackProps {
  navigation: MainNavigationProp;
}
function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MainRoutes.Products} component={Products} />
        <Stack.Screen name={MainRoutes.Details} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
