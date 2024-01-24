import {View} from 'react-native';
import React from 'react';
import DefaultText from '~components/DefaultText';

interface ChipProps {
  title: string;
}

export default function Chip({title}: ChipProps) {
  return (
    <View className="bg-blue-100 px-3 py-[2px] mr-1 mb-1 rounded-full">
      <DefaultText title={title} titleClassName="text-blue-700 text-xs" />
    </View>
  );
}
