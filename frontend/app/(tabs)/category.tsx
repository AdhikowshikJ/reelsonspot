import React, { useState, useContext } from "react";
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
import { TabBarHeightContext } from "./_layout";

const { width, height } = Dimensions.get("window");

type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function CategoryScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState("adhi");
  const { height: tabBarHeight } = useContext(TabBarHeightContext);

  const categories: Category[] = [
    {
      id: "pr_events",
      title: "PR Events",
      description: "Movie Launch, Events, Success meet, Previews",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "events",
      title: "Events",
      description:
        "Parties, Concerts, Pooja's, Weddings, Festival celebrations",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "fashion",
      title: "Fashion",
      description: "Styling, Product Branding, Modeling",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "corporate",
      title: "Corporate",
      description: "Conferences, Team Building, Product Launches, Seminars",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
    {
      id: "personal",
      title: "Personal",
      description: "Portfolio Shoots, Family Photos, Anniversary, Baby Shoots",
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    console.log(`Selected category: ${categoryId}`);
    // Navigate to specific category flow
    // router.push(`/(category)/${categoryId}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: tabBarHeight }}
        >
          {/* Header */}
          <View className="px-6 pt-6 pb-6">
            <Text className="text-gray-300 text-xl font-medium mb-1">
              Hi, {userName}
            </Text>
            <Text className="text-white text-4xl font-bold">
              Choose your{"\n"}required Category
            </Text>
          </View>

          {/* Category Cards */}
          <View className="px-4">
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                className="mb-4 mx-2"
                onPress={() => handleCategorySelect(category.id)}
              >
                <View className="rounded-3xl overflow-hidden">
                  <Image
                    source={{ uri: category.image }}
                    className="w-full h-40"
                    style={{ opacity: 0.7 }}
                  />
                  <LinearGradient
                    colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.8)"]}
                    className="absolute w-full h-full"
                  />
                  <View className="absolute p-6 w-full h-full justify-center">
                    <View>
                      <Text className="text-white text-3xl font-bold mb-2">
                        {category.title}
                      </Text>
                      <Text className="text-white text-base opacity-90 mb-4 pr-16 w-4/5">
                        {category.description}
                      </Text>
                      <Ionicons
                        name="arrow-forward"
                        size={24}
                        color="white"
                        style={{ opacity: 0.9 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
