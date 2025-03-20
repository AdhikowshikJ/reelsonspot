import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const OTP_DIGIT_COUNT = 6;

export default function OTPVerificationScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(OTP_DIGIT_COUNT).fill(""));
  const inputRefs = useRef<TextInput[]>([]);
  const [timeLeft, setTimeLeft] = useState(90); // 1:30 in seconds
  const [canResend, setCanResend] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91 93**3**95");

  // Timer for OTP resend
  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOtpChange = (value: string, index: number): void => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to next input
    if (value && index < OTP_DIGIT_COUNT - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ): void => {
    // Handle backspace to move to previous input
    if (e.nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOtp = (): void => {
    if (canResend) {
      // Resend OTP logic
      setTimeLeft(90);
      setCanResend(false);
    }
  };

  const handleVerifyOtp = (): void => {
    // Verify OTP logic
    const enteredOtp = otp.join("");
    console.log("Verifying OTP:", enteredOtp);
    // Navigate to home screen on success
    router.push("/(tabs)/home");
  };

  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <View className="px-6 pt-12 flex-1">
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} className="mb-8">
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            {/* Header */}
            <Text className="text-white text-4xl font-bold mb-3">
              OTP Verification
            </Text>
            <View className="mb-8">
              <Text className="text-gray-400 text-lg">
                Please enter 6-digit code sent to you at
              </Text>
              <Text className="text-red-500 text-lg font-medium">
                {phoneNumber}
              </Text>
            </View>

            {/* OTP Input */}
            <View className="flex-row justify-between mb-8">
              {Array(OTP_DIGIT_COUNT)
                .fill(0)
                .map((_, index) => (
                  <TextInput
                    key={index}
                    ref={(ref: TextInput | null) => {
                      if (ref) inputRefs.current[index] = ref;
                    }}
                    className="w-14 h-14 bg-gray-800 text-white text-center text-xl font-bold rounded-md"
                    keyboardType="number-pad"
                    maxLength={1}
                    value={otp[index]}
                    onChangeText={(value) => handleOtpChange(value, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    selectionColor="#FF0036"
                  />
                ))}
            </View>

            {/* Resend OTP and Timer */}
            <View className="flex-row justify-between items-center mb-8">
              <TouchableOpacity onPress={handleResendOtp} disabled={!canResend}>
                <Text
                  className={`text-lg ${
                    canResend ? "text-white" : "text-gray-500"
                  }`}
                >
                  Resend OTP
                </Text>
              </TouchableOpacity>
              <Text className="text-white text-lg">{formatTime(timeLeft)}</Text>
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              onPress={handleVerifyOtp}
              className="rounded-lg overflow-hidden mt-8"
            >
              <LinearGradient
                colors={["#FF0A2F", "#FF0036"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="py-4 px-6 items-center rounded-lg"
              >
                <Text className="text-white text-xl font-semibold">
                  Verify OTP
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
