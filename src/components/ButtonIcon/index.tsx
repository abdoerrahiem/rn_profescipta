import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewStyle} from 'react-native';
import {colors} from '~utils/colors';

interface ButtonIconProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  containerClassName?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

export default function ButtonIcon({
  iconName,
  iconSize,
  iconColor,
  containerClassName,
  onPress,
  containerStyle,
}: ButtonIconProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className={`bg-transparent w-[30px] h-[30px] justify-center items-center rounded-full ${
        containerClassName ?? ''
      }`}
      style={containerStyle}>
      <Icon
        name={iconName}
        size={iconSize ?? 20}
        color={iconColor ?? colors.white}
      />
    </TouchableOpacity>
  );
}
