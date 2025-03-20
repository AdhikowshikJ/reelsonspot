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
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TabBarHeightContext } from "./_layout";

const { width } = Dimensions.get("window");

type IconName = React.ComponentProps<typeof Ionicons>["name"];

type WalletFeature = {
  id: string;
  icon: IconName;
  title: string;
  color: string;
};

type Discount = {
  id: string;
  title: string;
  discount: string;
  code: string;
  validUntil: string;
  color: string;
};

export default function WalletScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState("adhi");
  const [cardNumber, setCardNumber] = useState("**** **** **** 4242");
  const [balance, setBalance] = useState("₹24,500");
  const [expiryDate, setExpiryDate] = useState("04/24");
  const [currentDiscountSlide, setCurrentDiscountSlide] = useState(0);
  const { height: tabBarHeight } = useContext(TabBarHeightContext);

  const walletFeatures: WalletFeature[] = [
    {
      id: "add_money",
      icon: "add-circle-outline" as IconName,
      title: "Add Money",
      color: "#FF0A2F",
    },
    {
      id: "statements",
      icon: "swap-horizontal-outline" as IconName,
      title: "Statements",
      color: "#FF0A2F",
    },
    {
      id: "invoice",
      icon: "document-text-outline" as IconName,
      title: "Invoice",
      color: "#FF0A2F",
    },
    {
      id: "refer",
      icon: "ticket-outline" as IconName,
      title: "Refer and Earn",
      color: "#FF0A2F",
    },
  ];

  const discounts: Discount[] = [
    {
      id: "discount1",
      title: "RS.125",
      discount: "OFF ON SPENDS ABOVE RS.2000",
      code: "FLASH125",
      validUntil: "04/24",
      color: "#FF0A2F",
    },
    {
      id: "discount2",
      title: "RS.200",
      discount: "OFF ON SPENDS ABOVE RS.3000",
      code: "SNAP200",
      validUntil: "04/24",
      color: "#FF0A2F",
    },
    {
      id: "discount3",
      title: "10% OFF",
      discount: "ON ALL PACKAGES",
      code: "PACKAGE10",
      validUntil: "04/24",
      color: "#FF0A2F",
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
          {/* Header */}
          <View className="px-6 pt-6">
            {/* Greeting */}
            <Text className="text-gray-300 text-xl font-medium mb-1">
              Hi, {userName}
            </Text>
            <Text className="text-white text-4xl font-bold mb-6">
              Cha-Ching!{"\n"}Your Money is Here!
            </Text>
          </View>

          {/* Wallet Balance Card */}
          <View className="mx-6 mb-8">
            <View className="rounded-3xl overflow-hidden">
              <LinearGradient
                colors={["#FF0A2F", "#FF0036"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="p-6 h-44"
              >
                {/* Red Circle Decorations */}
                <View className="absolute top-4 left-4 w-28 h-28 bg-red-700 opacity-30 rounded-full" />
                <View className="absolute top-20 right-8 w-36 h-36 bg-red-700 opacity-30 rounded-full" />
                <View className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-700 opacity-30 rounded-full" />

                {/* Balance Info */}
                <Text className="text-white text-lg">Balance</Text>
                <Text className="text-white text-5xl font-bold mt-1">
                  Rs. {balance}
                </Text>

                <View className="flex-row justify-between mt-8">
                  <Text className="text-white text-lg">Expiry</Text>
                  <Text className="text-white text-lg">{expiryDate}</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          {/* Wallet Features */}
          <View className="flex-row justify-between px-6 mb-10">
            {walletFeatures.map((feature) => (
              <TouchableOpacity
                key={feature.id}
                className="items-center"
                onPress={() => console.log(`Selected: ${feature.title}`)}
              >
                <View className="w-16 h-16 bg-zinc-800 rounded-lg items-center justify-center mb-2">
                  <Ionicons name={feature.icon} size={24} color="#FF0036" />
                </View>
                <Text className="text-white text-sm text-center">
                  {feature.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Instant Discounts */}
          <View className="px-6 mb-8">
            <View className="flex-row items-center mb-4">
              <Text className="text-white text-2xl font-bold mr-2">
                Instant Discounts
              </Text>
              <Text className="text-red-500 text-xl">🔥</Text>
            </View>

            {/* Discount Carousel */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              onMomentumScrollEnd={(e) => {
                const newIndex = Math.round(
                  e.nativeEvent.contentOffset.x / width
                );
                setCurrentDiscountSlide(newIndex);
              }}
            >
              {discounts.map((discount, index) => (
                <View
                  key={discount.id}
                  style={{ width: width - 48 }}
                  className="mr-4 rounded-3xl overflow-hidden h-40"
                >
                  <View className="flex-1 bg-red-600 flex-row">
                    {/* Left side with discount info */}
                    <View className="p-6 flex-3 justify-center">
                      <Text className="text-white text-lg font-medium">
                        UPTO
                      </Text>
                      <Text className="text-white text-5xl font-bold">
                        {discount.title}
                      </Text>
                      <Text className="text-white text-base font-medium">
                        {discount.discount}
                      </Text>
                    </View>

                    {/* Middle with image */}
                    <View className="flex-2 justify-center items-center">
                      <Image
                        source={{ uri: discount.image }}
                        className="w-28 h-28"
                        style={{ opacity: 0.9 }}
                      />
                    </View>

                    {/* Right side with code */}
                    <View className="flex-1 bg-red-800 items-center justify-center border-l border-dashed border-white border-l-2">
                      <View className="rotate-90">
                        <Text className="text-white text-base font-bold">
                          CODE
                        </Text>
                        <Text className="text-white text-xl font-bold">
                          {discount.code}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Pagination Dots */}
            <View className="flex-row justify-center mt-4">
              {discounts.map((_, index) => (
                <View
                  key={index}
                  className={`h-1 mx-1 rounded-full ${
                    currentDiscountSlide === index
                      ? "bg-red-500 w-6"
                      : "bg-gray-600 w-1"
                  }`}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
