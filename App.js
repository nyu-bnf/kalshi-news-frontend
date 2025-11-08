import "react-native-gesture-handler";
import "./global.css";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import DashboardScreen from "./screens/DashboardScreen";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
