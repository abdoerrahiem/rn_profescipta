import React from 'react';
import {View, ViewStyle} from 'react-native';

interface GapProps {
  containerClassName?: string;
  height?: number;
  style?: ViewStyle;
  width?: number;
}

export default function Gap({
  containerClassName,
  height,
  width,
  style,
}: GapProps) {
  return (
    <View className={containerClassName} style={{width, height, ...style}} />
  );
}
