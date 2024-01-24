import React, {ReactNode} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
import {colors} from '~utils/colors';

interface DefaultScrollView extends ScrollViewProps {
  children: ReactNode;
  onEndReached?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export default function DefaultScrollView({
  children,
  refreshing,
  onRefresh,
  onEndReached,
  ...rest
}: DefaultScrollView) {
  const handleInfinityScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    let mHeight = event.nativeEvent.layoutMeasurement.height;
    let cSize = event.nativeEvent.contentSize.height;
    let Y = event.nativeEvent.contentOffset.y;
    if (Math.ceil(mHeight + Y) >= cSize) {
      return true;
    }
    return false;
  };

  return (
    <ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          colors={[colors.primary, colors.primary]}
          refreshing={refreshing ?? false}
          tintColor={colors.primary}
          onRefresh={onRefresh}
        />
      }
      onScroll={event => {
        if (handleInfinityScroll(event)) {
          onEndReached?.call;
        }
      }}
      {...rest}>
      {children}
    </ScrollView>
  );
}
