import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./src/navigation/HomeStack";

export default function App() {
  return <HomeStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
