// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./pages/Home";
import MainScreen from "./pages/Main";

// この記述が超絶重要。スタックナビゲーターはナビゲーションと画面の両方を管理するオブジェクトを返す
const Stack = createStackNavigator();

// NavigationContainerは必ず必要。
// NavigationContainer > Stack.Navigator > Stack.Screen という構成を取る。
// Stack.Navigatorの中で複数のStack.Screenを入れて管理する。
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="ホーム"
          component={HomeScreen}
          options={{ title: "ホーム" }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "メイン" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
