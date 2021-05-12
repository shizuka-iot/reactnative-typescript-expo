import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../styles/styles";
import "react-native-gesture-handler";

/**
 * 送られてきたパラメーターを取得するのに必ず必要
 * route.paramsを使って取り出す
 */
import { useRoute, RouteProp } from "@react-navigation/native";

type MainScreenRouteProp = RouteProp<StackParamList, "Main">;
interface Props {
  route: MainScreenRouteProp;
}
/*
const MainParams = ({ route }: Props) => {
  const params = route.params;
  console.log(params);
};
*/

function MainScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="もう一度メイン画面へ"
        onPress={() => navigation.navigate("Main")}
      />
      <Text>{route.id}</Text>
    </View>
  );
}

export default MainScreen;
