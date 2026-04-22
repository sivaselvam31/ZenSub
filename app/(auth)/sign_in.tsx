import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        href="/(auth)/sign_up"
        className="mt-4 rounded bg-primary px-4 py-2"
      >
        <Text className="text-white">Create Account</Text>
      </Link>
    </View>
  );
};
export default SignIn;
