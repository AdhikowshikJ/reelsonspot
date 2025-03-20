import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="w-full"
    >
      <View className="space-y-4">
        <View className="space-y-2">
          <Text className="text-gray-700 text-sm font-medium">Email</Text>
          <TextInput
            className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-700 text-sm font-medium">Password</Text>
          <TextInput
            className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={() => router.push("/(auth)/forgot-password")}
          className="self-end"
        >
          <Text className="text-blue-600 text-sm">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSubmit}
          className="w-full h-12 bg-blue-600 rounded-lg items-center justify-center"
        >
          <Text className="text-white font-semibold text-base">Sign In</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center space-x-1">
          <Text className="text-gray-600">Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text className="text-blue-600 font-medium">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
