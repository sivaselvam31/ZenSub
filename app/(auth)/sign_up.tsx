import { View, Text } from 'react-native'
import React from 'react'
import { Link } from "expo-router"

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/(auth)/sign_up" className="mt-4 rounded bg-primary px-4 py-2">
              <Text className="text-white">Sign In</Text>
            </Link>
    </View>
  )
}

export default SignUp