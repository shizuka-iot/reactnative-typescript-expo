import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../styles/styles";

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="もう一度メイン画面へ"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

export default MainScreen;
