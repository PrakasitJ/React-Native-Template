import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="flex items-center justify-center bg-opacity-20 bg-blue-50 p-3 rounded-md m-2">
        <Text className="text-xl text-blue-400 font-bold">
          Welcome to EasyDose
        </Text>

        <View className="flex flex-row">
          <Text className="text-xl text-blue-400">Now writing in </Text>
          <Text className="text-lg text-blue-500 font-bold">NativeWind</Text>
          <Text className="text-xl text-yellow-400"> ✨✨✨</Text>
        </View>
      </View>

      <View className="flex items-center justify-center bg-opacity-20 bg-blue-50 p-3 rounded-md m-2">
        <Text className="text-xl text-blue-400 font-bold">
          Let's Explore Our App!
        </Text>
      </View>

      <View className="flex flex-row">
        <View className="flex items-center justify-center bg-opacity-20 bg-blue-50 p-3 rounded-md m-2">
          <Link href="/" className="text-xl text-blue-500 font-bold">
            Home
          </Link>
        </View>

        <View className="flex items-center justify-center bg-opacity-20 bg-blue-50 p-3 rounded-md m-2">
          <Link href="/explore" className="text-xl text-blue-500 font-bold">
            Explore
          </Link>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
