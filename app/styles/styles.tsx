/**
 * Viewのスタイルをここに記述
 */

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
  bold: {
    fontWeight: "bold",
  },
  mainTitle: {
    fontSize: 32,
    color: "#222",
  },
  button: {
    width: 200,
    height: 40,
    borderColor: "#f00",
    backgroundColor: "#ff0",
    borderWidth: 4,
    borderRadius: 20,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  wideInput: {
    width: "80%",
    height: 200,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
});

export default styles;
