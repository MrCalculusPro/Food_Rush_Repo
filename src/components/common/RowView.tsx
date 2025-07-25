import { View, Text,  TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

interface rowView {
  leftIconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  rightIconName?: keyof typeof MaterialIcons.glyphMap;
  title: string;
}
const RowView = ({
  leftIconName,
  onPress,
  rightIconName = 'arrow-forward-ios',
  title,
}: rowView) => {
  return (
    <View className="flex-row justify-between mb-4 items-center px-4 py-2">
      <Ionicons name={leftIconName} size={20}/>

      <Text className='font-semibold text-[16px]'>{title}</Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialIcons name={rightIconName} size={20} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RowView;
