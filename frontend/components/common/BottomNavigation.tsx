import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

type BottomTabItem = {
  name: string;
  activeIcon: IconName;
  inactiveIcon: IconName;
  path: string;
};

const tabs: BottomTabItem[] = [
  {
    name: "Home",
    activeIcon: "home",
    inactiveIcon: "home-outline",
    path: "/home",
  },
  {
    name: "Categories",
    activeIcon: "calendar",
    inactiveIcon: "calendar-outline",
    path: "/(category)/category",
  },
  {
    name: "Wallet",
    activeIcon: "wallet",
    inactiveIcon: "wallet-outline",
    path: "/wallet",
  },
  {
    name: "Profile",
    activeIcon: "person",
    inactiveIcon: "person-outline",
    path: "/profile",
  },
];

export default function BottomNavigation() {
  const router = useRouter();
  const currentPath = usePathname();

  const isActive = (path: string) => {
    if (path === "/home" && currentPath === "/home") {
      return true;
    }
    if (path.includes("category") && currentPath?.includes("category")) {
      return true;
    }
    if (path.includes("wallet") && currentPath?.includes("wallet")) {
      return true;
    }
    if (path.includes("profile") && currentPath?.includes("profile")) {
      return true;
    }
    return false;
  };

  return (
    <View className="bg-black border-t border-zinc-900 pt-2 pb-6 px-4">
      <View className="flex-row justify-between">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            className="items-center justify-center"
            onPress={() => {
              if (tab.path === "/home") {
                router.push("/home");
              } else if (tab.path === "/(category)/category") {
                router.push("/(category)/category");
              } else if (tab.path === "/wallet") {
                console.log("Wallet - not implemented yet");
              } else if (tab.path === "/profile") {
                console.log("Profile - not implemented yet");
              }
            }}
          >
            {isActive(tab.path) ? (
              <View className="bg-red-600 rounded-full w-14 h-14 items-center justify-center">
                <Ionicons name={tab.activeIcon} size={24} color="white" />
              </View>
            ) : (
              <Ionicons name={tab.inactiveIcon} size={28} color="white" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
