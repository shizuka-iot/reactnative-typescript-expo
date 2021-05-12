import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../styles/styles";
import "react-native-gesture-handler";

/**
 * StackNavigationでの画面遷移時にパラメーターを送るために必ず必要
 * StackNavigationPropで型定義をしておく
 * */
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

type NavigationProp = StackNavigationProp<StackParamList, "Home">;
interface Props {
  navigation: NavigationProp;
}

function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput multiline={true} style={styles.wideInput}></TextInput>
      <TouchableOpacity
        style={[styles.button, styles.center]}
        onPress={() => navigation.navigate("Main", { id: 1 })}
      >
        <Text style={[styles.red, styles.bold]}>メイン画面へ</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
