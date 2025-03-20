import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import BottomNavigation from "../components/common/BottomNavigation";
import "../global.css";
export default function AppLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </View>
  );
}
