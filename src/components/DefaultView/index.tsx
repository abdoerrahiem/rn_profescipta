import {useIsFocused} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {StatusBar, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {colors} from '~utils/colors';

interface DefaultViewProps {
  barStyle?: 'dark-content' | 'light-content';
  children?: ReactNode;
  containerClassName?: string;
  statusBarColor?: string;
  translucent?: boolean;
}

export default function DefaultView({
  barStyle,
  children,
  containerClassName,
  statusBarColor,
  translucent,
}: DefaultViewProps) {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  const containerStyle = {
    backgroundColor: translucent
      ? 'transparent'
      : statusBarColor
      ? statusBarColor
      : colors.white,
    height: translucent ? 0 : insets.top,
  };

  return (
    <SafeAreaProvider>
      <View style={containerStyle}>
        {isFocused && (
          <StatusBar
            animated={true}
            translucent={translucent}
            backgroundColor={
              translucent
                ? 'transparent'
                : statusBarColor
                ? statusBarColor
                : colors.white
            }
            barStyle={barStyle ? barStyle : 'dark-content'}
          />
        )}
      </View>
      <View className={`flex-1 bg-white ${containerClassName ?? ''}`}>
        {children}
      </View>
    </SafeAreaProvider>
  );
}
