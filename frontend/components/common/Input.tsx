import React from "react";
import { View, TextInput, Text, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cn } from "../../lib/utils";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  containerClassName,
  inputClassName,
  labelClassName,
  ...props
}) => {
  return (
    <View className={cn("space-y-2", containerClassName)}>
      {label && (
        <Text className={cn("text-white text-lg font-medium", labelClassName)}>
          {label}
        </Text>
      )}
      <View
        className={cn(
          "flex-row items-center bg-white/10 backdrop-blur-md rounded-xl px-4 h-14 border border-white/5",
          error ? "border-red-500" : "focus-within:border-white/20",
          inputClassName
        )}
      >
        {icon && (
          <Ionicons name={icon} size={24} color="#9ca3af" className="mr-3" />
        )}
        <TextInput
          className={cn(
            "flex-1 ml-2 text-lg text-white",
            !icon && "ml-0",
            inputClassName
          )}
          placeholderTextColor="#9ca3af"
          selectionColor="rgba(239, 68, 68, 0.5)"
          {...props}
        />
      </View>
      {error && <Text className="text-red-500 text-sm ml-1">{error}</Text>}
    </View>
  );
};
