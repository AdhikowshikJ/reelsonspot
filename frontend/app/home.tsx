import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BottomNavigation from "../components/common/BottomNavigation";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.28;

type IconName = React.ComponentProps<typeof Ionicons>["name"];

export default function HomeScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState("adhi");
  const [location, setLocation] = useState("Hyderabad");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCouponSlide, setCurrentCouponSlide] = useState(0);
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  const mainFeatures = [
    {
      id: "book_now",
      icon: "add-outline" as IconName,
      title: "Book Now",
      color: "#FF0036",
      highlighted: true,
    },
    {
      id: "packages",
      icon: "calendar-outline" as IconName,
      title: "Packages",
      color: "#FFFFFF",
    },
    {
      id: "my_wallet",
      icon: "wallet-outline" as IconName,
      title: "My Wallet",
      color: "#FFFFFF",
    },
    {
      id: "settings",
      icon: "settings-outline" as IconName,
      title: "Settings",
      color: "#FFFFFF",
    },
  ];

  const categoryCards = [
    {
      id: "birthday",
      title: "Birthday",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "celebrity",
      title: "Celebrity Shoot",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "brand",
      title: "Brand Shoot",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
  ];

  const banners = [
    {
      id: "banner1",
      title: "Reels Created And Delivered On The Spot",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "banner2",
      title: "Professional Photography Services",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "banner3",
      title: "Event Coverage Packages",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "banner4",
      title: "Social Media Content Creation",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "banner5",
      title: "Corporate Video Production",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
  ];

  const coupons = [
    {
      id: "coupon1",
      title: "UPTO RS.125 OFF",
      subtitle: "ON SPENDS ABOVE RS.2000",
      code: "FLASH125",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "coupon2",
      title: "UPTO RS.200 OFF",
      subtitle: "ON SPENDS ABOVE RS.3000",
      code: "SNAP200",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "coupon3",
      title: "FLAT 10% OFF",
      subtitle: "ON ALL PACKAGES",
      code: "PACKAGE10",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "coupon4",
      title: "FREE PRINTS",
      subtitle: "WITH ANY BOOKING",
      code: "FREEPRINT",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
  ];

  const featuredShoots = [
    {
      id: "wedding",
      title: "Wedding",
      subtitle: "Shoot",
      description: "Capture your love story with Elegance",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "corporate",
      title: "Corporate",
      subtitle: "Shoot",
      description: "Capture all your achievements with Elegance",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
  ];

  const partners = [
    {
      id: "partner1",
      name: "Poojitha Bandari",
      category: "Food and Beverages",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "partner2",
      name: "Siva Kumar",
      category: "Event Management",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "partner3",
      name: "Ravi Teja",
      category: "Studio Equipment",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
  ];

  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header - First Screen */}
          <View className="px-6 pt-6">
            {/* Greeting and Location */}
            <View className="flex-row justify-between items-center mb-4">
              <View>
                <Text className="text-gray-300 text-xl font-medium">
                  Hi, {userName}
                </Text>
                <TouchableOpacity className="flex-row items-center">
                  <Text className="text-red-500 text-2xl font-bold">
                    {location}
                  </Text>
                  <Ionicons name="chevron-forward" size={24} color="#FF0036" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className="w-14 h-14 rounded-full bg-zinc-900 items-center justify-center"
                onPress={() => console.log("Notifications")}
              >
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            {/* Welcome Message */}
            <Text className="text-white text-4xl font-bold mb-10">
              You are just in{"\n"}the right place!
            </Text>
          </View>

          {/* Main Features */}
          <View className="mb-8 px-4">
            <View className="flex-row justify-between bg-zinc-900 rounded-3xl p-3">
              {mainFeatures.map((feature) => (
                <TouchableOpacity
                  key={feature.id}
                  className="items-center"
                  onPress={() => console.log(`Pressed: ${feature.title}`)}
                >
                  <View
                    className={`w-14 h-14 rounded-full items-center justify-center mb-2 ${
                      feature.highlighted ? "bg-red-600" : "bg-zinc-800"
                    }`}
                  >
                    <Ionicons
                      name={feature.icon}
                      size={24}
                      color={feature.color}
                    />
                  </View>
                  <Text className="text-white text-sm">{feature.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Banner Carousel */}
          <View className="mb-8">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              onMomentumScrollEnd={(e) => {
                const newIndex = Math.round(
                  e.nativeEvent.contentOffset.x / width
                );
                setCurrentSlide(newIndex);
              }}
            >
              {banners.map((banner, index) => (
                <View
                  key={banner.id}
                  style={{ width: width - 32 }}
                  className="mx-4 rounded-3xl overflow-hidden h-48"
                >
                  <LinearGradient
                    colors={["#FF0A2F", "#FF0036"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className="absolute w-full h-full z-10"
                    style={{ opacity: 0.9 }}
                  />
                  <Image
                    source={{ uri: banner.image }}
                    className="absolute w-full h-full"
                    style={{ opacity: 0.5 }}
                  />
                  <View className="p-6 z-20 flex-1 justify-center">
                    <Text className="text-white text-3xl font-bold w-2/3">
                      {banner.title}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Pagination Dots */}
            <View className="flex-row justify-center mt-4">
              {banners.map((_, index) => (
                <View
                  key={index}
                  className={`h-1 mx-1 rounded-full ${
                    currentSlide === index
                      ? "bg-red-500 w-6"
                      : "bg-gray-600 w-1"
                  }`}
                />
              ))}
            </View>
          </View>

          {/* Discover with Vibe section */}
          <View className="px-6 mb-10">
            <Text className="text-white text-2xl font-bold mb-4">
              Discover with Vibe
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
            >
              {categoryCards.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  className="mr-4 rounded-2xl overflow-hidden"
                  style={{ width: width * 0.4, height: width * 0.5 }}
                  onPress={() => console.log(`Selected: ${category.title}`)}
                >
                  <Image
                    source={{ uri: category.image }}
                    className="w-full h-full"
                  />
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="absolute bottom-0 w-full p-3"
                  >
                    <Text className="text-white text-lg font-bold">
                      {category.title}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Instant Discounts - Second Screen */}
          <View className="px-6 mb-8">
            <View className="flex-row items-center mb-4">
              <Text className="text-white text-2xl font-bold mr-2">
                Instant Discounts
              </Text>
              <Text className="text-red-500 text-xl">🔥</Text>
            </View>

            {/* Coupon Carousel */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              onMomentumScrollEnd={(e) => {
                const newIndex = Math.round(
                  e.nativeEvent.contentOffset.x / width
                );
                setCurrentCouponSlide(newIndex);
              }}
            >
              {coupons.map((coupon, index) => (
                <View
                  key={coupon.id}
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
                        {coupon.title}
                      </Text>
                      <Text className="text-white text-base font-medium">
                        {coupon.subtitle}
                      </Text>
                    </View>

                    {/* Middle with image */}
                    <View className="flex-2 justify-center items-center">
                      <Image
                        source={{ uri: coupon.image }}
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
                          {coupon.code}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Pagination Dots */}
            <View className="flex-row justify-center mt-4">
              {coupons.map((_, index) => (
                <View
                  key={index}
                  className={`h-1 mx-1 rounded-full ${
                    currentCouponSlide === index
                      ? "bg-red-500 w-6"
                      : "bg-gray-600 w-1"
                  }`}
                />
              ))}
            </View>
          </View>

          {/* Featured Shoots - Wedding and Corporate */}
          {featuredShoots.map((shoot, index) => (
            <View key={shoot.id} className="px-4 mb-8">
              <TouchableOpacity
                className="rounded-3xl overflow-hidden"
                style={{ height: width * 0.8 }}
                onPress={() => console.log(`Selected: ${shoot.title}`)}
              >
                <Image
                  source={{ uri: shoot.image }}
                  className="w-full h-full"
                />
                <View className="absolute bottom-0 left-0 p-6">
                  <Text className="text-white text-3xl font-bold mb-1">
                    {shoot.title}
                  </Text>
                  <Text className="text-white text-3xl font-light mb-8">
                    {shoot.subtitle}
                  </Text>
                  <View className="flex-row items-center">
                    <Text className="text-white text-xl font-medium mr-2">
                      Capture{" "}
                      {index === 0
                        ? "your love story"
                        : "all your achievements"}{" "}
                      with
                    </Text>
                    <Text className="text-white text-xl italic">Elegance</Text>
                    <Ionicons
                      name="arrow-forward"
                      size={24}
                      color="white"
                      className="ml-2"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}

          {/* Partners of the week */}
          <View className="px-6 mb-8">
            <Text className="text-white text-2xl font-bold mb-4">
              Partners of the week!
            </Text>

            {/* Partners Carousel */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              onMomentumScrollEnd={(e) => {
                const newIndex = Math.round(
                  e.nativeEvent.contentOffset.x / width
                );
                setCurrentPartnerSlide(newIndex);
              }}
            >
              {partners.map((partner, index) => (
                <View
                  key={partner.id}
                  style={{ width: width - 48 }}
                  className="mr-4 rounded-3xl overflow-hidden h-32 bg-red-800"
                >
                  <Image
                    source={{ uri: partner.image }}
                    className="absolute w-full h-full"
                    style={{ opacity: 0.7 }}
                  />
                  <View className="p-6 justify-center">
                    <Text className="text-white text-3xl font-bold">
                      {partner.name}
                    </Text>
                    <Text className="text-white text-lg">
                      {partner.category}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Pagination Dots */}
            <View className="flex-row justify-center mt-4 mb-4">
              {partners.map((_, index) => (
                <View
                  key={index}
                  className={`h-1 mx-1 rounded-full ${
                    currentPartnerSlide === index
                      ? "bg-red-500 w-6"
                      : "bg-gray-600 w-1"
                  }`}
                />
              ))}
            </View>
          </View>

          {/* Made with love in India */}
          <View className="items-center mb-20">
            <Text className="text-gray-400 text-4xl font-bold italic mb-2">
              Made with <Text className="text-red-500">❤️</Text>
            </Text>
            <Text className="text-gray-400 text-4xl font-bold italic mb-4">
              in India!
            </Text>
            <View className="flex-row items-center">
              <Text className="text-gray-500 text-base mr-2">A Product Of</Text>
              <Text className="text-white text-base font-semibold">
                konchamkode
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Use shared bottom navigation */}
        <BottomNavigation />
      </SafeAreaView>
    </View>
  );
}
