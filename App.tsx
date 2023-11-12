import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./src/navigation/HomeStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import * as SplashScreen from "expo-splash-screen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeStack />
    </QueryClientProvider>
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
