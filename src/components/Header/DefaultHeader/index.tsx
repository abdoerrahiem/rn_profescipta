import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigationRef} from '~navigation/RootNavigation';
import {colors} from '~utils/colors';
import DefaultText from '~components/DefaultText';

interface DefaultHeaderProps {
  iconLeftName?: string;
  iconLeftPress?: () => void;
  title?: string;
  iconRightName?: string;
  iconRightPress?: () => void;
  iconRightColor?: string;
}

export default function DefaultHeader({
  iconLeftName,
  iconLeftPress,
  title,
  iconRightName,
  iconRightPress,
  iconRightColor,
}: DefaultHeaderProps) {
  return (
    <View className="flex-row items-center bg-white px-4 h-[50]">
      <TouchableOpacity
        className="absolute left-4 z-10"
        onPress={() =>
          iconLeftPress ? iconLeftPress() : navigationRef.goBack()
        }>
        <Icon
          name={iconLeftName ?? 'arrow-left'}
          size={20}
          color={colors.black}
        />
      </TouchableOpacity>
      {title && (
        <DefaultText
          title={title}
          titleClassName="flex-1 text-center font-inter-semibold text-base"
        />
      )}
      {iconRightName && (
        <>
          <TouchableOpacity
            onPress={iconRightPress}
            className="absolute right-4 z-10">
            <Icon
              name={iconRightName}
              size={20}
              color={iconRightColor ?? colors.black}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
