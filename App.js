import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

/**
 * The App function returns a NavigationContainer component that contains a Stack.Navigator component
 * that contains a Stack.Screen component that renders the HomeScreen component
 * @returns The return statement is returning the NavigationContainer component.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Screens*/}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
