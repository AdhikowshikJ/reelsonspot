import React, { createContext, useContext } from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Tab bar height constants
const TAB_BAR_HEIGHT = 85;

// Create context to share tab bar height with child screens
export const TabBarHeightContext = createContext({ height: TAB_BAR_HEIGHT });

export default function TabsLayout() {
  // Get safe area insets for additional padding if needed
  const insets = useSafeAreaInsets();
  const tabBarHeight = TAB_BAR_HEIGHT + (insets.bottom > 0 ? insets.bottom : 0);

  return (
    <TabBarHeightContext.Provider value={{ height: tabBarHeight }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "black",
            height: tabBarHeight,
            paddingTop: 10,
            paddingBottom: insets.bottom > 0 ? insets.bottom + 15 : 20,
            paddingHorizontal: 15,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            bottom: 0,
            overflow: "hidden",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={{ paddingTop: 10 }}>
                {focused ? (
                  <View
                    style={{
                      backgroundColor: "#ef4444", // bg-red-600
                      width: 56,
                      height: 56,
                      borderRadius: 28,
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#ef4444",
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.5,
                      shadowRadius: 5,
                      elevation: 6,
                    }}
                  >
                    <Ionicons name="home" size={24} color="white" />
                  </View>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#27272a",
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name="home-outline" size={22} color="white" />
                  </View>
                )}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="category"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={{ paddingTop: 10 }}>
                {focused ? (
                  <View
                    style={{
                      backgroundColor: "#ef4444", // bg-red-600
                      width: 56,
                      height: 56,
                      borderRadius: 28,
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#ef4444",
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.5,
                      shadowRadius: 5,
                      elevation: 6,
                    }}
                  >
                    <Ionicons name="calendar" size={24} color="white" />
                  </View>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#27272a",
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name="calendar-outline" size={22} color="white" />
                  </View>
                )}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={{ paddingTop: 10 }}>
                {focused ? (
                  <View
                    style={{
                      backgroundColor: "#ef4444", // bg-red-600
                      width: 56,
                      height: 56,
                      borderRadius: 28,
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#ef4444",
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.5,
                      shadowRadius: 5,
                      elevation: 6,
                    }}
                  >
                    <Ionicons name="wallet" size={24} color="white" />
                  </View>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#27272a",
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name="wallet-outline" size={22} color="white" />
                  </View>
                )}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={{ paddingTop: 10 }}>
                {focused ? (
                  <View
                    style={{
                      backgroundColor: "#ef4444", // bg-red-600
                      width: 56,
                      height: 56,
                      borderRadius: 28,
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#ef4444",
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.5,
                      shadowRadius: 5,
                      elevation: 6,
                    }}
                  >
                    <Ionicons name="person" size={24} color="white" />
                  </View>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#27272a",
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name="person-outline" size={22} color="white" />
                  </View>
                )}
              </View>
            ),
          }}
        />
      </Tabs>
    </TabBarHeightContext.Provider>
  );
}
