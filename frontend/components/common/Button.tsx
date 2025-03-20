import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { cn } from "../../lib/utils";

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = "primary",
  isLoading = false,
  disabled = false,
  className = "",
  textClassName = "",
}) => {
  const baseStyles =
    "w-full h-14 rounded-xl items-center justify-center overflow-hidden";

  // Define colors based on variant
  const gradientColors: Record<string, [string, string]> = {
    primary: ["#ef4444", "#dc2626"],
    secondary: ["#4b5563", "#374151"],
    outline: ["transparent", "transparent"],
  };

  const borderStyles = {
    primary: "",
    secondary: "",
    outline: "border-2 border-red-600",
  };

  const textBaseStyles = "text-lg font-semibold";
  const textVariantStyles = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-red-600",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles,
        borderStyles[variant],
        disabled && "opacity-50",
        className
      )}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={gradientColors[variant]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute w-full h-full"
      />
      {isLoading ? (
        <ActivityIndicator
          color={variant === "outline" ? "#dc2626" : "white"}
          size="small"
        />
      ) : (
        <View className="flex-row items-center justify-center">
          <Text
            className={cn(
              textBaseStyles,
              textVariantStyles[variant],
              textClassName
            )}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
