import React, {RefObject} from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  RefreshControl,
} from 'react-native';
import {colors} from '~utils/colors';

interface DefaultFlatList<DataType> extends FlatListProps<DataType> {
  data: DataType[];
  defaultRef?: RefObject<FlatList>;
  onRefresh?: () => void;
  refreshing?: boolean;
  renderItem: ListRenderItem<DataType>;
}

export default function DefaultFlatList<DataType>({
  refreshing,
  onRefresh,
  data,
  renderItem,
  defaultRef,
  ...rest
}: DefaultFlatList<DataType>) {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, key) => key.toString()}
      ref={defaultRef}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          colors={[colors.primary, colors.primary]}
          refreshing={refreshing ?? false}
          tintColor={colors.primary}
          onRefresh={onRefresh}
        />
      }
      {...rest}
    />
  );
}
