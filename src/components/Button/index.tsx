import {TouchableOpacity} from 'react-native';
import React from 'react';
import DefaultText from '~components/DefaultText';

interface ButtonProps {
  containerClassName?: string;
  title?: string;
  titleClassName?: string;
  onPress?: () => void;
}

export default function Button({
  title,
  titleClassName,
  containerClassName,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`border-[1px] px-5 py-3 rounded-full ${containerClassName}`}
      activeOpacity={0.5}
      onPress={onPress}>
      <DefaultText
        title={title}
        titleClassName={`text-center font-inter-medium text-base ${titleClassName}`}
      />
    </TouchableOpacity>
  );
}
