import React, { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TabBarHeightContext } from "./_layout";

const { width } = Dimensions.get("window");

type IconName = React.ComponentProps<typeof Ionicons>["name"];

type ProfileSection = {
  id: string;
  title: string;
  items: ProfileItem[];
};

type ProfileItem = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: IconName;
  rightIcon?: IconName;
  action?: () => void;
};

export default function ProfileScreen() {
  const { height: tabBarHeight } = useContext(TabBarHeightContext);
  const [userProfile, setUserProfile] = useState({
    name: "adhikowshik reddy",
    phone: "+91 9398316695",
    email: "adhireddy716@gmail.com",
    memberSince: "Mar, 2025",
    isEmailVerified: false,
    balance: "0.00",
  });

  const profileSections: ProfileSection[] = [
    {
      id: "bookings",
      title: "Your Bookings & Cancellations",
      items: [
        {
          id: "upcoming",
          title: "Upcoming Booking",
          subtitle: "View all your Booking History",
          rightIcon: "chevron-forward" as IconName,
          action: () => console.log("View upcoming bookings"),
        },
        {
          id: "cancellation",
          title: "Cancellation",
          subtitle: "Cancelled Booking Details",
          rightIcon: "chevron-forward" as IconName,
          action: () => console.log("View cancellations"),
        },
      ],
    },
    {
      id: "locations",
      title: "Location And Addresses",
      items: [
        {
          id: "manage_address",
          title: "Manage Address",
          rightIcon: "chevron-forward" as IconName,
          action: () => console.log("Manage addresses"),
        },
        {
          id: "add_new",
          title: "Add New",
          rightIcon: "chevron-forward" as IconName,
          action: () => console.log("Add new address"),
        },
      ],
    },
    {
      id: "wallet",
      title: "Wallet & History",
      items: [],
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: tabBarHeight }}
        >
          {/* Header with Support */}
          <View className="px-6 pt-6 flex-row justify-between items-center">
            <View className="flex-1" />
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="headset-outline" size={24} color="white" />
              <Text className="text-gray-400 text-base ml-2">Support</Text>
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <View className="flex-row items-center px-6 mt-6 mb-4">
            {/* Profile Picture */}
            <View className="w-24 h-24 rounded-full bg-zinc-800 mr-4 items-center justify-center border-2 border-zinc-700">
              <Text className="text-white text-3xl font-semibold">ar</Text>
            </View>

            <View className="flex-1">
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-2xl font-semibold">
                  {userProfile.name}
                </Text>
                <TouchableOpacity className="p-2 bg-zinc-800 rounded-full">
                  <Ionicons name="pencil" size={20} color="white" />
                </TouchableOpacity>
              </View>
              <Text className="text-gray-400 text-base">
                Member Since {userProfile.memberSince}
              </Text>
            </View>
          </View>

          {/* Contact Info */}
          <View className="px-6 mb-6">
            {/* Phone Number */}
            <View className="flex-row items-center mb-4">
              <Ionicons name="call-outline" size={20} color="gray" />
              <Text className="text-white text-base ml-3">
                {userProfile.phone}
              </Text>
            </View>

            {/* Email */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="mail-outline" size={20} color="gray" />
                <Text className="text-white text-base ml-3">
                  {userProfile.email}
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-red-600 text-base font-medium">
                  Verify Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Divider */}
          <View className="border-b border-zinc-800 mx-4 mb-4" />

          {/* Wallet Card */}
          <TouchableOpacity className="mx-6 mb-6">
            <LinearGradient
              colors={["#FF0A2F", "#FF0036"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="rounded-xl p-4 flex-row justify-between items-center"
            >
              <View className="flex-row items-center">
                <Ionicons name="wallet-outline" size={24} color="white" />
                <Text className="text-white text-lg ml-3">Cash Balance</Text>
              </View>

              <View className="flex-row items-center">
                <Text className="text-white text-2xl font-bold mr-4">
                  Rs.{userProfile.balance}
                </Text>
                <View className="flex-row">
                  <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center mr-2">
                    <Ionicons name="add" size={24} color="#FF0036" />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center">
                    <Ionicons name="arrow-forward" size={24} color="#FF0036" />
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Profile Sections */}
          {profileSections.map((section) => (
            <View key={section.id} className="mb-6">
              <Text className="text-gray-500 text-xl font-medium px-6 mb-3">
                {section.title}
              </Text>

              {section.items.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  className="px-6 py-4"
                  onPress={item.action}
                >
                  <View className="flex-row justify-between items-center">
                    <View>
                      <Text className="text-white text-lg font-medium">
                        {item.title}
                      </Text>
                      {item.subtitle && (
                        <Text className="text-gray-500 text-base mt-1">
                          {item.subtitle}
                        </Text>
                      )}
                    </View>
                    {item.rightIcon && (
                      <Ionicons name={item.rightIcon} size={24} color="white" />
                    )}
                  </View>
                  {index < section.items.length - 1 && (
                    <View className="border-b border-zinc-800 mt-4" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
