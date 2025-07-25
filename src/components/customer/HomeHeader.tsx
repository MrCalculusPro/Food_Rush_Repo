import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { icons } from '@/assets/images'
import { Ionicons } from '@expo/vector-icons'

const HomeHeader = () => {
  return (
      <View className="flex-row justify-between items-center px-4 py-3 bg-white">
              <View className="flex-row items-center flex-1">
                <Avatar.Image
                  source={icons.appleIcon}
                  size={70}
                  style={{ backgroundColor: '#f0f0f0' }}
                />
                <View className="ml-3 flex-1">
                  <Text className="text-sm text-gray-500 mb-1">Deliver to</Text>
                  <View className="flex-row items-center">
                    <Text className="text-lg font-bold text-black">Byiem Assi</Text>
                    <Ionicons
                      name="chevron-down"
                      size={16}
                      color="#000"
                      className="ml-1"
                    />
                  </View>
                </View>
              </View>
              <View className="flex-row items-center flex-[0.4] justify-between ">
                <Pressable className="p-2 ml-2 border-gray-400 hover: bg-slate-500" onPress={()=> {}}>
                  <Ionicons name="notifications-outline" color="#000" size={24} />
                </Pressable>
                <Pressable className="p-2 ml-2">
                  <Ionicons name="bag-outline" color="#000" size={24} />
                </Pressable>
              </View>
            </View>
  )
}

export default HomeHeader