import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Splash } from "./Src";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};
const Index = () => {
  return <HomeStack />;
};

export default Index;
