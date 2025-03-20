import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cn } from "../../lib/utils";

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  label?: React.ReactNode;
  containerClassName?: string;
  checkboxClassName?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress,
  label,
  containerClassName,
  checkboxClassName,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn("flex-row items-start space-x-3", containerClassName)}
      activeOpacity={0.7}
    >
      <View
        className={cn(
          "w-6 h-6 rounded-md items-center justify-center overflow-hidden",
          checked ? "bg-red-600" : "bg-white/5 border border-white/20",
          checkboxClassName
        )}
      >
        {checked && (
          <View className="items-center justify-center w-full h-full">
            <Ionicons name="checkmark" size={16} color="white" />
          </View>
        )}
      </View>
      {label && (
        <View className="flex-1">
          {typeof label === "string" ? (
            <Text className="text-gray-400 text-base">{label}</Text>
          ) : (
            label
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
