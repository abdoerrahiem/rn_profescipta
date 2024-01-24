import {View} from 'react-native';
import React from 'react';
import DefaultText from '~components/DefaultText';
import Button from '~components/Button';

interface HomeTopHeaderProps {
  containerClassName?: string;
  title: string;
  onPress?: () => void;
}

export default function HomeTopHeader({
  title,
  containerClassName,
  onPress,
}: HomeTopHeaderProps) {
  return (
    <View className={`px-4 flex-row items-center ${containerClassName}`}>
      <DefaultText
        title={title}
        titleClassName="font-inter-semibold text-lg flex-1"
      />
      <Button
        containerClassName="flex-start border-[0.5px] border-neutral-400 px-2 py-1"
        title="See more"
        titleClassName="text-neutral-400 text-xs font-inter-regular"
        onPress={onPress}
      />
    </View>
  );
}
