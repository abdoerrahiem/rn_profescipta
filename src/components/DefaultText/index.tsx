import React from 'react';
import {Text, TextProps} from 'react-native';

interface DefaultTextProps {
  subtitle?: string | number;
  subtitleClassName?: string;
  subtitlePress?: () => void;
  subtitleProps?: TextProps;
  title?: string | number;
  titleClassName?: string;
  titlePress?: () => void;
  titleProps?: TextProps;
}

export default function DefaultText({
  title,
  titleClassName,
  titlePress,
  titleProps,
  subtitle,
  subtitleClassName,
  subtitleProps,
  subtitlePress,
}: DefaultTextProps) {
  return (
    <Text
      className={`text-black font-inter-regular ${titleClassName}`}
      onPress={titlePress}
      {...titleProps}>
      {title}
      {subtitle && (
        <Text
          className={`text-black font-inter-regular ${subtitleClassName}`}
          onPress={subtitlePress}
          {...subtitleProps}>
          {' '}
          {subtitle}
        </Text>
      )}
    </Text>
  );
}
