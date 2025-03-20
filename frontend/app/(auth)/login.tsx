import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { Checkbox } from "../../components/common/Checkbox";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function LoginScreen() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSendOTP = () => {
    if (!mobileNumber) {
      setError("Please enter your mobile number");
      return;
    }
    if (!agreedToTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }
    // TODO: Implement OTP sending logic
    console.log("Sending OTP to:", mobileNumber);
    router.push("/(auth)/otp-verification");
  };

  const TermsText = (
    <Text className="text-gray-400 text-sm leading-5">
      By registering you agree to our{" "}
      <Text className="text-white underline">Privacy Policy</Text>
      {" & "}
      <Text className="text-white underline">Terms and Conditions.</Text>
    </Text>
  );

  return (
    <>
      <StatusBar style="light" />
      <View className="flex-1 bg-black">
        <SafeAreaView className="flex-1">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
          >
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                minHeight: height,
              }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <View className="flex-1 px-6 py-12 justify-between">
                {/* Top Content */}
                <View>
                  {/* Logo Section */}
                  <View className="items-center mb-16">
                    <View className="flex flex-row items-center">
                      <Text className="text-white text-5xl font-bold tracking-tight">
                        FLA
                      </Text>
                      <Text className="text-red-500 text-5xl font-bold">
                        ⚡
                      </Text>
                      <Text className="text-white text-5xl font-bold tracking-tight">
                        HOOT
                      </Text>
                    </View>
                  </View>

                  {/* Login Form Section */}
                  <View>
                    {/* Header */}
                    <View className="mb-8">
                      <Text className="text-white text-4xl font-bold tracking-tight">
                        Login/Signup
                      </Text>
                      <Text className="text-gray-400 text-base mt-1">
                        Please login to your account
                      </Text>
                    </View>

                    {/* Form */}
                    <View>
                      <Input
                        label="Enter your Mobile Number"
                        placeholder="Enter Mobile Number"
                        value={mobileNumber}
                        onChangeText={(text) => {
                          setMobileNumber(text);
                          setError("");
                        }}
                        keyboardType="phone-pad"
                        maxLength={10}
                        icon="call-outline"
                        error={error}
                        containerClassName="mb-6"
                        inputClassName="bg-white/5 border border-gray-700"
                        labelClassName="text-white text-base font-medium"
                      />

                      <View className="flex flex-row items-start mb-8">
                        <TouchableOpacity
                          onPress={() => setAgreedToTerms(!agreedToTerms)}
                          className="mr-3 mt-1"
                        >
                          <View
                            className={`w-5 h-5 rounded border ${
                              agreedToTerms
                                ? "bg-red-500 border-red-500"
                                : "border-gray-400"
                            } flex items-center justify-center`}
                          >
                            {agreedToTerms && (
                              <Ionicons
                                name="checkmark"
                                size={14}
                                color="white"
                              />
                            )}
                          </View>
                        </TouchableOpacity>
                        {TermsText}
                      </View>

                      <TouchableOpacity
                        onPress={handleSendOTP}
                        className="bg-red-600 rounded-lg overflow-hidden mt-4"
                      >
                        <LinearGradient
                          colors={["#FF0A2F", "#FF0036"]}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          className="py-4 px-6 items-center"
                        >
                          <Text className="text-white text-xl font-semibold">
                            Send OTP
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* Footer with link */}
                <View className="w-full items-center pt-8 pb-4">
                  <Text className="text-gray-500 text-base">a product by</Text>
                  <TouchableOpacity className="mt-2">
                    <Text className="text-white text-xl font-semibold">
                      konchamkode
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </>
  );
}
